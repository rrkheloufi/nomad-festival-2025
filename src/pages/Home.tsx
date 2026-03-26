import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import YouTube from "react-youtube";
import { Button } from "../components/Button";
import "../styles/Home.css";
import { artists } from "./Program";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [displayedArtists, setDisplayedArtists] = useState<string[]>([]);

  useEffect(() => {
    // Track page view

    // Shuffle artists array
    const shuffledArtists = [...artists]
      .sort(() => Math.random() - 0.5)
      .map((artist) => artist.name);
    setDisplayedArtists(shuffledArtists);

    // Show logo after 1.5 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

    // Show video after 2 seconds
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(videoTimer);
    };
  }, []);

  // Calculate the width of the artist banner
  const artistsString = [...displayedArtists, ...displayedArtists].join(
    "     •     ",
  );

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {!videoError ? (
          <div
            className={`relative w-full h-full transition-opacity duration-1000 ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}
          >
            <YouTube
              videoId="gsqQazFtUl0"
              className="youtube-iframe"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  loop: 1,
                  playlist: "gsqQazFtUl0",
                  controls: 0,
                  rel: 0,
                  showinfo: 0,
                  modestbranding: 1,
                  iv_load_policy: 3,
                  playsinline: 1,
                },
              }}
              onError={() => setVideoError(true)}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>

      {/* Content Overlay */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,20,0.5) 60%, rgba(0,0,60,0.7) 100%)",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-4 flex-grow flex flex-col items-center justify-center"
        >
          <motion.div
            className={`relative w-64 h-64 md:w-96 md:h-96 mx-auto transition-opacity duration-1000 ${
              showLogo ? "opacity-100" : "opacity-0"
            }`}
            animate={{
              opacity: [0, 1, 1, 1],
              transition: {
                times: [0, 0.1, 0.5, 1],
                duration: 4,
                delay: 1.5,
              },
            }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingBottom: 20,
            }}
          >
            <motion.img
              src="/logos/logo_nomad.png"
              alt="Nomad Festival"
              className="object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                  "drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))",
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            className="font-poppins font-semibold uppercase tracking-widest text-sm md:text-base mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            style={{
              color: "var(--color-primary)",
              letterSpacing: "0.15em",
            }}
          >
            21 - 23 août · Larbey, Landes
          </motion.p>

          <motion.h2
            className="font-poppins font-black text-white text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1.1rem, 3vw, 2rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            Viens passer le meilleur
            <br className="hidden sm:block" /> week-end de l'été !
          </motion.h2>

          <motion.div
            className="mt-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
          >
            <a
              href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025?_gl=1%2aclwyfd%2a_gcl_au%2aMTUxMjkzNDAzNi4xNzQyNTUxNjcy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Je réserve mon billet
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scrolling Artist Banner */}
        <div
          className="w-full py-5 overflow-hidden"
          style={{
            backgroundColor: "rgba(var(--color-primary-rgb), 0.12)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid rgba(var(--color-primary-rgb), 0.25)",
          }}
        >
          <div className="marquee-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="marquee-content">
                <span
                  className="font-poppins font-bold tracking-widest uppercase"
                  style={{
                    fontSize: "clamp(0.75rem, 2vw, 1rem)",
                    color: "var(--color-primary)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {artistsString}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

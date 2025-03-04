import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Home.css";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [videoError, setVideoError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after 1.5 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 1500);

    // Show video after 2 seconds
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    // Check if video loaded correctly
    const errorTimer = setTimeout(() => {
      const iframe = document.querySelector("iframe");
      if (iframe && !iframe.contentWindow) {
        setVideoError(true);
      }
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(videoTimer);
      clearTimeout(errorTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {!videoError ? (
          <div
            className={`relative w-full h-full transition-opacity duration-1000 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
            <iframe
              src="https://www.youtube.com/embed/gsqQazFtUl0?controls=0&autoplay=1&mute=1&loop=1&playlist=gsqQazFtUl0&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
              title="Festival Background Video"
              className="youtube-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-black" />
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative min-h-screen flex items-center justify-center bg-black bg-opacity-60">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.div
            className={`relative w-64 h-64 md:w-96 md:h-96 mx-auto transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}
            animate={{
              opacity: [0, 1, 1, 1],
              transition: {
                times: [0, 0.1, 0.5, 1],
                duration: 4,
                delay: 1.5
              }
            }}
          >
            <motion.img
              src="/logos/logo_nomad.png"
              alt="Nomad Festival"
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                  "drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))",
                  "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <a href="https://www.google.fr" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Réserver vos billets
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks";
import { artists } from "../Program2025";

const photoFiles: string[] = [
  "/editions/2025/DSC_0027.webp",
  "/editions/2025/DSC_0046.webp",
  "/editions/2025/DSC_0057.webp",
  "/editions/2025/DSC_0087.webp",
  "/editions/2025/DSC_0098.webp",
  "/editions/2025/DSC_0115.webp",
  "/editions/2025/DSC_0120.webp",
  "/editions/2025/DSC_0133.webp",
  "/editions/2025/DSC_0140.webp",
  "/editions/2025/DSC_0141.webp",
  "/editions/2025/DSC_0164.webp",
  "/editions/2025/DSC_0183.webp",
  "/editions/2025/DSC_0185.webp",
  "/editions/2025/DSC_0193.webp",
  "/editions/2025/DSC_0219.webp",
  "/editions/2025/DSC_0224.webp",
  "/editions/2025/DSC_0229.webp",
  "/editions/2025/DSC_0245.webp",
  "/editions/2025/DSC_0249.webp",
  "/editions/2025/DSC_0250.webp",
  "/editions/2025/DSC_0258.webp",
  "/editions/2025/DSC_0259.webp",
  "/editions/2025/DSC_0263.webp",
  "/editions/2025/DSC_0267.webp",
  "/editions/2025/DSC_0269.webp",
  "/editions/2025/DSC_0270.webp",
  "/editions/2025/DSC_0280.webp",
  "/editions/2025/DSC_0286.webp",
  "/editions/2025/DSC_0298.webp",
  "/editions/2025/DSC_0316.webp",
  "/editions/2025/DSC_0325.webp",
  "/editions/2025/DSC_0345.webp",
  "/editions/2025/DSC_0348.webp",
  "/editions/2025/DSC_0349.webp",
  "/editions/2025/DSC_0360.webp",
  "/editions/2025/DSC_0368.webp",
  "/editions/2025/DSC_0374.webp",
  "/editions/2025/DSC_0377.webp",
  "/editions/2025/DSC_0414.webp",
  "/editions/2025/DSC_0431.webp",
  "/editions/2025/DSC_0432~2.webp",
  "/editions/2025/DSC_0442.webp",
  "/editions/2025/DSC_0445~2.webp",
  "/editions/2025/DSC_0453.webp",
  "/editions/2025/DSC_0463.webp",
  "/editions/2025/DSC_0474.webp",
  "/editions/2025/DSC_0475.webp",
  "/editions/2025/DSC_0477.webp",
  "/editions/2025/DSC_0487.webp",
];

type Artist = (typeof artists)[number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Edition2025() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    const isOpen = selectedArtist !== null || selectedPhotoIndex !== null;
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedArtist, selectedPhotoIndex]);

  useEffect(() => {
    if (selectedPhotoIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "Escape") setSelectedPhotoIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedPhotoIndex]);

  const prevPhoto = () =>
    setSelectedPhotoIndex((i) => (i !== null ? (i - 1 + photoFiles.length) % photoFiles.length : null));
  const nextPhoto = () =>
    setSelectedPhotoIndex((i) => (i !== null ? (i + 1) % photoFiles.length : null));

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center pt-10 pb-8"
        >
          <p className="subtitle mb-2 tracking-widest uppercase text-sm">Éditions précédentes</p>
          <h1 className="heading-1 drop-shadow-glow">Nomad Festival 2025</h1>
          <p className="mt-2 text-sm" style={{ color: "var(--color-text)", opacity: 0.6 }}>
            Revivez les meilleurs moments de cette édition.
          </p>
        </motion.div>

        {/* ── Aftermovie ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <h2 className="heading-2">Aftermovie</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full aspect-video mb-16 overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.youtube.com/embed/8n5VSp6dsZc?controls=1&rel=0&showinfo=0&modestbranding=1"
            title="Aftermovie Nomad Festival 2025"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* ── Artistes ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 flex items-end justify-between"
        >
          <h2 className="heading-2 mb-0">Programmation</h2>
          <Link
            to="/editions/2025/artistes"
            className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 pb-1"
            style={{ color: "rgba(250,230,235,0.6)", fontFamily: "'Poppins', sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
            onMouseOut={(e) => (e.currentTarget.style.color = "rgba(250,230,235,0.6)")}
          >
            Voir toute la prog →
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-16"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.name}
              variants={cardVariants}
              className="group cursor-pointer h-full"
              onClick={() => setSelectedArtist(artist)}
            >
              <div
                className="relative overflow-hidden artist-card h-full flex flex-col"
                style={{ background: "rgba(var(--color-dark-rgb), 0.5)", borderRadius: 0 }}
              >
                {/* Photo */}
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,60,0.92) 0%, rgba(0,0,60,0.4) 50%, transparent 100%)",
                    }}
                  />
                  {/* Social icons */}
                  <div className="absolute top-3 left-3" onClick={(e) => e.stopPropagation()}>
                    <SocialLinks {...artist} size="sm" className="text-white" />
                  </div>
                  {/* Name + style */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h2
                      className="text-xl font-bold text-white leading-tight mb-1 drop-shadow-glow"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {artist.name}
                    </h2>
                    <p className="text-sm font-medium leading-snug" style={{ color: "var(--color-secondary)" }}>
                      {artist.style}
                    </p>
                  </div>
                </div>
                {/* Description preview */}
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "rgba(250,230,235,0.8)" }}>
                    {artist.description.split("\n")[0]}
                  </p>
                  <p
                    className="text-xs mt-2 font-semibold tracking-wide uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "rgba(250,230,235,1)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    En savoir plus →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Galerie ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4"
        >
          <h2 className="heading-2">Galerie</h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {photoFiles.map((src, index) => (
            <motion.div
              key={src}
              variants={cardVariants}
              className="group cursor-pointer artist-card overflow-hidden"
              style={{ background: "rgba(var(--color-dark-rgb), 0.5)", borderRadius: 0 }}
              onClick={() => setSelectedPhotoIndex(index)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={src}
                  alt={`Nomad Festival 2025 — Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,60,0.7) 0%, transparent 60%)" }}
                >
                  <p
                    className="text-xs font-semibold tracking-wide uppercase opacity-80"
                    style={{ color: "rgba(250,230,235,1)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Voir →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Modal artiste ── */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            key="artist-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedArtist(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)" }}
          >
            <motion.div
              key="artist-modal"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 38 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-5xl artist-dialog overflow-hidden rounded-t-[20px] sm:rounded-2xl"
              style={{ backgroundColor: "var(--color-background)", maxHeight: "92dvh" }}
            >
              <div className="flex flex-col sm:flex-row overflow-y-auto custom-scrollbar" style={{ maxHeight: "92dvh" }}>
                {/* Image */}
                <div className="w-full sm:w-2/5 sm:min-h-full flex-shrink-0 relative">
                  <div className="aspect-[4/3] sm:aspect-auto sm:h-full relative">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "200px" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 60%, var(--color-background) 100%)" }}
                    />
                  </div>
                </div>
                {/* Contenu */}
                <div className="flex-1 p-6 sm:p-8 sm:overflow-y-auto">
                  <h2
                    className="text-2xl sm:text-3xl font-bold text-white drop-shadow-glow mb-1 leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {selectedArtist.name}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
                    {selectedArtist.style}
                  </p>
                  <p className="text-base leading-relaxed whitespace-pre-line mb-6" style={{ color: "var(--color-text)" }}>
                    {selectedArtist.description}
                  </p>
                  <SocialLinks {...selectedArtist} isInModal className="pb-2" />
                </div>
              </div>
              <button
                onClick={() => setSelectedArtist(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full z-50 text-xl transition-colors duration-300 bg-opacity-50"
                style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox photos ── */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            key="photo-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(6px)" }}
          >
            <motion.div
              key="photo-modal"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 38 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-4xl artist-dialog overflow-hidden rounded-t-[20px] sm:rounded-2xl"
              style={{ backgroundColor: "var(--color-background)", maxHeight: "92dvh" }}
            >
              <div className="flex items-center justify-center" style={{ maxHeight: "92dvh" }}>
                <img
                  src={photoFiles[selectedPhotoIndex]}
                  alt={`Nomad Festival 2025 — Photo ${selectedPhotoIndex + 1}`}
                  className="w-full h-auto max-h-[92dvh] object-contain"
                />
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full z-10 text-base transition-colors duration-300 bg-opacity-50"
                style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              >←</button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full z-10 text-base transition-colors duration-300 bg-opacity-50"
                style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              >→</button>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full z-50 text-xl transition-colors duration-300 bg-opacity-50"
                style={{ backgroundColor: "var(--color-background)", color: "var(--color-text)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              >✕</button>
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(var(--color-dark-rgb), 0.7)", color: "rgba(250,230,235,0.7)", fontFamily: "'Poppins', sans-serif" }}
              >
                {selectedPhotoIndex + 1} / {photoFiles.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

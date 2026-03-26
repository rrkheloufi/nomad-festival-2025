import { motion } from "framer-motion";
import { useState } from "react";

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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Edition2025() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (currentIndex - 1 + photoFiles.length) % photoFiles.length;
    setCurrentIndex(prev);
    setSelectedImage(photoFiles[prev]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % photoFiles.length;
    setCurrentIndex(next);
    setSelectedImage(photoFiles[next]);
  };

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX - rect.left < rect.width / 2) {
      handlePrev(e);
    } else {
      handleNext(e);
    }
  };

  return (
    <div
      className="min-h-screen pt-24 pb-16"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="mb-10">
            <p
              className="font-poppins font-bold uppercase tracking-widest text-xs mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              Éditions précédentes
            </p>
            <h1
              className="font-poppins font-black"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "var(--color-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Nomad Festival 2025
            </h1>
            <p
              className="mt-3"
              style={{ color: "var(--color-text)", opacity: 0.65 }}
            >
              Revivez les meilleurs moments de cette édition.
            </p>
          </div>

          {/* Aftermovie */}
          <div className="w-full aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/8n5VSp6dsZc?controls=1&rel=0&showinfo=0&modestbranding=1"
              title="Aftermovie Nomad Festival 2025"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Gallery - populated when photos are added to public/editions/2025/ */}
          {photoFiles.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {photoFiles.map((src, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(index);
                    setSelectedImage(src);
                  }}
                >
                  <img
                    src={src}
                    alt={`Nomad Festival 2025 - Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <div className="cursor-pointer" onClick={handleClick}>
              <img
                src={selectedImage}
                alt="Vue agrandie"
                className="max-w-full max-h-[90vh] object-contain"
                loading="lazy"
              />
            </div>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white" }}
            >
              →
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-xl transition-colors"
              style={{ color: "white" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

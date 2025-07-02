import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Button } from "../components/Button";
import "../styles/shop-gallery.css";

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "T-Shirt Nomad Festival 2025",
    price: "30€",
    images: [
      "/shop/nomad/1.png",
      "/shop/nomad/2.png",
      "/shop/nomad/3.png",
      "/shop/nomad/4.jpg",
      "/shop/nomad/5.jpg",
      "/shop/nomad/6.jpg",
    ],
  },
  {
    id: 2,
    name: "T-Shirt Fabrice & Bouée",
    price: "25€",
    images: [
      "/shop/fabrice/1.jpg",
      "/shop/fabrice/2.png",
      "/shop/fabrice/3.jpg",
      "/shop/fabrice/4.jpg",
      "/shop/fabrice/5.jpg",
    ],
  },
  {
    id: 3,
    name: "Affiche Nomad Festival 2025",
    price: "5€",
    images: ["/shop/poster/1.jpg"],
  },
  {
    id: 4,
    name: "Pack T-Shirts",
    price: "50€",
    images: [
      "/shop/pack/2.png",
      "/shop/pack/4.jpg",
      "/shop/pack/5.jpg",
      "/shop/pack/9.jpg",
    ],
  },
];

export default function Shop() {
  // Mode zoom : produit sélectionné et index de l'image
  const [zoomedProduct, setZoomedProduct] = useState<Product | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomTouchStartX, setZoomTouchStartX] = useState<number | null>(null);
  const [zoomTouchEndX, setZoomTouchEndX] = useState<number | null>(null);

  // Ouvre le mode zoom directement sur le produit cliqué
  const handleProductClick = useCallback((product: Product) => {
    setZoomedProduct(product);
    setZoomedIndex(0);
    setZoomed(true);
  }, []);

  // Ferme le zoom
  const handleCloseZoom = useCallback(() => {
    setZoomed(false);
    setZoomedProduct(null);
    setZoomedIndex(0);
  }, []);
  // Ferme le zoom si clic en dehors
  const handleZoomBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        handleCloseZoom();
      }
    },
    [handleCloseZoom]
  );

  // Navigation flèches dans le zoom
  const handlePrev = useCallback(() => {
    if (!zoomedProduct) return;
    setZoomedIndex(
      (prev) =>
        (prev - 1 + zoomedProduct.images.length) % zoomedProduct.images.length
    );
  }, [zoomedProduct]);
  const handleNext = useCallback(() => {
    if (!zoomedProduct) return;
    setZoomedIndex((prev) => (prev + 1) % zoomedProduct.images.length);
  }, [zoomedProduct]);
  // Miniatures dans le zoom
  const handleThumbClick = useCallback((idx: number) => {
    setZoomedIndex(idx);
  }, []);
  // Swipe dans le zoom
  const handleZoomTouchStart = (e: React.TouchEvent) => {
    setZoomTouchStartX(e.touches[0].clientX);
    setZoomTouchEndX(null);
  };
  const handleZoomTouchMove = (e: React.TouchEvent) => {
    setZoomTouchEndX(e.touches[0].clientX);
  };
  const handleZoomTouchEnd = () => {
    if (zoomTouchStartX !== null && zoomTouchEndX !== null && zoomedProduct) {
      const delta = zoomTouchStartX - zoomTouchEndX;
      if (delta > 50) handleNext(); // swipe left
      else if (delta < -50) handlePrev(); // swipe right
    }
    setZoomTouchStartX(null);
    setZoomTouchEndX(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-festival-primary mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Boutique
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg shop-card">
                <div
                  className="aspect-square relative overflow-hidden cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-glow">
                      {product.name}
                    </h2>
                    <h6 className="text-lg md:text-2xl font-bold text-festival-light">
                      {product.price}
                    </h6>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overlay zoom (plein écran direct) */}
        {zoomed && zoomedProduct && (
          <div
            className="shop-gallery-backdrop"
            style={{ zIndex: 100 }}
            onClick={handleZoomBackdrop}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                height: "100vh",
              }}
              onTouchStart={handleZoomTouchStart}
              onTouchMove={handleZoomTouchMove}
              onTouchEnd={handleZoomTouchEnd}
            >
              <button
                className="shop-gallery-arrow left"
                style={{
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 101,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                disabled={zoomedProduct.images.length <= 1}
                aria-label="Image précédente"
              >
                &#8592;
              </button>
              <button
                className="shop-gallery-close"
                style={{
                  top: 20,
                  right: 20,
                  position: "absolute",
                  zIndex: 101,
                }}
                onClick={handleCloseZoom}
                aria-label="Fermer le zoom"
              >
                ✕
              </button>
              {/* Index */}
              <div className="shop-gallery-index" style={{ zIndex: 101 }}>
                {zoomedIndex + 1} / {zoomedProduct.images.length}
              </div>
              <img
                src={zoomedProduct.images[zoomedIndex]}
                alt={`Zoom ${zoomedIndex + 1}`}
                style={{
                  maxWidth: "95vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  borderRadius: 16,
                  boxShadow: "0 4px 32px rgba(0,0,0,0.7)",
                  background: "#111",
                }}
                draggable={false}
              />
              <button
                className="shop-gallery-arrow right"
                style={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 101,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                disabled={zoomedProduct.images.length <= 1}
                aria-label="Image suivante"
              >
                &#8594;
              </button>
              {/* Miniatures */}
              {zoomedProduct.images.length > 1 && (
                <div
                  className="shop-gallery-thumbs"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 101,
                  }}
                >
                  {zoomedProduct.images.map((img, idx) => (
                    <img
                      key={img}
                      src={img}
                      alt={`Miniature ${idx + 1}`}
                      className={`shop-gallery-thumb${
                        zoomedIndex === idx ? " active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleThumbClick(idx);
                      }}
                      draggable={false}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <a
            href="https://www.helloasso.com/associations/nomad-festival/boutiques/nomad-boutique-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="block my-12"
          >
            <Button variant="primary" size="lg" className="mx-auto">
              Commander
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button } from "../components/Button";

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
  const galleryRef = useRef<
    | (ImageGallery & {
        toggleFullScreen: () => void;
        slideToIndex: (i: number) => void;
      })
    | null
  >(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  // Construit la liste d'images pour le carrousel à partir d'un produit
  const buildGalleryItems = useCallback((product: Product) => {
    return product.images.map((image, index) => ({
      original: image,
      thumbnail: image,
      originalAlt: `${product.name} - Image ${index + 1}`,
      thumbnailAlt: `${product.name} - Miniature ${index + 1}`,
    }));
  }, []);

  // Ouvre le carrousel en fullscreen natif sur le bon produit
  const handleProductClick = useCallback(
    (product: Product) => {
      const items = buildGalleryItems(product);
      setGalleryItems(items);
      setStartIndex(0);
      setFullscreen(true);
      setTimeout(() => {
        if (galleryRef.current) {
          galleryRef.current.slideToIndex(0);
          galleryRef.current.toggleFullScreen();
        }
      }, 50);
    },
    [buildGalleryItems]
  );

  // Quand on sort du fullscreen natif
  const handleScreenChange = useCallback((isFullscreen: boolean) => {
    setFullscreen(isFullscreen);
  }, []);

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

        {/* Carrousel plein écran natif, invisible tant qu'il n'est pas activé */}
        <div style={{ display: fullscreen ? "block" : "none" }}>
          <ImageGallery
            ref={galleryRef}
            items={galleryItems}
            startIndex={startIndex}
            showPlayButton={false}
            onScreenChange={handleScreenChange}
            additionalClass="custom-gallery-fullscreen"
            showThumbnails={false}
            useBrowserFullscreen={true}
          />
        </div>

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

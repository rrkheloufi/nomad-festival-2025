import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../components/Button";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "T-shirt Blanc Regular",
    price: "30€",
    description: "T-shirt officiel du Nomad Festival en coton bio",
    images: [
      "/shop/white_tshirt/1.JPG",
      "/shop/white_tshirt/2.JPG",
      "/shop/white_tshirt/3.JPG",
      "/shop/white_tshirt/4.png",
    ],
  },
  {
    id: 2,
    name: "T-shirt Bleu Loose",
    price: "30€",
    description: "T-shirt loose aux couleurs du festival",
    images: ["/shop/hat/1.JPG", "/shop/hat/2.JPG", "/shop/hat/3.JPG"],
  },
];

export default function Shop() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<
    Record<number, number>
  >({});
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenProduct, setFullscreenProduct] = useState<Product | null>(
    null
  );

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!fullscreenProduct || !fullscreenImage) return;
    const currentIndex = fullscreenProduct.images.indexOf(fullscreenImage);
    const nextIndex = (currentIndex + 1) % fullscreenProduct.images.length;
    setFullscreenImage(fullscreenProduct.images[nextIndex]);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!fullscreenProduct || !fullscreenImage) return;
    const currentIndex = fullscreenProduct.images.indexOf(fullscreenImage);
    const prevIndex =
      (currentIndex - 1 + fullscreenProduct.images.length) %
      fullscreenProduct.images.length;
    setFullscreenImage(fullscreenProduct.images[prevIndex]);
  };

  const handleThumbnailClick = (product: Product, image: string) => {
    setFullscreenProduct(product);
    setFullscreenImage(image);
  };

  const handleImageAreaClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 2) {
      handlePrevImage(e);
    } else {
      handleNextImage(e);
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const currentIndex = currentImageIndexes[product.id] || 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg shop-card">
                  <img
                    src={product.images[currentIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 group-hover:scale-105"
                    onClick={() =>
                      handleThumbnailClick(
                        product,
                        product.images[currentIndex]
                      )
                    }
                    loading="lazy"
                  />

                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setCurrentImageIndexes((prev) => ({
                            ...prev,
                            [product.id]:
                              ((prev[product.id] || 0) -
                                1 +
                                product.images.length) %
                              product.images.length,
                          }));
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ←
                      </button>
                      <button
                        onClick={(e: React.MouseEvent) => {
                          e.stopPropagation();
                          setCurrentImageIndexes((prev) => ({
                            ...prev,
                            [product.id]:
                              ((prev[product.id] || 0) + 1) %
                              product.images.length,
                          }));
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-0 right-0 bg-black/75 backdrop-blur-sm p-4 text-right max-w-[80%]">
                    <h6 className="text-1xl font-bold text-white mb-2 drop-shadow-glow">
                      {product.name}
                    </h6>
                    <p
                      className="text-xs mb-4"
                      style={{ color: "var(--color-light)" }}
                    >
                      {product.description}
                    </p>
                    <h6 className="text-lg md:text-2xl font-bold text-festival-light">
                      {product.price}
                    </h6>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {fullscreenImage && fullscreenProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => {
              setFullscreenImage(null);
              setFullscreenProduct(null);
            }}
          >
            <div className="relative max-w-4xl w-full">
              <div className="cursor-pointer" onClick={handleImageAreaClick}>
                <img
                  src={fullscreenImage}
                  alt="Vue agrandie"
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                  loading="lazy"
                />
              </div>

              {fullscreenProduct.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    →
                  </button>
                </>
              )}

              <div className="flex justify-center mt-4 space-x-2">
                {fullscreenProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      setFullscreenImage(image);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden transition-transform ${
                      fullscreenImage === image
                        ? "ring-2 ring-primary scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setFullscreenImage(null);
                  setFullscreenProduct(null);
                }}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors text-xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}

        <div className="flex justify-center">
          <a
            href="https://www.google.fr"
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

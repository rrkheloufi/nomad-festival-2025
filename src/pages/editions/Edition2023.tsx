import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Edition2023() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const imageFiles = [
      '/editions/2023/IMG_8357.JPG',
      '/editions/2023/IMG_8390.JPG',
      '/editions/2023/IMG_8359.JPG',
      '/editions/2023/IMG_8391.JPG',
      '/editions/2023/IMG_4279.PNG'
    ];
    setImages(imageFiles);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentImageIndex - 1 + images.length) % images.length]);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentImageIndex + 1) % images.length]);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8">Nomad Festival 2023</h1>
          
          <div className="mb-12">
            <p className="text-festival-light text-lg mb-8">
              Retour sur l'édition 2023 du Nomad Festival, un moment inoubliable de partage et de musique.
            </p>

            <div className="w-full h-[600px] mb-12">
              <iframe
                src="https://www.youtube.com/embed/gsqQazFtUl0?controls=1&rel=0&showinfo=0&modestbranding=1"
                title="Aftermovie Nomad Festival 2023"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(image, index)}
                >
                  <img
                    src={image}
                    alt={`Nomad Festival 2023 - Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <div 
              className="cursor-pointer"
              onClick={handleImageAreaClick}
            >
              <img
                src={selectedImage}
                alt="Vue agrandie"
                className="max-w-full max-h-[90vh] object-contain"
                loading="lazy"
              />
            </div>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ←
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              →
            </button>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-festival-primary transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
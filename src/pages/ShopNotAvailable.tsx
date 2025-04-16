import { motion } from "framer-motion";

export default function ShopNotAvailable() {
  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8 heading-1">
            La boutique est en chantier... 🛍️
          </h1>

          <div className="prose prose-lg text-festival-light max-w-none mb-12">
            <p className="text-xl mb-6">
              La team travaille d'arrache-pied pour vous concocter une boutique
              qui déchire !
            </p>

            <p className="text-xl mb-6">
              En attendant, on range les outils, on trie les goodies, et on
              prépare plein de surprises pour vous...
            </p>

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-6xl py-8 mb-8"
            >
              🛠️
            </motion.div>

            <p className="text-xl font-medium text-festival-primary">
              Reviens vite, on a hâte de te montrer tout ça !
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

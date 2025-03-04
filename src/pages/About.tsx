import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';

export default function About() {
  const [, ] = useForm("xyyqzzzz");

  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8 text-center">À propos du Nomad Festival</h1>
          
          <div className="prose prose-lg text-festival-light max-w-none mb-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">Qui sommes-nous ?</h2>
              <p>
                Un groupe d'ami.es qui se sont pris au jeu d'organiser des concerts et un festival de musique 
                et d'art pendant la période estivale.
              </p>
              <p>
                Association régie par la loi du 1er juillet 1901 et le décret du 16 août 1901, Notre association 
                a pour objectif la promotion de jeunes artistes, de créer des rencontres et des passerelles 
                entre créateur.ices par l'organisation d'évènements culturels, en particulier dans le domaine 
                de la musique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">Pourquoi Nomad ?</h2>
              <p>
                Car un nomade est celui qui se déplace. Et comme lui, nous nous déplaçons : des Deux Sèvres, 
                au Béarn, en passant par la Gironde et les Landes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">Nos activités</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Un festival privé non ouvert au public au cours de l'été.</li>
                <li>Des concerts ouverts au public au cours de l'année.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">Le Festival</h2>
              <p>
                Déjà devenu pour certain.es le rendez-vous estival dédié à la musique. Le Nomad c'est 48h 
                de concerts, d'exposition, de jeux et d'animations. Mais aussi un camping sur le site, des 
                repas et un bar pour se restaurer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
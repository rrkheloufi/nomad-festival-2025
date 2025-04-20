import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export default function About() {
  const [,] = useForm("xyyqzzzz");

  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8 text-center py-4">
            À propos du Nomad Festival
          </h1>

          <div className="prose prose-lg text-festival-light max-w-none mb-12 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">
                Qui sommes-nous ?
              </h2>
              <p className="text-xl mb-4">
                Un groupe d'ami.es qui se sont pris au jeu d'organiser des
                concerts et un festival de musique et d'art pendant la période
                estivale.
              </p>
              <p className="text-xl">
                Association régie par la loi du 1er juillet 1901 et le décret du
                16 août 1901. Notre association a pour objectif la promotion de
                jeunes artistes, de créer des rencontres et des passerelles
                entre créateurs/créatrices par l'organisation d'évènements
                culturels, en particulier dans le domaine de la musique.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-festival-primary mb-4">
                Pourquoi Nomad ?
              </h2>
              <p className="text-xl">
                Car un nomade est celui qui se déplace. Et comme lui, nous nous
                déplaçons : des Deux Sèvres, au Béarn, en passant par la Gironde
                et les Landes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-festival-primary mb-4">
                    Nos activités
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-xl">
                    <li>
                      Un festival de musique une fois par an qui réunit de
                      nombreux artistes.
                    </li>
                    <li>Des concerts ouverts au public au cours de l'année.</li>
                  </ul>
                </div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-festival-primary mb-4">
                    Le Festival
                  </h2>
                  <p className="text-xl">
                    Déjà devenu pour certain.es le rendez-vous estival dédié à
                    la musique. Le Nomad c'est 48h de concerts, d'exposition, de
                    jeux et d'animations. Mais aussi un camping sur le site, des
                    repas et un bar pour se restaurer.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-festival-primary mb-4">
                    Membres du Bureau
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-xl">
                    <li>Lisa Fericelli – Présidente – Pôle communication</li>
                    <li>
                      Simon Griffault – Vice-président – Pôle artiste et
                      animation
                    </li>
                    <li>Juliette Nossit – Secrétaire – Pôle logistique</li>
                    <li>Yanis Dali-Yahia – Trésorier – Pôle artiste et F&B</li>
                    <li>Théo Laffenêtre – Direction artistique</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 flex">
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
                    <img
                      src="/team/team.webp"
                      alt="L'équipe du Nomad Festival"
                      className="w-full h-full object-cover rounded-lg transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="py-8">
              <h2 className="text-center heading-2 text-2xl font-bold text-festival-primary mb-4">
                Soutiens l'aventure !
              </h2>
              <p className="text-xl mb-6">
                Envie de nous donner un coup de pouce ? Deviens membre de
                l'association Nomad Festival ! En adhérant, tu soutiens notre
                projet et participes activement à son développement. Ton soutien
                nous permet de continuer à organiser des événements de qualité
                et de promouvoir les artistes émergent.es.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://www.helloasso.com/associations/nomad-festival/adhesions/adhesion-association-nomad-festival"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg">
                    Je veux soutenir l'association
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

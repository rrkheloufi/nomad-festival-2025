import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-12">
            Contact
          </h1>

          <div className="w-full">
            <div className="bg-festival-dark/50 rounded-lg p-8 text-center">
              <h2 className="heading-2 font-bold text-festival-primary mb-8 py-4">
                Nos coordonnées
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-festival-light mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:nomad.festivalfr@gmail.com"
                    className="text-festival-primary hover:text-festival-primary/80 transition-colors text-lg"
                  >
                    nomad.festivalfr@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-festival-light mb-4">
                    Réseaux sociaux
                  </h3>
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href="https://www.facebook.com/groups/268163618833736"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-festival-light hover:text-festival-primary transition-colors text-2xl"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/nomadfestoff/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-festival-light hover:text-festival-primary transition-colors text-2xl"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Rejoindre l'aventure */}
            <div className="bg-festival-dark/50 rounded-lg p-8 mt-12">
              <h2 className="text-2xl font-bold text-festival-primary mb-6">
                Rejoignez l'aventure !
              </h2>
              <p className="text-festival-light mb-6 text-lg">
                Vous souhaitez participer à l'organisation du Nomad Festival ?
                Nous sommes toujours à la recherche de personnes motivées et
                passionnées pour rejoindre notre équipe !
              </p>
              <p className="text-festival-light mb-4 text-lg">
                Que vous ayez des compétences en :
              </p>
              <ul className="text-festival-light space-y-2 mb-6 text-lg">
                <li>• Organisation d'événements</li>
                <li>• Communication</li>
                <li>• Technique son et lumière</li>
                <li>• Logistique</li>
                <li>• Ou simplement l'envie de contribuer</li>
              </ul>
              <p className="text-festival-light text-lg">
                N'hésitez pas à nous contacter pour en discuter !
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <a
                href="mailto:nomad.festivalfr@gmail.com?subject=Rejoindre l'équipe Nomad Festival"
                className="btn-primary"
              >
                <Button variant="outline" size="lg" className="mx-auto">
                  Nous Contacter
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

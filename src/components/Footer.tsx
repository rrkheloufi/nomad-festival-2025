import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
      className="transition-colors"
      style={{
        backgroundColor: "rgba(var(--color-background-rgb), 0.9)",
        backdropFilter: "blur(8px)",
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="heading-3 mb-4">Nomad Festival</h3>
            <p className="paragraph">
              Un festival unique qui célèbre la musique de tous les styles.
            </p>
          </div>
          <div>
            <h3 className="heading-3 mb-4">Contact</h3>
            <p>
              Email: nomad.festivalfr@gmail.com <br />
            </p>
          </div>
          <div>
            <h3 className="heading-3 mb-4">Suivez-nous</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.instagram.com/nomadfestoff/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl transition-colors"
                style={{ color: "var(--color-text)" }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

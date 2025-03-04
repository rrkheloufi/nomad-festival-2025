import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="py-8 transition-colors" style={{ backgroundColor: 'rgba(var(--color-background-rgb), 0.9)', backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="heading-3 mb-4">Nomad Festival</h3>
            <p className="paragraph">
              Un festival unique qui célèbre la musique et la culture nomade.
            </p>
          </div>
          <div>
            <h3 className="heading-3 mb-4">Contact</h3>
            <p className="paragraph">Email: nomad.festivalfr@gmail.com</p>
            <p className="paragraph">Tel: +33 (0)1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="heading-3 mb-4">Suivez-nous</h3>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.facebook.com/groups/268163618833736"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl transition-colors"
                style={{ color: 'var(--color-text)' }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nomadfestoff/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl transition-colors"
                style={{ color: 'var(--color-text)' }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTopWidth: '1px', borderTopColor: 'rgba(var(--color-text-rgb), 0.1)' }}>
          <p className="paragraph">
            © {new Date().getFullYear()} Nomad Festival. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
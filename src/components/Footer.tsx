import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      className="relative transition-colors"
      style={{
        backgroundColor: "rgba(var(--color-background-rgb), 0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(var(--color-primary-rgb), 0.2)",
      }}
    >
      {/* Accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary) 30%, var(--color-secondary) 70%, transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 - Branding */}
          <div>
            <p
              className="font-poppins font-800 text-2xl mb-2"
              style={{
                color: "var(--color-primary)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              Nomad Festival
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text)", opacity: 0.7 }}
            >
              Un festival unique qui célèbre
              <br />
              la musique de tous les styles.
            </p>
          </div>

          {/* Col 2 - Links */}
          <div>
            <p
              className="font-poppins font-bold text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--color-primary)", opacity: 0.8 }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Association", to: "/about" },
                { label: "Editions passées", to: "/editions/2025" },
                { label: "Covoiturage", to: "/covoiturage" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm transition-colors duration-200 hover:opacity-100"
                  style={{ color: "var(--color-text)", opacity: 0.65 }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-text)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Contact + Socials */}
          <div>
            <p
              className="font-poppins font-bold text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--color-primary)", opacity: 0.8 }}
            >
              Nous trouver
            </p>
            <a
              href="mailto:festival.nomadfr@gmail.com"
              className="text-sm block mb-4 transition-colors duration-200"
              style={{ color: "var(--color-text)", opacity: 0.65 }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
            >
              festival.nomadfr@gmail.com
            </a>
            <div className="flex items-center gap-5">
              <motion.a
                href="https://www.instagram.com/nomadfestoff/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-2xl transition-colors"
                style={{ color: "var(--color-text)", opacity: 0.7 }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-text)")
                }
              >
                <FontAwesomeIcon icon={faInstagram} />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@NomadFestivalfr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-2xl transition-colors"
                style={{ color: "var(--color-text)", opacity: 0.7 }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "var(--color-text)")
                }
              >
                <FontAwesomeIcon icon={faYoutube} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(var(--color-primary-rgb), 0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text)", opacity: 0.4 }}
          >
            © {new Date().getFullYear()} Nomad Festival - Association loi 1901
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text)", opacity: 0.4 }}
          >
            Larbey, Landes
          </p>
        </div>
      </div>
    </footer>
  );
}

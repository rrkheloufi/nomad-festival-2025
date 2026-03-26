import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";

const bureauMembers = [
  { name: "Lisa Fericelli", role: "Présidente", pole: "Responsable bénévole" },
  { name: "Simon Griffault", role: "Vice-président", pole: "Pôle artiste" },
  { name: "Axelle Gaudin", role: "Secrétaire", pole: "Pôle communication" },
  { name: "Yanis Dali-Yahia", role: "Trésorier", pole: "Pôle artiste et F&B" },
  { name: "Théo Laffenêtre", role: "Direction artistique", pole: "" },
  { name: "Claire Bile", role: "", pole: "Pôle logistique" },
  { name: "Juliette Nossit", role: "", pole: "Pôle décoration" },
];

const stagger = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  const [,] = useForm("xyyqzzzz");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="mb-14 text-center">
            <p
              className="font-poppins font-bold uppercase tracking-widest text-xs mb-3"
              style={{ color: "var(--color-secondary)" }}
            >
              L'association
            </p>
            <h1
              className="font-poppins font-black"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                color: "var(--color-primary)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Nomad Festival
            </h1>
          </div>

          {/* Intro section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-8">
              <div>
                <h2
                  className="font-poppins font-bold mb-3"
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--color-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Qui sommes-nous ?
                </h2>
                <p
                  style={{
                    color: "var(--color-text)",
                    opacity: 0.85,
                    lineHeight: 1.75,
                  }}
                >
                  Un groupe d'ami.es qui se sont pris au jeu d'organiser des
                  concerts et un festival de musique et d'art pendant la période
                  estivale.
                </p>
                <p
                  className="mt-3"
                  style={{
                    color: "var(--color-text)",
                    opacity: 0.7,
                    lineHeight: 1.75,
                  }}
                >
                  Association régie par la loi du 1er juillet 1901 et le décret
                  du 16 août 1901. Notre association a pour objectif la
                  promotion de jeunes artistes, de créer des rencontres et des
                  passerelles entre créateurs/créatrices.
                </p>
              </div>

              <div>
                <h2
                  className="font-poppins font-bold mb-3"
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--color-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Pourquoi Nomad ?
                </h2>
                <p
                  style={{
                    color: "var(--color-text)",
                    opacity: 0.85,
                    lineHeight: 1.75,
                  }}
                >
                  Car un nomade est celui qui se déplace. Et comme lui, nous
                  nous déplaçons : des Deux Sèvres, au Béarn, en passant par la
                  Gironde et les Landes.
                </p>
              </div>

              <div>
                <h2
                  className="font-poppins font-bold mb-3"
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--color-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Le Festival
                </h2>
                <p
                  style={{
                    color: "var(--color-text)",
                    opacity: 0.85,
                    lineHeight: 1.75,
                  }}
                >
                  Déjà devenu pour certain.es le rendez-vous estival dédié à la
                  musique. Le Nomad c'est 48h de concerts, d'exposition, de jeux
                  et d'animations. Mais aussi un camping sur le site, des repas
                  et un bar pour se restaurer.
                </p>
              </div>
            </div>

            {/* Team photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: "2px solid rgba(var(--color-primary-rgb), 0.3)",
                  transform: "translate(8px, 8px)",
                  borderRadius: "16px",
                }}
              />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/team/team.webp"
                  alt="L'équipe du Nomad Festival"
                  className="w-full object-contain transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(var(--color-background-rgb), 0.4) 0%, transparent 60%)",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bureau section */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-10"
            style={{
              backgroundColor: "rgba(var(--color-primary-rgb), 0.07)",
              border: "1px solid rgba(var(--color-primary-rgb), 0.15)",
            }}
          >
            <h2
              className="font-poppins font-black mb-8"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--color-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Membres du Bureau
            </h2>
            <div className="flex flex-col gap-3">
              {bureauMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={stagger}
                  className="flex items-center gap-4 rounded-xl px-5 py-3.5"
                  style={{
                    backgroundColor: "rgba(var(--color-background-rgb), 0.5)",
                    border: "1px solid rgba(var(--color-primary-rgb), 0.12)",
                  }}
                >
                  {/* Nom */}
                  <p
                    className="font-poppins font-bold flex-shrink-0"
                    style={{
                      color: "var(--color-primary)",
                      fontSize: "0.95rem",
                      minWidth: "160px",
                    }}
                  >
                    {member.name}
                  </p>
                  {/* Rôle + pôle */}
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                    {member.role && (
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        {member.role}
                      </span>
                    )}
                    {member.role && member.pole && (
                      <span
                        style={{
                          color: "rgba(var(--color-text-rgb), 0.35)",
                          fontSize: "0.85rem",
                        }}
                      >
                        ·
                      </span>
                    )}
                    {member.pole && (
                      <span
                        className="text-sm"
                        style={{ color: "var(--color-text)", opacity: 0.65 }}
                      >
                        {member.pole}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support section */}
          <div
            className="rounded-2xl p-8 md:p-10 mb-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1) 0%, rgba(var(--color-secondary-rgb, 130,140,250), 0.08) 100%)",
              border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
            }}
          >
            <h2
              className="font-poppins font-black mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--color-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Soutiens l'aventure !
            </h2>
            <p
              className="max-w-xl mx-auto mb-7"
              style={{
                color: "var(--color-text)",
                opacity: 0.8,
                lineHeight: 1.75,
              }}
            >
              Envie de nous donner un coup de pouce ? Deviens membre de
              l'association Nomad Festival ! En adhérant, tu soutiens notre
              projet et participes activement à son développement.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.helloasso.com/associations/nomad-festival/adhesions/adhesion-association-nomad-festival"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Je soutiens l'association
                </Button>
              </a>
            </div>
          </div>

          {/* Bénévoles section */}
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor:
                "rgba(var(--color-secondary-rgb, 130,140,250), 0.07)",
              border:
                "1px solid rgba(var(--color-secondary-rgb, 130,140,250), 0.18)",
            }}
          >
            <h2
              className="font-poppins font-black mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--color-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              Devenir bénévole
            </h2>
            <p
              className="mb-4"
              style={{
                color: "var(--color-text)",
                opacity: 0.85,
                lineHeight: 1.75,
              }}
            >
              Si tu souhaites nous rejoindre pour nous aider le week-end du
              festival, n'hésite pas à nous contacter, nous serons ravi.es de
              répondre à tes questions !
            </p>
            <p
              className="mb-7"
              style={{
                color: "var(--color-text)",
                opacity: 0.85,
                lineHeight: 1.75,
              }}
            >
              Et si tu décides de faire partie de l'équipe pour cette édition,
              voici la charte du bénévole du Nomad à lire et à signer (le dépôt
              du document signé se fera via la billetterie en ligne).
            </p>
            <div className="flex justify-center">
              <a
                href="/charte/Charte des bénévoles du Nomad Festival.pdf"
                download="Charte-Benevoles-Nomad-Festival.pdf"
              >
                <Button variant="outline" size="lg">
                  Télécharger la charte du bénévole
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Button } from "../components/Button";
import "../styles/covoiturage.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1l44K1Imt4wQ0FokdFK9_aHNAVx4yPZAMoXX8MGSP8-8/edit?usp=sharing";

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export default function Covoiturage() {
  // Gestion du clic sur l'iframe sur mobile
  const handleMobileIframeClick = (e: React.MouseEvent) => {
    if (isMobile()) {
      window.open(SHEET_URL, "_blank");
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8 text-center py-4">
            Covoiturage pour le Nomad Festival
          </h1>

          <div className="prose prose-lg text-festival-light max-w-none mb-12 space-y-8">
            <div>
              <p className="text-xl mb-4 text-center">
                Tu veux partager ton trajet vers le Nomad Festival ou trouver
                une place dans une voiture ?<br />
                Utilise le fichier ci-dessous pour t'organiser avec les autres
                festivaliers.
                <br />
                <br />
                <span className="font-bold">Voici comment ça marche :</span>
              </p>
            </div>

            <div className="grid g  rid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col justify-center bg-festival-dark rounded-lg p-8">
                <h2 className="text-2xl font-bold text-festival-primary mb-3">
                  Tu as une voiture ?
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>
                    Ajoute une nouvelle ligne en haut du fichier avec toutes les
                    infos.
                  </li>
                  <li>Grise les passagers en trop.</li>
                  <li>
                    Regarde si d'autres cherchent un covoiturage en bas du
                    fichier.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center bg-festival-light rounded-lg p-8">
                <h2 className="text-2xl font-bold text-festival-dark mb-3">
                  Tu cherches un covoit ?
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                  <li>
                    S'il reste de la place dans une voiture, ajoute ton nom en
                    passager et contacte le conducteur.
                  </li>
                  <li>
                    S'il n'y a pas de places, ajoute ton nom et ton contact en
                    bas du fichier.
                  </li>
                </ul>
              </div>
            </div>

            <div className="covoit-sheet-section mt-12">
              <h2 className="text-center heading-2 text-2xl font-bold text-festival-primary mb-4">
                Réserve ou propose ton covoiturage ici :
              </h2>
              <a
                href={SHEET_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="covoit-sheet-link"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Modifier directement sur le fichier
                </Button>
              </a>
              <div
                className="covoit-sheet-iframe-wrapper mt-6"
                style={{ position: "relative" }}
              >
                <iframe
                  src={SHEET_URL}
                  title="Covoiturage Nomad"
                  className="covoit-sheet-iframe"
                  allowFullScreen
                  onClick={handleMobileIframeClick}
                  style={{ pointerEvents: isMobile() ? "none" : "auto" }}
                ></iframe>
                {typeof window !== "undefined" && isMobile() && (
                  <div
                    onClick={handleMobileIframeClick}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                      cursor: "pointer",
                    }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

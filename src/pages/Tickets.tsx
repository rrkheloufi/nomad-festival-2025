import { Slider } from "@mui/material";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../components/Button";

export default function Tickets() {
  const [sliderValue, setSliderValue] = useState(50); // Prix par défaut

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  // Fonction pour formater le prix affiché
  const getDisplayPrice = (price: number) => {
    return Math.floor(price / 10) * 10;
  };

  // Calcul de la description en fonction du prix
  const currentDescription = useMemo(() => {
    const roundedPrice = getDisplayPrice(sliderValue);
    if (roundedPrice <= 30)
      return "Tarif très réduit si tu ne peux pas mettre plus.";
    if (roundedPrice <= 40)
      return "Tarif réduit si tu ne peux pas mettre plus.";
    if (roundedPrice <= 50)
      return "Tarif standard qui nous permet d'être à l'équilibre financièrement.";
    if (roundedPrice <= 60)
      return "Tarif solidaire si tu peux te le permettre pour que tout le monde puisse profiter du festival.";
    return "Tarif très solidaire si tu peux te le permettre pour que tout le monde puisse profiter du festival.";
  }, [sliderValue]);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8 text-center heading-1 py-4 md:py-8">
            Billetterie Nomad Festival 2025
          </h1>

          <div className="prose prose-lg text-festival-light max-w-none mb-12">
            <div className="ticket-card backdrop-blur-sm rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-festival-primary mb-4 heading-2">
                Pass 2 jours - Vendredi et Samedi
              </h2>

              <div className="mb-8">
                <p className="text-festival-light text-base mb-6">
                  Notre billetterie est solidaire : choisis le tarif qui
                  correspond à tes moyens. Les tarifs plus élevés permettent de
                  compenser les tarifs réduits, pour que le festival soit
                  accessible à toutes et tous !
                </p>

                <span className="text-3xl font-bold text-festival-accent mb-6 block">
                  {getDisplayPrice(sliderValue)}€
                </span>

                <div className="px-2 md:px-4 py-4 md:py-8">
                  <Slider
                    value={sliderValue}
                    onChange={handleChange}
                    min={30}
                    max={79}
                    step={1}
                    aria-label="Prix"
                    color="secondary"
                  />
                </div>

                <div className="grid grid-cols-5 text-center text-xs md:text-sm text-festival-light mb-4 gap-1">
                  <span>Très réduit</span>
                  <span>Réduit</span>
                  <span>Standard</span>
                  <span>Solidaire</span>
                  <span>Très solidaire</span>
                </div>

                <div className="bg-festival-dark/10 p-3 md:p-4 rounded-lg">
                  <p className="text-festival-light text-center italic mb-0 text-sm md:text-base">
                    {currentDescription}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-8">
                <li className="text-festival-light flex items-center">
                  <span className="text-festival-primary mr-2">✓</span>
                  Accès au festival et au camping dès vendredi 22/08 - 16h
                </li>
                <li className="text-festival-light flex items-center">
                  <span className="text-festival-primary mr-2">✓</span>
                  Repas du vendredi soir, samedi midi, samedi soir et dimanche
                  midi inclus
                </li>
              </ul>

              <div className="flex justify-center w-full">
                <a
                  href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto"
                >
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Acheter mon billet
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ticket-card backdrop-blur-sm rounded-lg p-8 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-festival-primary mb-2 heading-2">
                    Pass 1 jour - Vendredi
                  </h2>
                  <p className="text-3xl font-bold text-festival-accent mb-4">
                    25€
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Accès au festival et au camping dès vendredi 22/08 - 16h
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Repas du vendredi soir et samedi midi inclus
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Départ du site du festival le samedi avant 14h
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center w-full">
                  <a
                    href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Acheter mon billet
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ticket-card backdrop-blur-sm rounded-lg p-8 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-festival-primary mb-2 heading-2">
                    Pass 1 jour - Samedi
                  </h2>
                  <p className="text-3xl font-bold text-festival-accent mb-4">
                    25€
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Accès au festival et au camping dès samedi 23/08 - 12h
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Repas du samedi soir et dimanche midi inclus
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Si vous arrivez le samedi avant midi, pensez à vous
                      prendre à manger !
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center w-full">
                  <a
                    href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Acheter mon billet
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ticket-card backdrop-blur-sm rounded-lg p-8 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-festival-primary mb-2 heading-2">
                    Pass Local - Vendredi
                  </h2>
                  <p className="text-3xl font-bold text-festival-accent mb-4">
                    20€
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Accès au festival à partir de 16h le vendredi 22/08
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Départ à 3h du matin
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✕</span>
                      Repas et camping NON inclus
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center w-full">
                  <a
                    href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Acheter mon billet
                    </Button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ticket-card backdrop-blur-sm rounded-lg p-8 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-festival-primary mb-2 heading-2">
                    Pass Local - Samedi
                  </h2>
                  <p className="text-3xl font-bold text-festival-accent mb-4">
                    20€
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Accès au festival à partir de 14h le samedi 23/08
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✓</span>
                      Départ à 3h du matin
                    </li>
                    <li className="text-festival-light flex items-center">
                      <span className="text-festival-primary mr-2">✕</span>
                      Repas et camping NON inclus
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center w-full">
                  <a
                    href="https://www.helloasso.com/associations/nomad-festival/evenements/billetterie-nomad-festival-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Acheter mon billet
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

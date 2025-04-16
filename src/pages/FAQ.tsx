import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "C'est quand le festoche ?",
    answer:
      "Le festival ouvrira ses portes le vendredi 22 août à 14h et les fermera le dimanche 24 août à 14h. Les concerts débuteront à partir de 16h donc pense à réserver ton aprèm pour avoir le temps d'arriver et d'installer ta tente avant le début des festivités !",
  },
  {
    question: "Comment vient-on au Nomad Festival ?",
    answer:
      "Le Nomad Festival se déroule cette année à Larbey dans les Landes. Venir en voiture reste l'option la plus simple et la seule qui permet l'accès direct au festival. Nous ferons des posts sur nos différents réseaux pour organiser des covoiturages entre les festivaliers depuis diverses villes (Paris, Bordeaux, Toulouse, …).",
  },
  {
    question: "Dois-je amener à manger ?",
    answer:
      "Les repas (midi et soir) sont compris dans le billet (sauf Pass Local). Ils seront principalement végétaliens pour correspondre à un maximum de régimes alimentaires. Les menus seront publiés en amont du festival. Pas de petit-déjeuner cette année, Il y a eu trop de gaspillages alimentaires les années précédentes. Tu es libre d'amener la nourriture de ton choix si tu le souhaites.",
  },
  {
    question: "Dois-je amener à boire ?",
    answer:
      "Il y aura une buvette sur place à petits prix avec des boissons non alcoolisées, bières, vins et sangria",
  },
  {
    question: "Où dort-on ? Dois-je amener de quoi dormir ?",
    answer:
      "Un camping est organisé sur place, il faut penser à amener tente, sac de couchage, matelas et ton doudou préféré ! Par contre, le camping ne sera pas surveillé donc n'amène rien de précieux.",
  },
  {
    question: "Pourra-t-on se doucher ?",
    answer:
      "Oui ! Des douches sont prévues, pense à amener ton maillot de bain (obligatoire dans les douches).",
  },
  {
    question: "Est-ce qu'il y aura des toilettes ?",
    answer: "Oui, nos belles toilettes t'accueilleront.",
  },
  {
    question: "Qu'est-ce que je dois apporter ?",
    answer: (
      <ul className="list-disc pl-4 space-y-2 text-lg">
        <li>Couverts pour éviter les déchets</li>
        <li>Une gourde</li>
        <li>Maillot de bain pour se doucher</li>
        <li>Serviette pour te sécher</li>
        <li>Ton plus beau couvre chef pour te protéger du soleil</li>
        <li>Un pull (les nuits sont fraîches)</li>
        <li>Un imperméable</li>
        <li>De quoi payer des boissons à la buvette (LIQUIDE OU CARTE)</li>
        <li>Tente</li>
        <li>Matelas</li>
        <li>Sac de couchage</li>
        <li>De quoi grignoter pour le petit déjeuner</li>
        <li>Ton doudou préféré ❤️</li>
      </ul>
    ),
  },
  {
    question: "J'ai envie de me produire au Nomad comment faire ?",
    answer:
      "La programmation musicale est complète pour cette année mais n'hésite pas à nous contacter sur instagram ou sur notre adresse mail (nomad.festivalfr@gmail.com) pour la prochaine édition. Nous sommes toujours à la recherche de nouveaux.elles artistes motivé.es pour participer au projet !",
  },
  {
    question:
      "J'aimerais beaucoup vous aider pendant le festival, est-ce que c'est possible ?",
    answer:
      "Un appel à bénévoles sera lancé pour aider sur place pendant la durée du festival sur nos réseaux sociaux si nous en avons besoin !",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-12 text-center">
            FAQ
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <motion.div
                    initial={false}
                    animate={{ scale: open ? 1.02 : 1 }}
                    className="faq-card overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm"
                  >
                    <Disclosure.Button className="w-full px-8 py-6 text-left flex justify-between items-center group hover:bg-white/10 transition-all duration-300">
                      <strong className="text-xl font-bold text-primary">
                        {faq.question}
                      </strong>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-6 h-6 text-primary transition-all duration-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className="px-8 py-6 text-light text-lg"
                      style={{
                        backgroundColor: "var(--color-background)",
                      }}
                    >
                      <p>
                        <strong
                          style={{
                            color: "var(--color-text)",
                          }}
                        >
                          {faq.answer}
                        </strong>
                      </p>
                    </Disclosure.Panel>
                  </motion.div>
                )}
              </Disclosure>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-8 text-center faq-contact-card"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">
              Tu n'as pas trouvé ta réponse ?
            </h2>
            <p className="text-festival-light text-lg mb-4">
              Contacte-nous par email à :
              <a
                href="mailto:nomad.festivalfr@gmail.com"
                className="text-primary hover:text-white transition-colors duration-300 ml-2"
              >
                nomad.festivalfr@gmail.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";

interface Artist {
  name: string;
  style: string;
  image: string;
  spotify?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
  soundcloud?: string;
  deezer?: string;
  description: string;
  linktree?: string;
}

export const artists: Artist[] = [
  {
    name: "Fabrice et Bouée 2 Sauvetaj",
    style: "Rap rigolo",
    image: "/artists/fabrice-et-bouee-2-sauvetaj.png",
    spotify: "https://open.spotify.com/intl-fr/artist/6LcvylIR9VFoZ01266BAno",
    description:
      "De retour sur scène après une année pleine de nouveaux projets, Fabrice et Bouée 2 Sauvetaj reviennent en exclusivité sur la scène du Nomad Festival.\n\nComme à leur habitude, ils viennent dans le but de délivrer des messages forts et engagés.\n\nRamenez vos casquettes, branchez vos téléphones et préparez-vous à vivre une expérience inoubliable.",
  },
  {
    name: "i20",
    style: "Ambient, Musique électronique, Impro piano",
    image: "/artists/i20.png",
    description:
      "Voyage musical semi improvisé, envolées de piano sur des mots volés, mélange de larmes de joie et de tristesse.\n\nLes moments partent, les souvenirs restent.",
  },
  {
    name: "Jaja",
    style: "DJ",
    image: "/artists/jaja.jpg",
    description:
      "Jaja est une \"BabyDj\" qui aime danser et chanter sur des rythmes Shatta et Baile Funk !\n\nEn tant que passionnée de ces genres musicaux, elle tient à souligner l'importance de reconnaître leurs origines et leur contexte socio-politique. Ces styles sont nés dans des communautés marginalisées et portent en eux des messages de résistance et d'affirmation culturelle.\n\nElle souhaite partager cette musique avec respect et conscience, en célébrant sa richesse et sa diversité pour que la musique nous unisse et nous fasse vibrer !",
  },
  {
    name: "Solaal",
    style: "Rap avec des influences musique électronique et rock",
    image: "/artists/solaal.jpg",
    spotify:
      "https://open.spotify.com/intl-fr/artist/2We5DMXAZYMivza4uzZNvJ?si=7J6HjkwGTN6lRHpIUEuLGQ",
    youtube: "https://www.youtube.com/@solaal_music",
    deezer: "https://www.deezer.com/fr/artist/300766041",
    description:
      "Solaal a commencé en jouant de la guitare et de la basse dans des groupes de rock et métal.\n\nAujourd'hui, il mélange ses origines rock avec des instrumentales de musique électronique et du rap pour créer un mélange aux influences new wave.\n\nÀ travers ses compositions, il parle de ses objectifs et regrets sur des instrumentales rythmées, agrémentées de quelques riffs de guitare pour régaler ses amis métalleux.",
  },
  {
    name: "Zita Nova",
    style: "Set de drum'n'bass (dancefloor, jump up à priori)",
    image: "/artists/zita-nova.jpg",
    soundcloud: "https://soundcloud.com/laurinef-1",
    instagram: "https://www.instagram.com/zita.nova/",
    description:
      "Zita Nova, artiste éclectique aux nombreuses casquettes, est tombée amoureuse de la drum and bass et n'a eu d'autre choix que de se lancer dans le mix afin de faire découvrir ses selecta tantôt girly, tantôt tranchantes.\n\nLa découpeuse de remixes jump up des années 2000 vous montrera la bass sous un jour joyeux et entrainant grâce à ses sets millimétrés et ses accords majeurs à foison.",
  },
  {
    name: "Unbreakher",
    style: "Reprises Rock/Hard Rock",
    image: "/artists/unbreakher.jpg",
    instagram: "https://www.instagram.com/unbreakher/",
    facebook: "https://www.facebook.com/unbreakher/",
    description:
      "Valérie, Mathilde, Christelle, Maïté, Camille.\nCinq femmes de générations différentes. Cinq personnalités affûtées.\n\nCinq musiciennes rassemblées autour d'un projet encore trop peu présent dans le paysage musical en général : faire sonner du rock rien qu'entre nanas !\n\nAttention, ne vous y méprenez pas : il n'est pas question ici de sons édulcorés, paillettes et autres lieux communs souvent encore associés au genre féminin.\n\nLe groupe, par sa pêche et sa forte envie d'en découdre avec la scène, risque de vous surprendre avec des reprises de Blues Pills, Jet, Papa Roach... et de vous faire lâcher votre bière !\n\nAccrochez-vous !!",
  },
  {
    name: "2concevable",
    style: "Reprise musique en duo",
    image: "/artists/2concevable.jpg",
    youtube: "https://youtu.be/3seMwPC87eA?si=OlII-w1Bo-KRRLc2",
    description:
      "2concevable, c'est l'histoire de ceux qu'on n'attendait pas.\n\nEt pourtant… Ils seront là, au Nomad Festival.\nInimaginable ? Peut-être.\nMais vrai.\n\nPréparez-vous à l'inattendu (ou pas).\nQue vous ont-ils préparé ? Le mystère reste entier.",
  },
  {
    name: "Falou Collective",
    style: "Folk / Blues et Soul",
    image: "/artists/falou-collective.jpg",
    description:
      "Les Morfalous reviennent trois fois plus nombreux pour former le Falou Collective !\n\nÇa folk, ça blues et ça soul, ça s'échange les instruments, ça chante en chœur, et c'est pas fâché avec le plaisir.",
  },
  {
    name: "Grry",
    style: "Deep groovy techno",
    image: "/artists/grry.jpeg",
    soundcloud: "https://on.soundcloud.com/WFVGUfcS5QysUaXXA",
    description:
      "Des rythmes bruts mêlés à des boucles hypnotiques, pour construire un moment de transe douce et collective.",
  },
  {
    name: "Superinventur",
    style: "Rap, Cumbia, Baile Funk",
    image: "/artists/superinventur.jpg",
    spotify:
      "https://open.spotify.com/artist/5U42u2S2UByw15VG2Zb4cd?si=PuvuGsz6QpC8OqDgu0bRsw",
    instagram:
      "https://www.instagram.com/superinventurofficial?igsh=Zjk3OWIwbDZ4eTN1",
    youtube: "https://youtube.com/@superinventurofficial4942?feature=shared",
    description:
      "Du rap tropical déjanté en provenance d'Allemagne.\nSecouez vos tongs. Vous ne pouvez pas faire autrement, car vous n'êtes pas préparés à cela.\n\nSuperinventur mélange le rap avec le cachegue et le funk carioca.\nDes textes trop compliqués pour les professeurs de philosophie sur des rythmes qui font bouger les fesses de tout le monde.",
  },
  {
    name: "Ginger 808",
    style: "DJ set - Dum'n'bass roller, UK, neuro",
    image: "/artists/ginger-808.jpg",
    soundcloud: "https://on.soundcloud.com/neQrBWj2gVsRAj4H6",
    instagram: "https://www.instagram.com/ginger.808",
    linktree: "https://linktr.ee/ginger808",
    description:
      "Ginger 808 est une artiste du Sud-Ouest qui incarne sa vision de la bass music à la sauce UK.\n\nPassionnée par la scène britannique, elle s'inspire d'artistes comme Gray, Deekline et Bullet Tooth pour créer une expérience musicale qui navigue entre UK Garage et drum and bass avec une énergie contagieuse.\n\nL'évolution récente de son parcours musical marque un tournant intéressant : l'intégration de sa voix dans des moments clés de ses sets, qui créé un contraste saisissant entre puissance des beats et sensibilité vocale.",
  },
  {
    name: "Lulz",
    style: "Dj set - trance/techno",
    image: "/artists/lulz.jpg",
    soundcloud: "https://soundcloud.com/lulz909",
    instagram: "https://www.instagram.com/lulz_909/",
    description:
      "Lulz est un jeune DJ parisien, résident et fondateur du collectif Nectar, avec lequel il anime régulièrement les nuits de divers clubs de la capitale.\n\nPuisant ses inspirations dans un vaste registre, allant de rythmiques trance en tout genre à une techno vive et implacable, en passant par des notes mentales ou des synthés aux sonorités rave, Lulz tisse un univers complexe, résolument destiné aux dancefloors.\n\nHabitué des scènes parisiennes, il a notamment joué au Mazette, à la Marbrerie, au Nouveau Casino, ou encore au Ferrailleur (Nantes).",
  },
];

export default function Program() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  // Effet pour empêcher le scroll quand la modal est ouverte
  useEffect(() => {
    if (selectedArtist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup lors du démontage du composant
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArtist]);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1 text-center mb-12 py-8">
            Programmation 2025
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="relative overflow-hidden rounded-lg artist-card">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-glow">
                      {artist.name}
                    </h2>
                    <p
                      className="text-lg mb-4"
                      style={{ color: "var(--color-light)" }}
                    >
                      {artist.style}
                    </p>

                    <SocialLinks
                      {...artist}
                      size="sm"
                      onClickCapture={(e) => e.stopPropagation()}
                      className="text-white"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {selectedArtist && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArtist(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full h-[90vh] lg:h-auto lg:max-h-[90vh] lg:max-w-6xl mx-4 rounded-lg overflow-hidden artist-dialog bg-opacity-95"
                  style={{ backgroundColor: "var(--color-background)" }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <div className="h-[35vh] lg:h-full relative">
                      <img
                        src={selectedArtist.image}
                        alt={selectedArtist.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-[var(--color-background)] opacity-20" />
                    </div>
                    <div className="lg:col-span-1 flex flex-col overflow-hidden max-h-[60vh] lg:max-h-[80vh]">
                      <div className="p-6 lg:p-10 lg:pl-12 flex-1 overflow-y-auto custom-scrollbar">
                        <h2 className="heading-1 mb-3 text-white mb-2 drop-shadow-glow">
                          {selectedArtist.name}
                        </h2>
                        <p
                          className="text-base lg:text-lg mb-4 lg:mb-6 font-medium"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {selectedArtist.style}
                        </p>
                        <p
                          className="text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed whitespace-pre-line"
                          style={{ color: "var(--color-text)" }}
                        >
                          {selectedArtist.description}
                        </p>

                        <div className="mt-auto">
                          <SocialLinks {...selectedArtist} className="pb-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArtist(null)}
                    className="absolute top-4 right-4 transition-colors text-2xl z-50 w-8 h-8 flex items-center justify-center rounded-full bg-opacity-50"
                    style={{
                      color: "var(--color-text)",
                      backgroundColor: "var(--color-background)",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "var(--color-primary)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "var(--color-text)")
                    }
                  >
                    ✕
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

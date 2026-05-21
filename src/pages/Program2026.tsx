import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";

interface Artist {
  name: string;
  style: string;
  covers: string;
  image: string;
  description: string;
  day: "vendredi" | "samedi";
  spotify?: string;
  youtube?: string;
  instagram?: string;
  soundcloud?: string;
}

const artists: Artist[] = [
  {
    name: "Fabrice et Bouée 2 Sauvetaj",
    style: "Techno rap rigolote",
    covers: "Originales",
    day: "vendredi",
    image: "/artists_2026/Fabrice et Bouée 2Sauvetaj.webp",
    spotify: "https://open.spotify.com/intl-fr/artist/6LcvylIR9VFoZ01266BAno",
    description:
      "Fabrice et Bouée 2 Sauvetaj reviennent en exclusivité sur la scène du Nomad Festival. Comme à leur habitude, ils viennent dans le but de délivrer des messages forts et engagés.\n\nCette année pour un set innovant :\nPlus sombre qu'un type à capuche dans une ruelle.\nPlus Tech qu'un type à capuche en festival.\nPlus dansant qu'un type à capuche dans un battle de Hip Hop.",
  },
  {
    name: "Plum",
    style: "Pop douce",
    covers: "Reprises & originales",
    day: "vendredi",
    image: "/artists_2026/Plum.webp",
    description:
      "Deux amis, de la pop douce, quelques reprises choisies avec soin qui, on espère, vous feront passer un joli moment (cheveux non contractuels).",
  },
  {
    name: "Ad Astra",
    style: "Pop",
    covers: "Reprises & originales",
    day: "vendredi",
    image: "/artists_2026/Ad Astra.webp",
    instagram: "https://www.instagram.com/adastra_musique",
    description:
      "Ils se sont formés pour le Nomad, depuis ils sont inséparables.\n\nVous avez peut-être déjà entendu leurs reprises endiablées, et peut-être même avez-vous chanté et dansé avec eux ?\n\nPréparez vos cordes vocales, Ad Astra vient vous faire chanter sur les plus grands groupes pop… Mais pas seulement !\n\nAlors retrouvez-les cette année, au Nomad Festival 🤟",
  },
  {
    name: "Cybercafé",
    style: "Rock indé",
    covers: "Originales",
    day: "vendredi",
    image: "/artists_2026/cybercafé2.webp",
    description:
      "Cybercafé est un groupe de musique aux influences rock indé, musique électronique et funk qui vous proposent de partager leurs compositions dans un format intensif en improvisation. On ne sait pas grand-chose sur ceux qui le composent, mais en tout cas, c'est sûr qu'ils n'ont jamais joué au festival Nomad avant.",
  },
  {
    name: "Zamitaro",
    style: "Pop / Folk",
    covers: "Reprises",
    day: "vendredi",
    image: "/artists_2026/Zamitaro.webp",
    description:
      "Zamitaro évolue dans un univers acoustique entre pop, folk et chanson française. À la guitare et à la voix, il propose des reprises réinterprétées simplement, avec une approche intime et sincère, parfois soutenue par quelques textures en loop, dans une atmosphère douce et accessible.",
  },
  {
    name: "Elise",
    style: "DJ Set · Disco / Soul / Funk / House",
    covers: "DJ Set",
    day: "vendredi",
    image: "/artists_2026/Elise.webp",
    soundcloud: "https://on.soundcloud.com/iHacIdPuIbnnAFTmey",
    description:
      "Salut moi c'est Elise — bb DJ passionnée qui débute tout juste l'aventure.\n\nJ'espère vous faire passer un bon moment avec une sélection qui me ressemble : soul, disco, funk, des titres plein de soleil et de bonnes vibes!",
  },
  {
    name: "Lanlaire",
    style: "Chansons françaises théâtralisées · Lyrique · Jazz · Électro",
    covers: "Reprises & originales",
    day: "samedi",
    image: "/artists_2026/Lanlaire.webp",
    instagram: "https://www.instagram.com/l.anlaire",
    description:
      "Avec leur projet Lanlaire, Esther & Nathan proposent un concert théâtralisé.\n\nDe 1683 à 2026, reprises et compositions dialoguent à l'aide du piano et de la voix, mais aussi du cajon, du glockenspiel et autres surprises musicales. Dans un rapport tantôt clownesque, tantôt amoureux, les deux interprètes inventent un monde musical tonitruant où la chanson française est à l'honneur, aux côtés de répertoires lyrique, jazz, électro…\n\nLanlaire déclame sa poésie fragile et extravagante, tissant des liens entre les morceaux pour former une sorte de parcours initiatique exalté.",
  },
  {
    name: "Ba-Z",
    style: "Punk Hip-Hop",
    covers: "Originales",
    day: "samedi",
    image: "/artists_2026/Ba-Z.webp",
    instagram: "https://www.instagram.com/ba_z_zik",
    description:
      'Based, l\'anglicisme formé à partir de l\'adjectif "basé", synonyme d\'en place, de pertinent et qui donne son nom au duo formé par Limace et Julio (Ba-Z), est la seule teinte d\'égo trip du projet.\n\nPratiquant une écriture auto-dérisoire, tantôt nihiliste, tantôt poétique, tantôt amusée et sans complexe, c\'est à l\'intersection de leurs univers musicaux respectifs qu\'ils entendent faire une forme nouvelle de rap alternatif.\n\nMêlant le rap au rock, la pop au punk, et passant par des rythmes et des sonorités empruntées à la musique électro, Ba-Z s\'appréhende par sa singularité et sa multiplicité d\'écriture, toujours portée vers la scène, vers le public.',
  },
  {
    name: "Jaja",
    style: "DJ Set · Afrobeat / Baile Funk / Reggaeton / Shatta",
    covers: "DJ Set",
    day: "samedi",
    image: "/artists_2026/Copie de Jaja-new-picture.webp",
    description:
      'Jaja revient avec un set qui va faire trembler la piste sur des rythmes de Shatta, Baile Funk et Reggaeton. Et cette fois, vous la connaissez déjà, alors vous savez ce qui vous attend !!\n\n"Baby Dj" et passionnée de ces genres musicaux, elle tient à souligner l\'importance de reconnaître leurs origines et leurs contextes sociopolitiques. Ces styles sont nés dans des communautés marginalisées et portent en eux des messages de résistance et d\'affirmation culturelle.\n\nPassionnée par ces musiques venues des quatre coins du monde, elle les joue avec amour et respect pour les cultures qui les ont fait naître.',
  },
  {
    name: "Les J'ai pas tout compris",
    style: "Théâtre d'improvisation",
    covers: "Impro",
    day: "samedi",
    image: "/artists_2026/J_ai pas tout compris.webp",
    instagram: "https://www.instagram.com/jaipastoutcompris/",
    description:
      "La troupe des J'ai Pas Tout Compris rassemble depuis 2014 des improvisateur·ices expérimenté·es de Bordeaux et sa région afin de proposer à son public des créations ambitieuses, tout en restant attachés aux formats traditionnels comme le match d'improvisation.\n\nExigence et inclusivité sont toujours au rendez-vous !",
  },
  {
    name: "UNBREAKHER",
    style: "Rock",
    covers: "Reprises",
    day: "samedi",
    image: "/artists_2026/UNBREAKHER.webp",
    youtube: "https://www.youtube.com/channel/UCIzjWnKe1RTT3SBRaANjIIQ",
    description:
      "Composé de cinq musiciennes passionnées, UNBREAKHER propose un concert énergique et fédérateur autour des grands classiques du rock, du hard rock et du punk.\n\nPorté par une forte complicité sur scène et un son puissant, UNBREAKHER revisite les standards du rock avec puissance et authenticité, en y ajoutant une touche féminine assumée et une énergie communicative.\n\nEntre riffs efficaces, rythmiques solides et refrains incontournables, UNBREAKHER transforme chaque concert en moment de partage et de fête. Depuis 7 ans, le groupe se produit régulièrement en Nouvelle-Aquitaine.",
  },
  {
    name: "La TMDV",
    style: "Techno Fanfare",
    covers: "Reprises & originales",
    day: "samedi",
    image: "/artists_2026/La TMDV.webp",
    instagram: "https://www.instagram.com/_.tmdv._",
    description:
      "Techno-fanfare fondée en 2023, la TMDV est une bande de fanfarons qui va vous faire danser et chanter toute la nuit avec ses reprises techno et ses rythmes endiablés.\n\nLa TMDV est une fanfare électrisante qui fusionne l'énergie brute de la fanfare avec les beats pulsants de la musique techno. Formée par un groupe d'amis issus de fanfares étudiantes parisiennes, la TMDV a vu le jour il y a deux ans, dans le but de créer une expérience musicale unique.\n\nEntre reprises d'autres techno-fanfares, arrangements audacieux et compositions originales, notre répertoire évolue au fil des influences et des rencontres.",
  },
  {
    name: "Sarah Moon",
    style: "Pop / Folk",
    covers: "Reprises & originales",
    day: "samedi",
    image: "/artists_2026/Sarah Moon.webp",
    description:
      "Sarah Moon mêle guitare acoustique et voix singulière dans un univers pop folk à fleur de peau. Entre reprises revisitées et compositions personnelles, elle crée des instants chaleureux et authentiques, où douceur, énergie et sensibilité se rencontrent.",
  },
  {
    name: "HaDJet27",
    style: "DJ Set · Drum'n'Bass",
    covers: "DJ Set",
    day: "samedi",
    image: "/artists_2026/HaDJet27.webp",
    instagram: "https://www.instagram.com/hadjet27",
    description:
      "HaDJet27 est un disc-jokey instable ayant un penchant très fort pour les breaks de batterie et les basses qui viennent gratouiller l'arrière de ton cerveau. Il est 100% impossible de ne pas réaliser au moins une \"bass face\" durant un de ses sets. Satisfait ou remboursé.",
  },
];

type Day = "vendredi" | "samedi";

export default function Program2026() {
  const [activeDay, setActiveDay] = useState<Day>("vendredi");
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedArtist ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArtist]);

  const filtered = artists.filter((a) => a.day === activeDay);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center pt-10 pb-8"
        >
          <p className="subtitle mb-2 tracking-widest uppercase text-sm">Nomad Festival</p>
          <h1 className="heading-1 drop-shadow-glow">Programmation 2026</h1>
        </motion.div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center mb-10"
        >
          <div
            className="relative flex rounded-full p-1"
            style={{
              background: "rgba(var(--color-dark-rgb), 0.6)",
              border: "1px solid rgba(var(--color-primary-rgb), 0.25)",
            }}
          >
            {(["vendredi", "samedi"] as Day[]).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className="relative z-10 px-7 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 capitalize"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  color: activeDay === day ? "var(--color-dark)" : "var(--color-text)",
                }}
              >
                {activeDay === day && (
                  <motion.span
                    layoutId="day-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "var(--color-primary)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{day}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Artist grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {filtered.map((artist) => (
              <motion.div
                key={artist.name}
                variants={cardVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedArtist(artist)}
              >
                <div
                  className="relative overflow-hidden artist-card"
                  style={{ background: "rgba(var(--color-dark-rgb), 0.5)", borderRadius: 0 }}
                >
                  {/* Photo */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,60,0.92) 0%, rgba(0,0,60,0.4) 50%, transparent 100%)",
                      }}
                    />

                    {/* Covers badge top-right */}
                    <div className="absolute top-3 right-3">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{
                          background: "rgba(var(--color-primary-rgb), 0.2)",
                          border: "1px solid rgba(var(--color-primary-rgb), 0.45)",
                          color: "var(--color-light)",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {artist.covers}
                      </span>
                    </div>

                    {/* Social icons top-left */}
                    <div
                      className="absolute top-3 left-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <SocialLinks
                        spotify={artist.spotify}
                        youtube={artist.youtube}
                        instagram={artist.instagram}
                        soundcloud={artist.soundcloud}
                        size="sm"
                        className="text-white"
                      />
                    </div>

                    {/* Name + style bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2
                        className="text-xl font-bold text-white leading-tight mb-1 drop-shadow-glow"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {artist.name}
                      </h2>
                      <p
                        className="text-sm font-medium leading-snug"
                        style={{ color: "var(--color-secondary)" }}
                      >
                        {artist.style}
                      </p>
                    </div>
                  </div>

                  {/* Description preview strip — fond toujours sombre, texte toujours clair */}
                  <div className="px-5 py-4">
                    <p
                      className="text-sm leading-relaxed line-clamp-2"
                      style={{ color: "rgba(250, 230, 235, 0.8)" }}
                    >
                      {artist.description.split("\n")[0]}
                    </p>
                    <p
                      className="text-xs mt-2 font-semibold tracking-wide uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: "rgba(250, 230, 235, 1)", fontFamily: "'Poppins', sans-serif" }}
                    >
                      En savoir plus →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedArtist(null)}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(6px)" }}
          >
            <motion.div
              key="modal"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 340, damping: 38 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full sm:max-w-5xl artist-dialog overflow-hidden rounded-t-[20px] sm:rounded-2xl"
              style={{
                backgroundColor: "var(--color-background)",
                maxHeight: "92dvh",
              }}
            >
              <div className="flex flex-col sm:flex-row overflow-y-auto custom-scrollbar" style={{ maxHeight: "92dvh" }}>
                {/* Image */}
                <div className="w-full sm:w-2/5 sm:min-h-full flex-shrink-0 relative">
                  <div className="aspect-[4/3] sm:aspect-auto sm:h-full relative">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="w-full h-full object-cover"
                      style={{ minHeight: "200px" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 60%, var(--color-background) 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-8 sm:overflow-y-auto">
                  {/* Day badge */}
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(var(--color-primary-rgb), 0.15)",
                      border: "1px solid rgba(var(--color-primary-rgb), 0.4)",
                      color: "var(--color-primary)",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {selectedArtist.day === "vendredi" ? "Vendredi" : "Samedi"}
                  </span>

                  <h2
                    className="text-2xl sm:text-3xl font-bold text-white drop-shadow-glow mb-1 leading-tight"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {selectedArtist.name}
                  </h2>

                  <p
                    className="text-sm sm:text-base font-semibold mb-1"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {selectedArtist.style}
                  </p>

                  <p
                    className="text-xs mb-5 opacity-60"
                    style={{ color: "var(--color-text)", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {selectedArtist.covers}
                  </p>

                  <p
                    className="text-base leading-relaxed whitespace-pre-line mb-6"
                    style={{ color: "var(--color-text)" }}
                  >
                    {selectedArtist.description}
                  </p>

                  <SocialLinks
                    spotify={selectedArtist.spotify}
                    youtube={selectedArtist.youtube}
                    instagram={selectedArtist.instagram}
                    soundcloud={selectedArtist.soundcloud}
                    isInModal
                    className="pb-2"
                  />
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedArtist(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full z-50 text-xl transition-colors duration-300 bg-opacity-50"
                style={{
                  backgroundColor: "var(--color-background)",
                  color: "var(--color-text)",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "var(--color-text)")}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

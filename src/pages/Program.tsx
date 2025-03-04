import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

interface Artist {
  name: string;
  artist: string;
  style: string;
  image: string;
  spotify?: string;
  youtube?: string;
  description: string;
}

const artists: Artist[] = [
  {
    name: 'M41H14',
    artist: 'Mathis Couvidou',
    style: 'Électro Expérimental',
    image: '/artists/m41h14 - mathis couvidou (1).png',
    spotify: 'https://open.spotify.com/intl-fr/artist/6Te49r3A6f5BiIgBRxH7FH',
    youtube: 'https://youtube.com/',
    description: 'Un voyage sonore unique mêlant électro expérimentale et textures ambient.'
  },
  {
    name: 'Glenn B',
    artist: 'Glenn B',
    style: 'House Progressive',
    image: '/artists/Glenn B.jpg',
    description: 'Des sets house progressifs qui vous transportent dans un univers hypnotique.'
  },
  {
    name: 'Limace',
    artist: 'Limace',
    style: 'Rock Alternatif',
    image: '/artists/Limace_cover.jpeg',
    description: 'Un rock alternatif puissant et mélodique qui ne laisse personne indifférent.'
  },
  {
    name: 'SansChaise VS Arthychoc',
    artist: 'SansChaise VS Arthychoc',
    style: 'Battle DJ Set',
    image: '/artists/SansChaise VS Arthychoc.jpg',
    description: 'Un battle DJ set explosif entre deux artistes aux univers complémentaires.'
  },
  {
    name: 'Harry & Emma',
    artist: 'Harry & Emma',
    style: 'Folk Acoustique',
    image: '/artists/Harry & Emma.jpeg',
    description: 'Un duo folk acoustique authentique aux harmonies vocales envoûtantes.'
  },
  {
    name: 'Clément Serra',
    artist: 'Clément Verdeau',
    style: 'Électro House',
    image: '/artists/clement serra - Clement Verdeau.png',
    description: 'Des productions électro house énergiques et raffinées.'
  },
  {
    name: 'Morfalous',
    artist: 'Morfalous',
    style: 'Rock Fusion',
    image: '/artists/Morfalous.png',
    description: 'Une fusion explosive entre rock, funk et influences world music.'
  },
  {
    name: 'The Couch Sleepers',
    artist: 'The Couch Sleepers',
    style: 'Indie Rock',
    image: '/artists/The Couch Sleepers.jpeg',
    description: 'Un indie rock rêveur aux mélodies accrocheuses.'
  },
  {
    name: 'Marc Hazan',
    artist: 'Marc Hazan',
    style: 'Jazz Contemporain',
    image: '/artists/DSCF2672 - Marc Hazan.jpg',
    description: 'Un jazz contemporain innovant qui repousse les frontières du genre.'
  },
  {
    name: 'Pierre Albarn',
    artist: 'Pierre Albarn',
    style: 'Électro Pop',
    image: '/artists/DSC06037 - Pierre Albarn.jpeg',
    description: 'Des compositions électro pop modernes aux accents rétro.'
  },
  {
    name: 'Ortempo',
    artist: 'Simon Griffault',
    style: 'Électro Ambient',
    image: '/artists/ortempo - Simon Griffault.png',
    description: 'Des paysages sonores ambient qui invitent au voyage intérieur.'
  },
  {
    name: 'Fafa & Boubou',
    artist: 'Simon Griffault',
    style: 'DJ Set',
    image: '/artists/fafa&boubou_2_sauv - Simon Griffault.png',
    description: 'Un DJ set éclectique qui fait danser toute la nuit.'
  }
];

export default function Program() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1 text-center mb-12">
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
                    <p className="text-lg mb-4" style={{ color: 'var(--color-light)' }}>
                      {artist.style}
                    </p>
                    
                    {(artist.spotify || artist.youtube) && (
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {artist.spotify && (
                          <a
                            href={artist.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-green-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FontAwesomeIcon icon={faSpotify} size="lg" />
                          </a>
                        )}
                        {artist.youtube && (
                          <a
                            href={artist.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                          </a>
                        )}
                      </div>
                    )}
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
                  className="relative max-w-2xl w-full rounded-lg overflow-hidden artist-dialog"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t" 
                      style={{ 
                        backgroundImage: `linear-gradient(to top, var(--color-background), transparent, transparent)` 
                      }} 
                    />
                  </div>

                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-2 drop-shadow-glow" style={{ color: 'var(--color-primary)' }}>
                      {selectedArtist.name}
                    </h2>
                    <p className="text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                      {selectedArtist.artist}
                    </p>
                    <p className="text-lg mb-4" style={{ color: 'var(--color-primary)' }}>
                      {selectedArtist.style}
                    </p>
                    <p className="text-lg mb-6" style={{ color: 'var(--color-text)' }}>
                      {selectedArtist.description}
                    </p>

                    <div className="flex space-x-4">
                      {selectedArtist.spotify && (
                        <a
                          href={selectedArtist.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl transition-colors"
                          style={{ color: 'var(--color-text)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#1DB954'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                        >
                          <FontAwesomeIcon icon={faSpotify} />
                        </a>
                      )}
                      {selectedArtist.youtube && (
                        <a
                          href={selectedArtist.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-2xl transition-colors"
                          style={{ color: 'var(--color-text)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = '#FF0000'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
                        >
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArtist(null)}
                    className="absolute top-4 right-4 transition-colors text-xl"
                    style={{ color: 'var(--color-text)' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text)'}
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
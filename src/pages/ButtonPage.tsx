import { motion } from 'framer-motion';
import { ButtonDemo } from '../components/ButtonDemo';

export default function ButtonPage() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1 text-center mb-8">Composant Bouton</h1>
          
          <div className="mb-8">
            <p className="paragraph">
              Ce composant de bouton personnalisé s'adapte automatiquement au thème actuel du site.
              Il offre plusieurs variantes, tailles et fonctionnalités pour répondre à différents besoins d'interface.
            </p>
          </div>
          
          <ButtonDemo />
          
          <div className="mt-12">
            <h2 className="heading-2 mb-4">Comment utiliser</h2>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 overflow-auto">
              <pre className="text-sm">
                <code>
{`import { Button } from './components/Button';

// Bouton simple
<Button>Cliquez-moi</Button>

// Variantes
<Button variant="primary">Primaire</Button>
<Button variant="secondary">Secondaire</Button>
<Button variant="outline">Contour</Button>
<Button variant="ghost">Fantôme</Button>

// Tailles
<Button size="sm">Petit</Button>
<Button size="md">Moyen</Button>
<Button size="lg">Grand</Button>

// Avec icône
<Button 
  icon={<svg>...</svg>}
  iconPosition="right"
>
  Avec icône
</Button>

// États
<Button isLoading={true}>Chargement</Button>
<Button disabled>Désactivé</Button>
<Button fullWidth>Pleine largeur</Button>`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
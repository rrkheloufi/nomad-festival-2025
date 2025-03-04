import { useState } from 'react';
import { Button } from './Button';
import { useTheme } from '../context/ThemeContext';

export function ButtonDemo() {
  const { themeMode } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(var(--color-background-rgb), 0.5)' }}>
      <h2 className="heading-2 mb-6">Démonstration des boutons</h2>
      
      <div className="space-y-8">
        {/* Variants */}
        <div>
          <h3 className="heading-3 mb-4">Variantes</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primaire</Button>
            <Button variant="secondary">Secondaire</Button>
            <Button variant="outline">Contour</Button>
            <Button variant="ghost">Fantôme</Button>
          </div>
        </div>
        
        {/* Sizes */}
        <div>
          <h3 className="heading-3 mb-4">Tailles</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Petit</Button>
            <Button size="md">Moyen</Button>
            <Button size="lg">Grand</Button>
          </div>
        </div>
        
        {/* With icons */}
        <div>
          <h3 className="heading-3 mb-4">Avec icônes</h3>
          <div className="flex flex-wrap gap-4">
            <Button 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              }
              iconPosition="right"
            >
              Suivant
            </Button>
            
            <Button 
              variant="outline"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
              }
            >
              Précédent
            </Button>
          </div>
        </div>
        
        {/* States */}
        <div>
          <h3 className="heading-3 mb-4">États</h3>
          <div className="flex flex-wrap gap-4">
            <Button onClick={handleLoadingClick} isLoading={isLoading}>
              {isLoading ? 'Chargement...' : 'Cliquez-moi'}
            </Button>
            <Button disabled>Désactivé</Button>
            <Button fullWidth>Pleine largeur</Button>
          </div>
        </div>
        
        {/* Theme specific */}
        <div>
          <h3 className="heading-3 mb-4">Adapté au thème ({themeMode})</h3>
          <p className="paragraph mb-4">
            Ces boutons s'adaptent automatiquement au thème actuel du site.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Action principale</Button>
            <Button variant="secondary">Action secondaire</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
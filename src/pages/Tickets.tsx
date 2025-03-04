import { motion } from 'framer-motion';
import { Button } from '../components/Button';

const tickets = [
  {
    id: 1,
    name: 'Pass 3 jours',
    price: '150€',
    description: 'Accès complet aux trois jours du festival',
    features: [
      'Accès à tous les concerts',
      'Camping inclus',
      'Accès aux ateliers',
      "Navette depuis l'aéroport"
    ]
  },
  {
    id: 2,
    name: 'Pass 1 jour',
    price: '60€',
    description: 'Accès pour une journée au choix',
    features: [
      'Accès aux concerts du jour',
      'Accès aux ateliers du jour'
    ]
  }
];

export default function Tickets() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-festival-primary mb-8">Billetterie</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {tickets.map((ticket) => (
              <motion.div
                key={ticket.id}
                whileHover={{ scale: 1.02 }}
                className="ticket-card backdrop-blur-sm rounded-lg p-8 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-festival-primary mb-2">{ticket.name}</h2>
                  <p className="text-3xl font-bold text-festival-dark mb-4">{ticket.price}</p>
                  <p className="text-festival-dark mb-6">{ticket.description}</p>
                  <ul className="space-y-2 mb-8">
                    {ticket.features.map((feature, index) => (
                      <li key={index} className="text-festival-dark flex items-center">
                        <span className="text-festival-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://www.google.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" fullWidth>
                      Réserver
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-festival-primary mb-4">Informations importantes</h2>
            <ul className="space-y-4 text-festival-dark">
              <li>• Les billets sont nominatifs et non remboursables</li>
              <li>• Un justificatif d'identité sera demandé à l'entrée</li>
              <li>• Les mineurs doivent être accompagnés d'un adulte</li>
              <li>• Le camping est inclus uniquement dans le pass 3 jours</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
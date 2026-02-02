import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CollaborationsSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const partners = [
    {
      name: 'Knoll',
      descIt: 'Partner tecnico per produzioni speciali e arredi contract di alta gamma.',
      descEn: 'Technical partner for special productions and high-end contract furniture.',
    },
    {
      name: 'Cantieri Navali',
      descIt: 'Collaborazioni consolidate con i principali cantieri nautici italiani ed europei.',
      descEn: 'Established collaborations with leading Italian and European shipyards.',
    },
    {
      name: 'Studi di Architettura',
      descIt: 'Realizzazione di progetti per i più rinomati architetti d\'interni.',
      descEn: 'Execution of projects for the most renowned interior architects.',
    },
  ];

  return (
    <section className="section-luxury bg-secondary" ref={ref}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-gold">
              {t('Collaborazioni', 'Collaborations')}
            </span>
            <h2 className="text-foreground mt-4 mb-6">
              {t(
                'Partner dell\'Eccellenza',
                'Partners in Excellence'
              )}
            </h2>
            <div className="divider-gold !mx-0" />
            <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
              {t(
                'Non siamo semplici fornitori. Siamo partner tecnici per chi non accetta compromessi. La nostra collaborazione con brand internazionali è testimonianza di standard produttivi ai massimi livelli.',
                'We are not mere suppliers. We are technical partners for those who accept no compromises. Our collaboration with international brands testifies to production standards at the highest levels.'
              )}
            </p>
          </motion.div>

          {/* Right - Partners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-8 bg-background border border-border hover:border-gold/30 transition-all duration-500"
              >
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground">
                  {t(partner.descIt, partner.descEn)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;

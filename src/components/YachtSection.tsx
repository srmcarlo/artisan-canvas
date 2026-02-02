import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import yachtSalon from '@/assets/yacht-salon.jpg';

const YachtSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      titleIt: 'Resistenza Marina',
      titleEn: 'Marine Resistance',
      descIt: 'Materiali e trattamenti specifici per ambiente salino, umidità e vibrazioni.',
      descEn: 'Materials and treatments specific to saline environment, humidity, and vibrations.',
    },
    {
      titleIt: 'Ottimizzazione Spazi',
      titleEn: 'Space Optimization',
      descIt: 'Soluzioni integrate che massimizzano ogni centimetro di cabine e salon.',
      descEn: 'Integrated solutions that maximize every inch of cabins and salons.',
    },
    {
      titleIt: 'Installazione Globale',
      titleEn: 'Global Installation',
      descIt: 'Team dedicato per montaggio in cantieri navali internazionali.',
      descEn: 'Dedicated team for installation in international shipyards.',
    },
  ];

  return (
    <section id="yachts" className="relative overflow-hidden" ref={ref}>
      {/* Full-width Image Background */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={yachtSalon}
            alt={t('Interno yacht di lusso', 'Luxury yacht interior')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-transparent" />
        </div>

        <div className="relative z-10 container-luxury py-32">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-label text-gold tracking-[0.3em]"
            >
              {t('Specializzazione Nautica', 'Nautical Specialization')}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cream mt-6 mb-8"
            >
              {t(
                'Interni per Yacht d\'Eccezione',
                'Interiors for Exceptional Yachts'
              )}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-cream/80 mb-12 leading-relaxed"
            >
              {t(
                'Da oltre trent\'anni progettiamo e realizziamo interni per le imbarcazioni più prestigiose. Ogni yacht è una sfida unica: spazi da inventare, materiali da reinventare, ambienti che devono resistere al mare conservando l\'eleganza.',
                'For over thirty years, we have designed and built interiors for the most prestigious vessels. Every yacht is a unique challenge: spaces to invent, materials to reinvent, environments that must withstand the sea while preserving elegance.'
              )}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 mb-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-px h-full bg-gold/50 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg text-cream mb-1">
                      {t(feature.titleIt, feature.titleEn)}
                    </h4>
                    <p className="text-cream/60 text-sm">
                      {t(feature.descIt, feature.descEn)}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button variant="hero" size="luxury-lg">
                {t('Scopri i Progetti Nautici', 'Explore Nautical Projects')}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtSection;

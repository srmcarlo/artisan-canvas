import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import yachtCabin from '@/assets/yacht-cabin-new.png';

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
    <section id="yachts" className="relative overflow-hidden bg-charcoal" ref={ref}>
      <div className="relative min-h-screen flex items-center">
        {/* Background Image with Zoom Animation */}
        <div className="absolute inset-0">
          <motion.img
            src={yachtCabin}
            alt={t('Interno yacht di lusso', 'Luxury yacht interior')}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={isInView ? { scale: 1 } : { scale: 1.2 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>

        <div className="relative z-10 container-luxury py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="text-label text-gold tracking-[0.4em] font-medium">
                {t('Specializzazione Nautica', 'Nautical Specialization')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-cream mt-6 mb-8 font-['Cinzel'] uppercase tracking-wider text-4xl md:text-5xl lg:text-6xl"
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
              className="text-lg md:text-xl text-cream/70 mb-12 leading-relaxed font-light italic"
            >
              {t(
                'Da oltre trent\'anni progettiamo e realizziamo interni per le imbarcazioni più prestigiose. Ogni yacht è una sfida unica: spazi da inventare, materiali da reinventare, ambienti che devono resistere al mare conservando l\'eleganza.',
                'For over thirty years, we have designed and built interiors for the most prestigious vessels. Every yacht is a unique challenge: spaces to invent, materials to reinvent, environments that must withstand the sea while preserving elegance.'
              )}
            </motion.p>

            {/* Features with staggered reveal */}
            <div className="space-y-8 mb-14">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group flex gap-6 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-px h-16 bg-gradient-to-b from-gold/80 to-transparent flex-shrink-0 group-hover:bg-gold transition-colors duration-500" />
                  <div>
                    <h4 className="font-serif text-xl text-cream mb-2 group-hover:text-gold transition-colors duration-500">
                      {t(feature.titleIt, feature.titleEn)}
                    </h4>
                    <p className="text-cream/50 text-sm md:text-base max-w-md font-light leading-relaxed">
                      {t(feature.descIt, feature.descEn)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button variant="hero" size="luxury-lg" className="min-w-[240px] shadow-gold/10 shadow-2xl">
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

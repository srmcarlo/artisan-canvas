import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import woodGrainImage from '@/assets/wood-grain-new.png';

const PhilosophySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" className="section-luxury bg-secondary grain-overlay relative" ref={ref}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image with Parallax-like effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <motion.img
                src={woodGrainImage}
                alt={t('Materia prima - Noce prezioso', 'Raw material - Precious walnut')}
                className="w-full h-full object-cover"
                animate={isInView ? { scale: [1.1, 1] } : {}}
                transition={{ duration: 5, ease: "easeOut" }}
              />
            </div>
            {/* Layered decorative frame */}
            <div className="absolute -inset-4 border border-gold/10 pointer-events-none -z-10" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-r border-b border-gold/20 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-editorial"
          >
            <span className="text-label text-gold font-medium tracking-[0.3em]">
              {t('Filosofia', 'Philosophy')}
            </span>

            <h2 className="text-foreground font-serif text-5xl md:text-6xl italic leading-tight mt-4">
              {t(
                'Il Legno è Materia Viva',
                'Wood is Living Matter'
              )}
            </h2>

            <div className="divider-gold !mx-0 mt-8 mb-12" />

            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              {t(
                'Nel silenzio del laboratorio, ogni venatura racconta millenni di storia. Non trasformiamo semplicemente il legno: lo ascoltiamo, lo comprendiamo, lo portiamo a compimento.',
                'In the silence of our workshop, every grain tells millennia of history. We don\'t simply transform wood: we listen to it, understand it, bring it to fruition.'
              )}
            </p>

            <p className="text-muted-foreground leading-relaxed font-light">
              {t(
                'La nostra falegnameria unisce il gesto artigianale alla precisione industriale. Ogni progetto è un dialogo tra tradizione e innovazione, tra la sapienza delle mani e l\'esattezza delle tecnologie più avanzate.',
                'Our workshop unites artisanal gesture with industrial precision. Every project is a dialogue between tradition and innovation, between the wisdom of hands and the exactness of cutting-edge technology.'
              )}
            </p>

            <motion.div
              className="pt-8 block border-t border-gold/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <p className="text-editorial text-2xl text-walnut italic serif">
                {t(
                  '"La perfezione non è un dettaglio. È fatta di dettagli."',
                  '"Perfection is not a detail. It is made of details."'
                )}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

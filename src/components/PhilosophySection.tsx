import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import craftsmanshipImage from '@/assets/craftsmanship-detail.jpg';

const PhilosophySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="philosophy" className="section-luxury bg-secondary grain-overlay" ref={ref}>
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={craftsmanshipImage}
                alt={t('Dettaglio artigianale', 'Craftsmanship detail')}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-editorial"
          >
            <span className="text-label text-gold">
              {t('Filosofia', 'Philosophy')}
            </span>

            <h2 className="text-foreground">
              {t(
                'Il Legno è Materia Viva',
                'Wood is Living Matter'
              )}
            </h2>

            <div className="divider-gold !mx-0" />

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'Nel silenzio del laboratorio, ogni venatura racconta millenni di storia. Non trasformiamo semplicemente il legno: lo ascoltiamo, lo comprendiamo, lo portiamo a compimento.',
                'In the silence of our workshop, every grain tells millennia of history. We don\'t simply transform wood: we listen to it, understand it, bring it to fruition.'
              )}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t(
                'La nostra falegnameria unisce il gesto artigianale alla precisione industriale. Ogni progetto è un dialogo tra tradizione e innovazione, tra la sapienza delle mani e l\'esattezza delle tecnologie più avanzate.',
                'Our workshop unites artisanal gesture with industrial precision. Every project is a dialogue between tradition and innovation, between the wisdom of hands and the exactness of cutting-edge technology.'
              )}
            </p>

            <p className="text-editorial text-xl text-walnut">
              {t(
                '"La perfezione non è un dettaglio. È fatta di dettagli."',
                '"Perfection is not a detail. It is made of details."'
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

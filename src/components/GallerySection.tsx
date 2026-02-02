import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroYacht from '@/assets/hero-yacht-interior.jpg';
import yachtSalon from '@/assets/yacht-salon.jpg';
import bespokeFurniture from '@/assets/bespoke-furniture.jpg';
import woodTexture from '@/assets/wood-texture.jpg';

const GallerySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      image: heroYacht,
      titleIt: 'Yacht 42m – Boiserie Cabina Armatoriale',
      titleEn: 'Yacht 42m – Owner\'s Cabin Paneling',
      captionIt: 'Noce nazionale, incastri a coda di rondine nascosti',
      captionEn: 'Italian walnut, hidden dovetail joints',
    },
    {
      image: yachtSalon,
      titleIt: 'Superyacht – Salon Principale',
      titleEn: 'Superyacht – Main Salon',
      captionIt: 'Teak e marmo Calacatta, finitura opaca',
      captionEn: 'Teak and Calacatta marble, matte finish',
    },
    {
      image: bespokeFurniture,
      titleIt: 'Collezione Privata – Tavolo Scultura',
      titleEn: 'Private Collection – Sculptural Table',
      captionIt: 'Noce Canaletto massello, base monolitica',
      captionEn: 'Solid Canaletto walnut, monolithic base',
    },
    {
      image: woodTexture,
      titleIt: 'Dettaglio Venatura',
      titleEn: 'Grain Detail',
      captionIt: 'La materia prima nella sua espressione più pura',
      captionEn: 'Raw material in its purest expression',
    },
  ];

  return (
    <section id="projects" className="section-luxury bg-charcoal grain-overlay" ref={ref}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-label text-gold tracking-[0.3em]">
            {t('Portfolio', 'Portfolio')}
          </span>
          <h2 className="text-cream mt-4">
            {t('Progetti Selezionati', 'Selected Projects')}
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleIt, project.titleEn)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="font-serif text-lg text-cream mb-1">
                  {t(project.titleIt, project.titleEn)}
                </h4>
                <p className="text-cream/70 text-sm">
                  {t(project.captionIt, project.captionEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

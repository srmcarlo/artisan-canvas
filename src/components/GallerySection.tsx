import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroYacht from '@/assets/hero-yacht-new.png';
import yachtCabin from '@/assets/yacht-cabin-new.png';
import craftsmanshipDetail from '@/assets/craftsmanship-detail-new.png';
import workshopImage from '@/assets/workshop-new.png';

const GallerySection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      image: heroYacht,
      titleIt: 'Superyacht – Salone Principale',
      titleEn: 'Superyacht – Main Salon',
      captionIt: 'Noce nazionale lucido e dettagli in oro 24k',
      captionEn: 'Polished Italian walnut and 24k gold details',
      className: 'md:col-span-2 md:aspect-[21/9]',
    },
    {
      image: yachtCabin,
      titleIt: 'Cabina Armatoriale – Yacht 50m',
      titleEn: 'Owner\'s Cabin – 50m Yacht',
      captionIt: 'Ebano Macassar con finitura satinata',
      captionEn: 'Macassar ebony with satin finish',
      className: 'md:col-span-1 md:aspect-[4/5]',
    },
    {
      image: craftsmanshipDetail,
      titleIt: 'Dettaglio Artigianale',
      titleEn: 'Craftsmanship Detail',
      captionIt: 'Incisione a mano libera su legno di cedro',
      captionEn: 'Hand-carved detailing on cedar wood',
      className: 'md:col-span-1 md:aspect-[4/5]',
    },
    {
      image: workshopImage,
      titleIt: 'Tradizione e Innovazione',
      titleEn: 'Tradition & Innovation',
      captionIt: 'Il nostro laboratorio nel cuore dell\'Umbria',
      captionEn: 'Our workshop in the heart of Umbria',
      className: 'md:col-span-2 md:aspect-[21/9]',
    },
  ];

  return (
    <section id="projects" className="section-luxury bg-charcoal grain-overlay relative" ref={ref}>
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02] flex items-center justify-center">
        <span className="text-[30vw] font-serif font-bold text-cream whitespace-nowrap leading-none">ECCELLENZA</span>
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-label text-gold tracking-[0.5em] mb-4 block">
            {t('Galleria Progetti', 'Project Gallery')}
          </span>
          <h2 className="text-cream mt-4 font-['Cinzel'] uppercase tracking-widest text-4xl md:text-5xl">
            {t('Maestria in Ogni Dettaglio', 'Mastery in Every Detail')}
          </h2>
          <div className="divider-gold w-24 mt-8" />
        </motion.div>

        {/* Gallery Grid - Asymmetrical */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={project.className}
            >
              <button
                className="group relative overflow-hidden cursor-pointer w-full h-full text-left focus:outline-none rounded-sm transition-all"
                onClick={() => {
                  console.log('Project clicked:', project.titleEn);
                }}
                aria-label={`View project: ${t(project.titleIt, project.titleEn)}`}
              >
                <div className="w-full h-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={t(project.titleIt, project.titleEn)}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Visual Overlay - Soft Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-px w-12 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300" />
                    <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-medium">Project Case</span>
                  </div>
                  <h4 className="font-serif text-2xl md:text-3xl text-cream mb-3 font-light">
                    {t(project.titleIt, project.titleEn)}
                  </h4>
                  <p className="text-cream/80 text-sm md:text-base max-w-lg font-light leading-relaxed">
                    {t(project.captionIt, project.captionEn)}
                  </p>

                  <div className="mt-8 flex items-center gap-2 group/btn">
                    <span className="text-cream/50 text-[10px] uppercase tracking-[0.2em] group-hover/btn:text-gold transition-colors underline-animated">View Details</span>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

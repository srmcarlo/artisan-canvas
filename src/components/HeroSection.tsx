import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-yacht-interior.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury yacht interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-label text-cream/80 tracking-[0.3em]">
            {t('Falegnameria di Lusso', 'Luxury Woodworking')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-cream mb-8 max-w-5xl mx-auto"
        >
          {t(
            'L\'Arte del Legno per il Mare',
            'The Art of Wood for the Sea'
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {t(
            'Interni su misura per yacht di lusso. Maestria artigianale italiana dal cuore dell\'Umbria verso i mari del mondo.',
            'Bespoke interiors for luxury yachts. Italian craftsmanship mastery from the heart of Umbria to the seas of the world.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="luxury-lg">
            {t('Richiedi Consulenza', 'Request Consultation')}
          </Button>
          <Button variant="hero-outline" size="luxury-lg">
            {t('Scopri i Progetti', 'Explore Projects')}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-16 bg-gradient-to-b from-cream/0 via-cream/50 to-cream/0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-yacht-new.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Luxury yacht interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Layered Overlays for depth */}
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/30" />

        {/* Animated Light Streaks for extra visual flair */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x: [-100, 100],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent skew-x-12"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-label text-gold/90 font-medium tracking-[0.4em] inline-block px-4 py-1 border-y border-gold/30">
            {t('Falegnameria di Lusso', 'Luxury Woodworking')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-cream mb-8 max-w-5xl mx-auto font-['Cinzel'] font-bold uppercase tracking-wider leading-[1.1]"
        >
          {t(
            'L\'Arte del Legno per il Mare',
            'The Art of Wood for the Sea'
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-lg md:text-2xl text-cream/90 max-w-2xl mx-auto mb-14 font-light leading-relaxed italic"
        >
          {t(
            'Interni su misura per yacht di lusso. Maestria artigianale italiana dal cuore dell\'Umbria verso i mari del mondo.',
            'Bespoke interiors for luxury yachts. Italian craftsmanship mastery from the heart of Umbria to the seas of the world.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button variant="hero" size="luxury-lg" className="min-w-[220px] transition-transform hover:scale-105 active:scale-95">
            {t('Richiedi Consulenza', 'Request Consultation')}
          </Button>
          <Button variant="hero-outline" size="luxury-lg" className="min-w-[220px] transition-transform hover:scale-105 active:scale-95">
            {t('Scopri i Progetti', 'Explore Projects')}
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 rotate-90 origin-left mb-8">Scroll</span>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-20 bg-gradient-to-b from-gold/0 via-gold/60 to-gold/0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

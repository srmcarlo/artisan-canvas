import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import woodTexture from '@/assets/wood-texture.jpg';

const CTASection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={woodTexture}
          alt="Wood texture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-walnut/95" />
      </div>

      <div className="relative z-10 container-narrow text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-label text-gold tracking-[0.3em]"
        >
          {t('Iniziamo', 'Let\'s Begin')}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cream mt-6 mb-8"
        >
          {t(
            'Creiamo Insieme l\'Eccellenza',
            'Let\'s Craft Excellence Together'
          )}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-cream/80 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t(
            'Ogni grande progetto inizia con una conversazione. Raccontateci la vostra visione: noi la trasformeremo in realtà.',
            'Every great project starts with a conversation. Tell us your vision: we will turn it into reality.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="luxury-lg">
            {t('Richiedi Consulenza', 'Request Consultation')}
          </Button>
          <Button variant="hero-outline" size="luxury-lg">
            {t('Visita il Laboratorio', 'Visit the Workshop')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

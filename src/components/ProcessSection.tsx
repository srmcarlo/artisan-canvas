import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import workshopImage from '@/assets/workshop.jpg';

const ProcessSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      numberIt: '01',
      numberEn: '01',
      titleIt: 'Dialogo & Concept',
      titleEn: 'Dialogue & Concept',
      descIt: 'Ascoltiamo la visione del cliente. Ogni progetto inizia con una conversazione approfondita per comprendere esigenze, stile e contesto.',
      descEn: 'We listen to the client\'s vision. Every project begins with an in-depth conversation to understand needs, style, and context.',
    },
    {
      numberIt: '02',
      numberEn: '02',
      titleIt: 'Progettazione Tecnica',
      titleEn: 'Technical Design',
      descIt: 'I nostri progettisti traducono le idee in soluzioni realizzabili. Modelli 3D, campionature materiali, studio delle finiture.',
      descEn: 'Our designers translate ideas into feasible solutions. 3D models, material samples, finish studies.',
    },
    {
      numberIt: '03',
      numberEn: '03',
      titleIt: 'Realizzazione Artigianale',
      titleEn: 'Artisanal Crafting',
      descIt: 'Nel nostro laboratorio, i maestri falegnami danno forma al progetto. Ogni pezzo è seguito con attenzione maniacale.',
      descEn: 'In our workshop, master craftsmen shape the project. Every piece is followed with meticulous attention.',
    },
    {
      numberIt: '04',
      numberEn: '04',
      titleIt: 'Installazione & Finitura',
      titleEn: 'Installation & Finishing',
      descIt: 'Team dedicato per il montaggio in loco. Regolazioni finali, controllo qualità, consegna chiavi in mano.',
      descEn: 'Dedicated team for on-site installation. Final adjustments, quality control, turnkey delivery.',
    },
  ];

  return (
    <section className="section-luxury bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-label text-gold">
            {t('Il Processo', 'The Process')}
          </span>
          <h2 className="text-foreground mt-4">
            {t('Dall\'Idea alla Perfezione', 'From Idea to Perfection')}
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl text-gold/40">
                    {t(step.numberIt, step.numberEn)}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {t(step.titleIt, step.titleEn)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(step.descIt, step.descEn)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={workshopImage}
                alt={t('Laboratorio artigianale', 'Artisan workshop')}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/30 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

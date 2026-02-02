import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Anchor, Armchair, Handshake, Wrench } from 'lucide-react';

const ExpertiseSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const expertiseBlocks = [
    {
      icon: Anchor,
      titleIt: 'Interni Nautici',
      titleEn: 'Yacht Interiors',
      descIt: 'Soluzioni complete per yacht e imbarcazioni di lusso. Dalla progettazione all\'installazione, gestiamo ogni complessità dell\'ambiente marino.',
      descEn: 'Complete solutions for luxury yachts and vessels. From design to installation, we manage every complexity of the marine environment.',
    },
    {
      icon: Armchair,
      titleIt: 'Arredi Su Misura',
      titleEn: 'Bespoke Furniture',
      descIt: 'Mobili unici creati per spazi esclusivi. Ogni pezzo è progettato in dialogo con l\'architettura e lo stile del committente.',
      descEn: 'Unique furniture created for exclusive spaces. Each piece is designed in dialogue with the architecture and style of the client.',
    },
    {
      icon: Handshake,
      titleIt: 'Partnership Design',
      titleEn: 'Design Partnerships',
      descIt: 'Collaborazioni con brand internazionali come Knoll. Realizziamo produzioni speciali con gli standard più elevati.',
      descEn: 'Collaborations with international brands like Knoll. We execute special productions with the highest standards.',
    },
    {
      icon: Wrench,
      titleIt: 'Lavorazioni Avanzate',
      titleEn: 'Advanced Techniques',
      descIt: 'Tecnologie CNC integrate con maestria manuale. Curve impossibili, incastri perfetti, finiture senza compromessi.',
      descEn: 'CNC technologies integrated with manual mastery. Impossible curves, perfect joints, uncompromising finishes.',
    },
  ];

  return (
    <section id="expertise" className="section-luxury bg-background" ref={ref}>
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-label text-gold">
            {t('Le Nostre Competenze', 'Our Expertise')}
          </span>
          <h2 className="text-foreground mt-4">
            {t('Eccellenza in Ogni Ambito', 'Excellence in Every Field')}
          </h2>
          <div className="divider-gold" />
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="group p-8 lg:p-10 bg-card border border-border hover:border-gold/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gold/50 text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500">
                  <block.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-foreground">
                    {t(block.titleIt, block.titleEn)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(block.descIt, block.descEn)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

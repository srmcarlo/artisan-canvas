import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import explodedImage from '@/assets/yacht-exploded.png';

const ExplodedViewSection = () => {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animations based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Simulated 'exploded' parts movement using clips or masks is hard with one image,
    // so we'll use displacement and scale to simulate the "opening" of the architecture.
    const yPart1 = useTransform(scrollYProgress, [0.3, 0.7], [0, -50]);
    const yPart2 = useTransform(scrollYProgress, [0.3, 0.7], [0, 50]);
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);

    return (
        <section
            ref={containerRef}
            className="relative h-[300vh] bg-charcoal"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
                {/* Background Text */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.05]) }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <span className="text-[25vw] font-serif font-bold text-cream select-none">ENGINEERING</span>
                </motion.div>

                {/* The Exploded Asset */}
                <div className="relative z-10 w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center">
                    <motion.div
                        style={{
                            scale,
                            opacity,
                            filter: useTransform(blur, (v) => `blur(${v}px)`),
                        }}
                        className="relative w-full h-full"
                    >
                        <img
                            src={explodedImage}
                            alt="Yacht Architecture Exploded View"
                            className="w-full h-full object-contain"
                        />

                        {/* Visual markers/labels that appear at specific scroll points */}
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.5, 0.6], [0, 1]) }}
                            className="absolute top-[20%] left-[20%] flex flex-col items-start"
                        >
                            <div className="w-12 h-px bg-gold mb-2" />
                            <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium">Precision Joinery</span>
                        </motion.div>

                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0.6, 0.7], [0, 1]) }}
                            className="absolute bottom-[30%] right-[15%] flex flex-col items-end"
                        >
                            <div className="w-12 h-px bg-gold mb-2" />
                            <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium">Exotic Veneers</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 px-6 pointer-events-none">
                    <motion.div
                        style={{
                            y: useTransform(scrollYProgress, [0.2, 0.5], [50, 0]),
                            opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1])
                        }}
                        className="text-center max-w-2xl"
                    >
                        <h2 className="text-cream font-['Cinzel'] text-4xl md:text-6xl mb-6 uppercase tracking-widest">
                            {t('Ingegneria della Bellezza', 'The Engineering of Beauty')}
                        </h2>
                        <p className="text-cream/60 text-lg md:text-xl font-light italic">
                            {t(
                                'Scomponiamo l\'impossibile per renderlo eterno. Ogni innesto è studiato per sfidare il tempo e il mare.',
                                'We deconstruct the impossible to make it eternal. Every joint is engineered to defy time and the sea.'
                            )}
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Progress Indicator (Side) */}
                <div className="absolute right-12 top-1/2 -translate-y-1/2 h-40 w-px bg-cream/10 hidden md:block">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-gold"
                    />
                </div>
            </div>
        </section>
    );
};

export default ExplodedViewSection;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { it: 'Filosofia', en: 'Philosophy', href: '#philosophy' },
    { it: 'Esperienza', en: 'Experience', href: '#yachts' },
    { it: 'Progetti', en: 'Projects', href: '#projects' },
    { it: 'Atelier', en: 'Atelier', href: '#expertise' },
  ];

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12 py-4 ${isScrolled
            ? 'mt-4 mx-4 md:mx-12 rounded-full bg-charcoal/80 backdrop-blur-xl border border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent mt-0'
          }`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="group flex flex-col">
            <span className={`font-['Cinzel'] text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-500 ${isScrolled ? 'text-cream' : 'text-cream'}`}>
              Innocenzi
            </span>
            <span className="text-[10px] tracking-[0.5em] uppercase text-gold opacity-80 group-hover:opacity-100 transition-opacity">
              Falegnameria
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[11px] font-medium uppercase tracking-[0.3em] transition-all duration-500 hover:text-gold ${isScrolled ? 'text-cream/70' : 'text-cream/80'
                  } relative overflow-hidden group`}
              >
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
                  {t(item.it, item.en)}
                </span>
                <span className="absolute left-0 top-full inline-block transition-transform duration-500 group-hover:-translate-y-full text-gold">
                  {t(item.it, item.en)}
                </span>
              </a>
            ))}
          </nav>

          {/* Tools */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex items-center gap-3">
              <Globe className="w-3 h-3 text-gold/60" />
              <div className="flex text-[10px] tracking-[0.2em] font-bold">
                <button
                  onClick={() => setLanguage('it')}
                  className={`transition-colors duration-300 ${language === 'it' ? 'text-gold' : 'text-cream/40 hover:text-cream'}`}
                >
                  IT
                </button>
                <span className="mx-2 text-cream/20">/</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`transition-colors duration-300 ${language === 'en' ? 'text-gold' : 'text-cream/40 hover:text-cream'}`}
                >
                  EN
                </button>
              </div>
            </div>

            <Button
              variant="outline"
              className={`hidden md:flex rounded-full px-8 border-gold/30 hover:bg-gold hover:text-charcoal transition-all duration-500 uppercase text-[10px] tracking-[0.2em] font-bold h-10 ${isScrolled ? 'bg-transparent text-cream' : 'bg-charcoal/20 backdrop-blur-sm text-cream'
                }`}
            >
              {t('Contatti', 'Contact')}
            </Button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-cream"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 top-0 left-0 w-full h-screen bg-charcoal/98 z-[60] flex flex-col p-12 lg:hidden"
            >
              <div className="flex justify-between items-center mb-24">
                <span className="font-['Cinzel'] text-2xl tracking-widest text-cream uppercase">Innocenzi</span>
                <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} className="text-gold" /></button>
              </div>
              <nav className="flex flex-col gap-8">
                {navItems.map((item, idx) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-cream hover:text-gold transition-colors italic"
                  >
                    {t(item.it, item.en)}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-8">
                <div className="h-px w-full bg-gold/20" />
                <Button className="w-full h-16 rounded-none bg-gold text-charcoal font-bold uppercase tracking-widest">
                  {t('Richiedi Consulenza', 'Request Consultation')}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

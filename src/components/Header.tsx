import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { it: 'Filosofia', en: 'Philosophy', href: '#philosophy' },
    { it: 'Competenze', en: 'Expertise', href: '#expertise' },
    { it: 'Yacht', en: 'Yachts', href: '#yachts' },
    { it: 'Progetti', en: 'Projects', href: '#projects' },
    { it: 'Contatti', en: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-foreground">
              Innocenzi
            </span>
            <span className="hidden md:inline font-serif text-xl md:text-2xl tracking-wide text-muted-foreground ml-2">
              Falegnameria
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-label text-muted-foreground hover:text-foreground transition-colors duration-300 underline-animated"
              >
                {t(item.it, item.en)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('it')}
                className={`text-label transition-colors duration-300 ${
                  language === 'it' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                IT
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-label transition-colors duration-300 ${
                  language === 'en' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>
            <Button variant="luxury-outline" size="luxury">
              {t('Richiedi Consulenza', 'Request Consultation')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container-luxury py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-label text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {t(item.it, item.en)}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <button
                  onClick={() => setLanguage('it')}
                  className={`text-label ${language === 'it' ? 'text-foreground' : 'text-muted-foreground'}`}
                >
                  Italiano
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-label ${language === 'en' ? 'text-foreground' : 'text-muted-foreground'}`}
                >
                  English
                </button>
              </div>
              <Button variant="luxury" size="luxury" className="mt-4">
                {t('Richiedi Consulenza', 'Request Consultation')}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

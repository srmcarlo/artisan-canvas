import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-charcoal border-t border-walnut/20">
      <div className="container-luxury py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-cream mb-4">
              Innocenzi Falegnameria
            </h3>
            <p className="text-cream/60 leading-relaxed max-w-md">
              {t(
                'Maestri del legno dal cuore dell\'Umbria. Interni nautici e arredi su misura per chi non accetta compromessi.',
                'Masters of wood from the heart of Umbria. Nautical interiors and bespoke furniture for those who accept no compromises.'
              )}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-gold mb-6">
              {t('Contatti', 'Contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  Foligno (PG), Umbria<br />Italia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:+39000000000" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:info@innocenzi.it" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  info@innocenzi.it
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-label text-gold mb-6">
              {t('Navigazione', 'Navigation')}
            </h4>
            <ul className="space-y-3">
              {[
                { it: 'Filosofia', en: 'Philosophy', href: '#philosophy' },
                { it: 'Competenze', en: 'Expertise', href: '#expertise' },
                { it: 'Progetti Nautici', en: 'Yacht Projects', href: '#yachts' },
                { it: 'Portfolio', en: 'Portfolio', href: '#projects' },
                { it: 'Contatti', en: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cream/70 text-sm hover:text-cream transition-colors"
                  >
                    {t(link.it, link.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-walnut/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © 2024 Innocenzi Falegnameria. {t('Tutti i diritti riservati.', 'All rights reserved.')}
          </p>
          <p className="text-cream/40 text-xs">
            Made in Italy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import ExpertiseSection from '@/components/ExpertiseSection';
import YachtSection from '@/components/YachtSection';
import CollaborationsSection from '@/components/CollaborationsSection';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main id="main-content">
          <HeroSection />
          <PhilosophySection />
          <ExpertiseSection />
          <YachtSection />
          <CollaborationsSection />
          <ProcessSection />
          <GallerySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

import { useEffect } from 'react';
import '@/App.css';
import { initLenis } from '@/lib/smooth';
import { LangProvider } from '@/i18n';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { DemoVideo } from '@/components/DemoVideo';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { Niches } from '@/components/Niches';
import { WhyOrbix } from '@/components/WhyOrbix';
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <LangProvider>
      <div className="bg-[#1E2225] min-h-screen" data-testid="orbix-landing">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <DemoVideo />
          <Services />
          <HowItWorks />
          <Niches />
          <WhyOrbix />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}

export default App;

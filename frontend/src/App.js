import { useEffect } from 'react';
import '@/App.css';
import { initLenis } from '@/lib/smooth';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { DemoVideo } from '@/components/DemoVideo';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { Niches } from '@/components/Niches';
import { WhyOrbix } from '@/components/WhyOrbix';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <div className="bg-[#1A1D1E] min-h-screen" data-testid="orbix-landing">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <DemoVideo />
        <Services />
        <HowItWorks />
        <Niches />
        <WhyOrbix />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

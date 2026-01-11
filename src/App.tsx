import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Differentiators } from './components/Differentiators';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Differentiators />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

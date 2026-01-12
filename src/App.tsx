import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Differentiators } from './components/Differentiators';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BackgroundEffect } from './components/BackgroundEffect';
import { Projects } from './components/Projects';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-foreground selection:bg-primary selection:text-background relative">
      <BackgroundEffect />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <HowItWorks />
        <Projects />
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

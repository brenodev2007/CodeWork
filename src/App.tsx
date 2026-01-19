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
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;

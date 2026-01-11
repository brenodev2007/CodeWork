import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Differentiators } from './components/Differentiators';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Differentiators />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

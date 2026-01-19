import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
      ${isScrolled ? 'glass border-border' : 'bg-transparent border-transparent shadow-none'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
            <a href="#" className="flex-shrink-0">
              <img 
                src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} 
                alt="Codework" 
                className="w-auto object-contain transition-opacity duration-300"
                style={{ height: '160px' }}
              />
            </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Serviços</a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projetos</a>
              <a href="#differentiators" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
            </nav>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 border border-foreground text-sm font-medium rounded-full bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Pedir Orçamento
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 hover:text-muted-foreground focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border absolute w-full left-0 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">Serviços</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">Projetos</a>
            <a href="#differentiators" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md">Diferenciais</a>
            <div className="pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full text-center px-5 py-3 bg-foreground text-background font-bold rounded-md hover:bg-background hover:text-foreground hover:border hover:border-foreground transition-all duration-300"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
            <a href="#" className="flex-shrink-0">
              <img src="/logo.png" alt="Codework" className="h-24 w-auto object-contain" />
            </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Serviços</a>
              <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Projetos</a>
              <a href="#differentiators" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Diferenciais</a>
            </nav>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 border border-black text-sm font-medium rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Contato
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-gray-600 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md">Serviços</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md">Projetos</a>
            <a href="#differentiators" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md">Diferenciais</a>
            <div className="pt-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="block w-full text-center px-5 py-3 border border-black text-base font-medium rounded-md text-black hover:bg-black hover:text-white transition-all duration-300"
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

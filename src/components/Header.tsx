import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
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

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const whatsappLink = "https://wa.me/5511991067870?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#about', label: 'Sobre Nós' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b 
        ${isScrolled ? 'glass border-border' : 'bg-transparent border-transparent shadow-none'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
              <a href="#" className="flex-shrink-0 flex items-center" aria-label="Codework - Voltar ao início">
                <img 
                  src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} 
                  alt="Codework" 
                  className="h-24 md:h-40 w-auto object-contain transition-opacity duration-300"
                />
              </a>
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6" aria-label="Navegação principal">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
                ))}
              </nav>
              
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 border border-foreground text-sm font-medium rounded-lg bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Pedir Orçamento
              </a>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -mr-2 hover:text-muted-foreground focus:outline-none"
                aria-label="Abrir menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu de navegação"
        role="dialog"
        aria-modal="true"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-border">
          <span className="text-lg font-bold tracking-tight">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-muted hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center border border-border"
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-all duration-200 group"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Sidebar Footer CTA */}
        <div className="px-4 py-5 border-t border-border">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-foreground text-background font-bold rounded-xl hover:bg-background hover:text-foreground border border-foreground transition-all duration-300 text-sm"
          >
            Entrar em Contato
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
};

import { Instagram, ArrowRight, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { TermsModal } from './TermsModal';
import { PrivacyModal } from './PrivacyModal';
 
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const whatsappLink = "https://wa.me/5511991067870?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
 
  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Pre-footer CTA */}
      <div className="border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Pronto para escalar seu negócio?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Não deixe sua ideia parada. Transforme-a em um ativo digital de alta performance hoje mesmo.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-foreground text-background rounded-lg font-bold text-base md:text-lg hover:bg-background hover:text-foreground border border-foreground transition-all duration-300"
          >
            Começar Projeto Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 text-left">
            <div className="relative h-8 md:h-12 mb-14 md:mb-16 -mt-4 md:-mt-8">
              <a href="#" className="absolute -left-3 md:-left-4 top-0 z-0" aria-label="Codework - Voltar ao início">
                <img
                  src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'}
                  alt="Codework"
                  className="h-24 sm:h-28 md:h-44 w-auto object-contain object-left"
                />
              </a>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm relative z-10 mt-0 text-left">
              Desenvolvimento web de alta performance para empresas que buscam resultados reais. Especialistas em React, Node.js e Tailwind CSS.
            </p>
            <div className="flex justify-start gap-4 mt-6">
              <a href="https://www.instagram.com/codeworkbr/" target="_blank" rel="noopener noreferrer" aria-label="Siga a Codework no Instagram" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 border border-border">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:contato@codework.com.br" aria-label="Enviar e-mail para contato@codework.com.br" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 border border-border">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spacer - hidden on mobile */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Column 1 - Navegação */}
          <nav className="sm:col-span-1 md:col-span-3" aria-label="Links do rodapé">
            <h3 className="font-bold text-lg mb-5 md:mb-6">Navegação</h3>
            <ul className="space-y-3 md:space-y-4 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="#projects" className="hover:text-foreground transition-colors">Portfólio</a></li>
              <li><a href="#about" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
            </ul>
          </nav>

          {/* Links Column 2 - Contato */}
          <div className="sm:col-span-1 md:col-span-3">
            <h3 className="font-bold text-lg mb-5 md:mb-6">Contato</h3>
            <ul className="space-y-3 md:space-y-4 text-sm text-muted-foreground">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp Comercial
                </a>
              </li>
              <li>
                <a href="mailto:contato@codework.com.br" className="hover:text-foreground transition-colors break-all">
                  contato@codework.com.br
                </a>
              </li>
              <li className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-semibold border border-green-500/20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                  Online Agora
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
 
      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
          <p className="text-center sm:text-left">&copy; {currentYear} Codework Development. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-foreground transition-colors"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-foreground transition-colors"
            >
              Privacidade
            </button>
          </div>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
};
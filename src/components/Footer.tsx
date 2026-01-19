import { Instagram, ArrowRight, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Pre-footer CTA */}
      <div className="border-b border-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Pronto para escalar seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Não deixe sua ideia parada. Transforme-a em um ativo digital de alta performance hoje mesmo.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg hover:bg-background hover:text-foreground border border-foreground transition-all duration-300 hover:-translate-y-1"
            >
              Começar Projeto Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="block">
               <img 
                 src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} 
                 alt="Codework" 
                 style={{ width: '180px' }}
               />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Desenvolvimento web de alta performance para empresas que buscam resultados reais. Especialistas em React, Node.js e Tailwind CSS.
            </p>
            <div className="flex gap-4">
               {/* Social Placeholders */}
               <a href="https://www.instagram.com/codeworkbr/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 border border-border">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="mailto:codeworkbr.contact@gmail.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 border border-border">
                  <Mail className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6">Navegação</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-foreground transition-colors">Serviços</a></li>
                <li><a href="#projects" className="hover:text-foreground transition-colors">Portfólio</a></li>
                <li><a href="#differentiators" className="hover:text-foreground transition-colors">Diferenciais</a></li>
             </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6">Contato</h4>
             <ul className="space-y-4 text-sm text-muted-foreground">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    WhatsApp Comercial
                  </a>
                </li>
                <li><a href="mailto:codeworkbr.contact@gmail.com" className="hover:text-foreground transition-colors">codeworkbr.contact@gmail.com</a></li>
                <li className="pt-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold border border-green-500/20">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Online Agora
                   </div>
                </li>
             </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} Codework Development. Todos os direitos reservados.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

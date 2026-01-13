import { Instagram, ArrowRight, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Pronto para escalar seu negócio?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Não deixe sua ideia parada. Transforme-a em um ativo digital de alta performance hoje mesmo.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-black rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1"
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
            <a href="#" className="block font-bold text-2xl tracking-tighter text-white">
               CODE<span className="text-primary">WORK</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Desenvolvimento web de alta performance para empresas que buscam resultados reais. Especialistas em React, Node.js e Tailwind CSS.
            </p>
            <div className="flex gap-4">
               {/* Social Placeholders */}
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black text-white/70 transition-colors duration-300 border border-white/10">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="mailto:codeworkbr.contact@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black text-white/70 transition-colors duration-300 border border-white/10">
                  <Mail className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6 text-white">Navegação</h4>
             <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Portfólio</a></li>
                <li><a href="#differentiators" className="hover:text-primary transition-colors">Diferenciais</a></li>
             </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6 text-white">Contato</h4>
             <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    WhatsApp Comercial
                  </a>
                </li>
                <li><a href="mailto:codeworkbr.contact@gmail.com" className="hover:text-primary transition-colors">codeworkbr.contact@gmail.com</a></li>
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
      <div className="border-t border-white/10 bg-black/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {currentYear} Codework Development. Todos os direitos reservados.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

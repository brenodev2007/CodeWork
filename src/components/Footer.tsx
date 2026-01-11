import { Instagram, Linkedin, ArrowRight, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Pre-footer CTA */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Pronto para escalar seu negócio?
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Não deixe sua ideia parada. Transforme-a em um ativo digital de alta performance hoje mesmo.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Começar Projeto Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="block">
              <img src="/logo.png" alt="Codework" className="h-32 w-auto object-contain" />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Desenvolvimento web de alta performance para empresas que buscam resultados reais. Especialistas em React, Node.js e Tailwind CSS.
            </p>
            <div className="flex gap-4">
               {/* Social Placeholders */}
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
               </a>
               <a href="mailto:contato@codework.com" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
               </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Column 1 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6">Navegação</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#services" className="hover:text-black transition-colors">Serviços</a></li>
                <li><a href="#projects" className="hover:text-black transition-colors">Portfólio</a></li>
                <li><a href="#differentiators" className="hover:text-black transition-colors">Diferenciais</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Processo</a></li>
             </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3">
             <h4 className="font-bold text-lg mb-6">Contato</h4>
             <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                    WhatsApp Comercial
                  </a>
                </li>
                <li><a href="mailto:contato@codework.com" className="hover:text-black transition-colors">contato@codework.com</a></li>
                <li className="pt-2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Online Agora
                   </div>
                </li>
             </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>&copy; {currentYear} Codework Development. Todos os direitos reservados.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-black transition-colors">Termos de Uso</a>
               <a href="#" className="hover:text-black transition-colors">Privacidade</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

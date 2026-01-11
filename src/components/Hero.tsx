import { ArrowRight, Code2, Zap, Layout } from 'lucide-react';

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent -z-10 rounded-[100%] opacity-70 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-6 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Disponível para novos projetos</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6 max-w-4xl mx-auto leading-tight">
          Desenvolvemos sua próxima <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">grande ideia na web</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Especialistas em React, Node e Tailwind. Criamos experiências digitais rápidas, modernas e focadas em conversão.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white hover:bg-gray-800 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            Começar meu projeto agora
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black border border-gray-200 hover:border-gray-400 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
          >
            Ver portfolio
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 md:gap-16 grayscale opacity-50 hover:opacity-80 transition-opacity duration-300">
           {/* Tech Stack Icons (Text representation for minimalism or icons) */}
           <div className="flex items-center gap-2">
             <Code2 className="w-5 h-5" />
             <span className="font-semibold">React</span>
           </div>
           <div className="flex items-center gap-2">
             <Zap className="w-5 h-5" />
             <span className="font-semibold">Vite</span>
           </div>
           <div className="flex items-center gap-2">
             <Layout className="w-5 h-5" />
             <span className="font-semibold">Tailwind</span>
           </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, Code, Cpu, Layers } from 'lucide-react';

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm shadow-[0_0_15px_rgba(0,229,255,0.3)] mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Disponível para novos projetos</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto leading-tight">
          Transformamos Ideias em <br className="hidden md:block" />
          <span className="text-gradient">Realidade Digital</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Desenvolvimento de software de alta performance com tecnologias modernas. 
          Especialistas em criar interfaces imersivas e funcionais.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mb-16">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-black hover:bg-white rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
          >
            Orçamento Gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center backdrop-blur-md"
          >
            Ver Portfolio
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-10 w-full max-w-4xl">
           <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">STACK TECNOLÓGICA</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
              <div className="flex flex-col items-center gap-3 group hover:scale-110 transition-transform duration-300">
                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00E5FF]/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all">
                    <Code className="w-6 h-6 text-[#00E5FF]" />
                 </div>
                 <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors">React</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 group hover:scale-110 transition-transform duration-300">
                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00FF94]/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(0,255,148,0.3)] transition-all">
                    <Cpu className="w-6 h-6 text-[#00FF94]" />
                 </div>
                 <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors">Node.js</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 group hover:scale-110 transition-transform duration-300">
                 <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#B026FF]/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(176,38,255,0.3)] transition-all">
                    <Layers className="w-6 h-6 text-[#B026FF]" />
                 </div>
                 <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors">Tailwind</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

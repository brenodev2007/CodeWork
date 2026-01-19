import { ArrowRight, Code, Cpu, Layers, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-30 -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-muted/30 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-foreground/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Enhanced badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full border-2 border-border bg-muted/50 backdrop-blur-sm mb-8 animate-fade-in-up shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <Sparkles className="w-4 h-4 mr-3 text-foreground animate-pulse" />
          <span className="text-sm font-semibold uppercase tracking-widest">Disponível para novos projetos</span>
        </div>
        
        {/* Enhanced heading with decorative elements */}
        <div className="relative mb-8">
          <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-border" />
          <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-border" />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
            Transformamos Ideias em <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              <span className="text-gradient">Negócios de Sucesso</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 500 12" fill="none">
                <path d="M0 6 Q250 12, 500 6" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground" />
              </svg>
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Criação de sites profissionais e modernos que transmitem confiança e aumentam suas vendas. 
          <span className="font-semibold text-foreground"> Especialistas em destacar sua empresa na internet.</span>
        </p>
        
        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-20">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-10 py-5 bg-foreground text-background rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-[length:200%_100%] animate-gradient" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Orçamento Gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#projects"
            className="group w-full sm:w-auto px-10 py-5 relative rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center backdrop-blur-md border-2 border-border hover:border-foreground hover:bg-muted hover:scale-105 shadow-lg"
          >
            Ver Portfolio
          </a>
        </div>

        {/* Enhanced feature showcase */}
        <div className="mt-12 border-t-2 border-border pt-12 w-full max-w-5xl">
           <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10 flex items-center justify-center gap-2">
             <span className="w-8 h-[2px] bg-border" />
             Nossas Ferramentas
             <span className="w-8 h-[2px] bg-border" />
           </p>
           
           <div className="grid grid-cols-3 gap-8 md:gap-16">
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="relative">
                   <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full group-hover:bg-foreground/20 transition-all" />
                   <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Code className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                   </div>
                 </div>
                 <div className="text-center">
                   <span className="font-bold text-base md:text-lg block group-hover:text-foreground transition-colors">Interativo</span>
                   <span className="text-xs text-muted-foreground">UX Premium</span>
                 </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="relative">
                   <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full group-hover:bg-foreground/20 transition-all" />
                   <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Cpu className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                   </div>
                 </div>
                 <div className="text-center">
                   <span className="font-bold text-base md:text-lg block group-hover:text-foreground transition-colors">Rápido</span>
                   <span className="text-xs text-muted-foreground">Performance</span>
                 </div>
              </div>
              
              <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="relative">
                   <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full group-hover:bg-foreground/20 transition-all" />
                   <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Layers className="w-8 h-8 md:w-10 md:h-10 text-foreground" />
                   </div>
                 </div>
                 <div className="text-center">
                   <span className="font-bold text-base md:text-lg block group-hover:text-foreground transition-colors">Moderno</span>
                   <span className="text-xs text-muted-foreground">Tecnologia</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

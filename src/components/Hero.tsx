import { ArrowRight, Zap, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const roles = [
  'Sites que Vendem',
  'Sistemas sob Medida',
  'Marcas que Impactam',
  'Experiências que Ficam',
];

const terminalLines = [
  { prompt: '~', cmd: 'codework init meu-projeto', delay: 0 },
  { prompt: '', cmd: '✓ Análise de requisitos concluída', delay: 800 },
  { prompt: '', cmd: '✓ Design responsivo aplicado', delay: 1400 },
  { prompt: '', cmd: '✓ SEO otimizado para Google', delay: 2000 },
  { prompt: '', cmd: '✓ Performance: 98/100', delay: 2600 },
  { prompt: '', cmd: '', delay: 3200 },
  { prompt: '~', cmd: 'deploy --production', delay: 3400 },
  { prompt: '', cmd: '🚀 Site publicado com sucesso!', delay: 4000 },
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [terminalStarted, setTerminalStarted] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const whatsappLink = "https://wa.me/5511991067870?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  // Rotating text effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !terminalStarted) {
          setTerminalStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, [terminalStarted]);

  useEffect(() => {
    if (!terminalStarted) return;

    terminalLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay);
    });
  }, [terminalStarted]);

  return (
    <section
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-screen flex items-center"
      aria-label="Empresa de desenvolvimento web e criação de sites"
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-muted/40 gap-2">
              <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Disponível para novos projetos</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Criamos{' '}
                <span className="relative inline-block">
                  <span 
                    className={`inline-block transition-all duration-300 w-full sm:w-auto sm:min-w-[280px] ${
                      isTransitioning 
                        ? 'opacity-0 translate-y-4' 
                        : 'opacity-100 translate-y-0'
                    }`}
                  >
                    {roles[roleIndex]}
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-foreground" />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Sites profissionais, sistemas web e posicionamento
                digital para empresas que querem{' '}
                <span className="text-foreground font-semibold">crescer de verdade.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-lg font-bold text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Orçamento Gratuito
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center border border-border hover:border-foreground hover:bg-muted/50"
              >
                Ver Projetos
              </a>
            </div>


          </div>

          {/* Right: Interactive Terminal */}
          <div ref={terminalRef} className="relative">
            {/* Terminal window */}
            <div className="rounded-xl border border-border overflow-hidden shadow-lg bg-background">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">terminal — codework</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 md:p-6 font-mono text-sm md:text-base space-y-2 min-h-[240px] sm:min-h-[280px] md:min-h-[320px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {line.prompt ? (
                      <>
                        <span className="text-muted-foreground select-none shrink-0">
                          <ChevronRight className="w-4 h-4 mt-0.5" />
                        </span>
                        <span className="text-foreground font-medium">{line.cmd}</span>
                      </>
                    ) : line.cmd ? (
                      <span className={`ml-6 ${
                        line.cmd.startsWith('✓') 
                          ? 'text-foreground' 
                          : line.cmd.startsWith('🚀')
                            ? 'text-foreground font-bold'
                            : 'text-muted-foreground'
                      }`}>
                        {line.cmd}
                      </span>
                    ) : (
                      <span className="h-4" />
                    )}
                  </div>
                ))}
                
                {/* Blinking cursor */}
                {visibleLines >= terminalLines.length && (
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    <span className="w-2.5 h-5 bg-foreground animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max">
              <div className="px-4 py-1.5 rounded-full bg-foreground text-background text-xs font-bold tracking-wider uppercase shadow-sm whitespace-nowrap">
                Automatizamos Resultados
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

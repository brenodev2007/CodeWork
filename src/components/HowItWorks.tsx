import { MessageCircle, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Conversa Inicial',
    description: 'Entendemos seu objetivo e necessidades através de uma conversa rápida no WhatsApp.'
  },
  {
    icon: PenTool,
    title: 'Planejamento',
    description: 'Desenhamos a estrutura ideal, pensando na melhor experiência para o seu usuário.'
  },
  {
    icon: Code,
    title: 'Desenvolvimento',
    description: 'Construímos seu site utilizando as melhores tecnologias do mercado, garantindo rapidez e segurança.'
  },
  {
    icon: Rocket,
    title: 'Entrega Final',
    description: 'Seu site vai ao ar, otimizado para o Google, rápido e pronto para vender.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative border-y-2 border-border overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 pattern-grid opacity-10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-foreground/5 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border-2 border-border rounded-full bg-muted/30 mb-6">
            Processo
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            O Caminho <span className="text-gradient">Suave</span>
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Sem processos confusos. Transformamos sua ideia em realidade em{' '}
            <span className="font-bold text-foreground">4 passos simples.</span>
          </p>
        </div>

        <div className="relative">
          {/* Enhanced connecting line with gradient */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-1 -z-10">
            <div className="h-full bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent to-foreground/20 blur-sm" />
          </div>
          
          {/* Arrow decorations between steps */}
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="hidden md:block absolute top-16 text-muted-foreground/30"
              style={{ left: `${25 + i * 25}%`, transform: 'translateX(-50%)' }}
            >
              <ArrowRight className="w-6 h-6" />
            </div>
          ))}
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Card container */}
                <div className="relative w-full">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-foreground/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                  
                  {/* Main card */}
                  <div className="relative p-6 rounded-2xl border-2 border-border bg-gradient-to-br from-muted/40 to-background backdrop-blur-sm group-hover:border-foreground transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-background to-muted border-2 border-border group-hover:border-foreground rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <step.icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      
                      {/* Step number badge - enhanced */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-foreground text-background text-sm font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-background group-hover:scale-125 transition-transform duration-300 z-20">
                        <span className="relative z-10">{index + 1}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground to-muted-foreground rounded-full animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

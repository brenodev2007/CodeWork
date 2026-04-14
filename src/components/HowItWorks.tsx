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
    <section className="py-24 relative border-y border-border overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border border-border rounded-full bg-muted/30 mb-6">
            Processo
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-foreground font-extrabold">Como Funciona</span>
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Sem processos confusos. Transformamos sua ideia em realidade em{' '}
            <span className="font-bold text-foreground">4 passos simples.</span>
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[1px] -z-10">
            <div className="h-full bg-gradient-to-r from-transparent via-border to-transparent" />
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
                  {/* Main card */}
                  <div className="relative p-6 rounded-2xl border border-border bg-muted/20 hover:border-foreground/40 hover:shadow-md transition-all duration-300">
                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-background to-muted border border-border group-hover:border-foreground/60 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300">
                        <step.icon className="w-10 h-10 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      
                      {/* Step number badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-foreground text-background text-sm font-bold rounded-full flex items-center justify-center shadow-sm border-2 border-background z-20">
                        {index + 1}
                      </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
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

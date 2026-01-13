import { MessageCircle, PenTool, Code, Rocket } from 'lucide-react';

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
    <section className="py-20 bg-black/40 backdrop-blur-sm relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">O Caminho Suave</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sem processos confusos. Transformamos sua ideia em realidade em 4 passos simples.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-10" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="relative">
                  <div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 z-10">
                    <step.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-black text-sm font-bold rounded-full flex items-center justify-center shadow-lg border-2 border-black z-20">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

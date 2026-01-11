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
    description: 'Codificamos seu site utilizando React e Node, garantindo performance e segurança.'
  },
  {
    icon: Rocket,
    title: 'Entrega Final',
    description: 'Seu site vai ao ar, otimizado para o Google, rápido e pronto para vender.'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">O Caminho Suave</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sem processos confusos. Transformamos sua ideia em realidade em 4 passos simples.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-black group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-gray-700 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
                
                {/* Step Number Badge */}
                <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 w-6 h-6 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

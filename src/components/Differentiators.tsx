import { Zap, Smartphone, FileCode, Timer } from 'lucide-react';

export const Differentiators = () => {
  return (
    <section id="differentiators" className="py-24 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border border-border rounded-full bg-muted/30 mb-6">
                Diferenciais
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Por que escolher a{' '}
                <span className="text-foreground font-extrabold">Codework?</span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed border-l-4 border-foreground pl-6">
                Não entregamos apenas um site. Entregamos uma ferramenta de vendas poderosa para o seu negócio. 
                <span className="text-foreground font-semibold"> Nosso foco é o seu resultado.</span>
              </p>
            </div>
            
            <div className="space-y-6 pt-4">
              {[
                {
                  icon: Zap,
                  title: 'Carregamento Instantâneo',
                  desc: 'Sites ultra rápidos que não deixam seu cliente esperando.',
                },
                {
                  icon: Smartphone,
                  title: 'Design Responsivo',
                  desc: 'Experiência fluida e perfeita em celulares, tablets e desktops.',
                },
                {
                  icon: FileCode,
                  title: 'Segurança e Estabilidade',
                  desc: 'Site seguro e que não sai do ar, pronto para crescer com sua empresa.',
                },
                {
                  icon: Timer,
                  title: 'Velocidade na Entrega',
                  desc: 'Processo ágil e eficiente. Receba seu projeto em tempo recorde sem perder qualidade.',
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="relative flex gap-5 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-background border border-border group-hover:border-foreground/60 flex items-center justify-center transition-all duration-300 shadow-sm">
                        <item.icon className="w-7 h-7" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-base md:text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="relative z-10 p-10 rounded-3xl border border-border bg-muted/20">
                <div className="mb-8 pb-6 border-b border-border">
                   <h3 className="text-xl md:text-2xl font-bold mb-2">Nossa Abordagem</h3>
                   <p className="text-muted-foreground text-sm">
                     O que nos diferencia no mercado
                   </p>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-base mb-1">Código limpo e bem estruturado</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Seguimos as melhores práticas para garantir manutenção fácil e escalabilidade.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-base mb-1">Design pensado para conversão</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Cada elemento é estrategicamente posicionado para guiar o visitante à ação.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-base mb-1">Suporte e manutenção contínua</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Acompanhamos seu projeto após a entrega para garantir resultados duradouros.
                      </p>
                    </div>
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

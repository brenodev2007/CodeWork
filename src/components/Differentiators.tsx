import { Zap, Smartphone, FileCode, Timer } from 'lucide-react';

export const Differentiators = () => {
  return (
    <section id="differentiators" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Por que escolher a <span className="text-primary">Codework?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Não entregamos apenas código. Entregamos ativos digitais performáticos que impulsionam o seu negócio. Nosso foco é a excelência técnica.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: 'Velocidade de Carregamento (LCP)',
                  desc: 'Otimização avançada para pontuação máxima no Core Web Vitals do Google.'
                },
                {
                  icon: Smartphone,
                  title: 'Design Responsivo',
                  desc: 'Experiência fluida e perfeita em celulares, tablets e desktops.'
                },
                {
                  icon: FileCode,
                  title: 'Código Limpo e Escalável',
                  desc: 'Arquitetura de software pensada para fácil manutenção e crescimento futuro.'
                },
                {
                  icon: Timer,
                  title: 'Velocidade na Entrega',
                  desc: 'Processo ágil e eficiente. Receba seu projeto em tempo recorde sem perder qualidade.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mt-1 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="relative z-10 glass-card p-8 animate-fade-in-up">
                <div className="mb-8 border-b border-white/10 pb-4">
                   <h3 className="text-xl font-bold mb-2 text-white">Comparativo de Mercado</h3>
                   <p className="text-gray-500 text-sm">Benchmarks de Performance</p>
                </div>

                <div className="space-y-8">
              
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span className="text-gray-300">Performance (Google LCP)</span>
                         <span className="text-primary font-bold">10x mais rápido</span>
                      </div>
                      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                         <div className="absolute top-0 left-0 h-full bg-white/10 w-[30%] rounded-full blur-[1px]"></div>
                         <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-[95%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]" style={{ zIndex: 10 }}></div>
                      </div>
                   </div>
                 
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span className="text-gray-300">Otimização SEO</span>
                         <span className="text-primary font-bold">Estrutura Nativa</span>
                      </div>
                      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                         <div className="absolute top-0 left-0 h-full bg-white/10 w-[45%] rounded-full blur-[1px]"></div>
                         <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-[100%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]" style={{ zIndex: 10 }}></div>
                      </div>
                   </div>

                   {/* Metric 3 */}
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span className="text-gray-300">Manutenibilidade</span>
                         <span className="text-primary font-bold">Código Limpo</span>
                      </div>
                      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden border border-white/5">
                         <div className="absolute top-0 left-0 h-full bg-white/10 w-[40%] rounded-full blur-[1px]"></div>
                         <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-[90%] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)]" style={{ zIndex: 10 }}></div>
                      </div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-gray-500">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_5px_rgba(0,229,255,0.8)] animate-pulse"></div>
                      <span className="text-white">Codework</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                      <span>Concorrência</span>
                   </div>
                </div>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="absolute top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

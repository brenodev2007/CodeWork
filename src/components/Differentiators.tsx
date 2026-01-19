import { Zap, Smartphone, FileCode, Timer, TrendingUp, Award } from 'lucide-react';

export const Differentiators = () => {
  return (
    <section id="differentiators" className="py-24 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background -z-10" />
      <div className="absolute inset-0 pattern-dots opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border-2 border-border rounded-full bg-muted/30 mb-6">
                Diferenciais
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Por que escolher a{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Codework?</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-foreground" />
                </span>
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
                  stat: '10x'
                },
                {
                  icon: Smartphone,
                  title: 'Design Responsivo',
                  desc: 'Experiência fluida e perfeita em celulares, tablets e desktops.',
                  stat: '100%'
                },
                {
                  icon: FileCode,
                  title: 'Segurança e Estabilidade',
                  desc: 'Site seguro e que não sai do ar, pronto para crescer com sua empresa.',
                  stat: '99.9%'
                },
                {
                  icon: Timer,
                  title: 'Velocidade na Entrega',
                  desc: 'Processo ágil e eficiente. Receba seu projeto em tempo recorde sem perder qualidade.',
                  stat: 'Ágil'
                }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-foreground/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="relative flex gap-5 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-foreground/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                          <item.icon className="w-7 h-7" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg group-hover:text-gradient transition-all">
                          {item.title}
                        </h3>
                        <span className="text-xs font-bold px-3 py-1 bg-foreground text-background rounded-full">
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             {/* Decorative elements */}
             <div className="absolute -top-8 -right-8 w-20 h-20 border-t-4 border-r-4 border-border rounded-tr-3xl" />
             <div className="absolute -bottom-8 -left-8 w-20 h-20 border-b-4 border-l-4 border-border rounded-bl-3xl" />
             
             <div className="relative z-10 p-10 rounded-3xl border-2 border-border bg-gradient-to-br from-muted/40 to-background backdrop-blur-xl shadow-2xl">
                <div className="mb-10 pb-6 border-b-2 border-border">
                   <div className="flex items-center gap-3 mb-3">
                     <Award className="w-6 h-6" />
                     <h3 className="text-2xl font-bold">Comparativo de Mercado</h3>
                   </div>
                   <p className="text-muted-foreground text-sm flex items-center gap-2">
                     <TrendingUp className="w-4 h-4" />
                     Por que somos diferentes
                   </p>
                </div>

                <div className="space-y-10">
                   {[
                     { label: 'Velocidade', value: 95, badge: '10x mais rápido' },
                     { label: 'Otimização SEO', value: 100, badge: 'Otimizado' },
                     { label: 'Manutenibilidade', value: 90, badge: 'Seguro e Estável' }
                   ].map((metric, idx) => (
                     <div key={idx}>
                        <div className="flex justify-between items-center text-sm font-semibold mb-3">
                           <span className="text-muted-foreground">{metric.label}</span>
                           <span className="px-3 py-1 bg-foreground/10 rounded-full text-xs">
                             {metric.badge}
                           </span>
                        </div>
                        
                        <div className="relative h-5 bg-muted/50 rounded-full overflow-hidden border-2 border-border shadow-inner">
                           {/* Competitor bar */}
                           <div 
                             className="absolute top-0 left-0 h-full bg-muted-foreground/30 rounded-full transition-all duration-1000"
                             style={{ width: `${metric.value - 60}%` }}
                           />
                           
                           {/* Our bar with gradient */}
                           <div 
                             className="absolute top-0 left-0 h-full bg-gradient-to-r from-foreground via-muted-foreground to-foreground rounded-full shadow-lg transition-all duration-1000 delay-200"
                             style={{ width: `${metric.value}%` }}
                           >
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient" />
                           </div>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-10 pt-8 border-t-2 border-border flex justify-between items-center text-sm">
                   <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-foreground rounded-full shadow-lg" />
                      <span className="font-semibold">Codework</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-muted-foreground/30 rounded-full" />
                      <span className="text-muted-foreground">Concorrência</span>
                   </div>
                </div>
             </div>
             
             {/* Floating background elements */}
             <div className="absolute top-10 -right-10 w-52 h-52 bg-foreground/5 rounded-full filter blur-3xl animate-float" />
             <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-foreground/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

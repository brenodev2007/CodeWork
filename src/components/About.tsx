import { Target, Users, Zap, TrendingUp, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border border-border rounded-full bg-muted/30 mb-6">
                Sobre a Codework
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-tight">
                Não somos apenas desenvolvedores.{' '}
                <span className="text-foreground font-extrabold">Somos parceiros do seu sucesso.</span>
              </h2>
              
              <div className="space-y-6 border-l-4 border-foreground pl-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nascemos com um objetivo claro: eliminar a complexidade do desenvolvimento web e entregar produtos digitais que{' '}
                  <span className="text-foreground font-semibold">realmente funcionam e escalam.</span>
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enquanto o mercado oferece soluções lentas e complicadas, nós apostamos na{' '}
                  <span className="text-foreground font-semibold">simplicidade e eficiência</span>. Unimos design moderno com tecnologia rápida para o seu site vender mais.
                </p>
              </div>
            </div>
            
            {/* Benefits list */}
            <div className="space-y-4 pt-4">
              {[
                { icon: Zap, text: "Site rápido e otimizado" },
                { icon: Users, text: "Atendimento prático e sem tecniquês" },
                { icon: Target, text: "Entrega ágil com qualidade garantida" }
              ].map((item, index) => (
                <div key={index} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-muted/30 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-background border border-border group-hover:border-foreground/60 flex items-center justify-center transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="font-semibold text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

  
          <div className="relative space-y-8">
             {/* Team Images Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Image 1 */}
               <div className="group relative overflow-hidden rounded-2xl border border-border hover:border-foreground/50 transition-all duration-300">
                 <div className="aspect-[4/3] overflow-hidden">
                   <img 
                     src="/IMG_2341.JPG" 
                     alt="Equipe CodeWork colaborando em projeto"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
               </div>

               {/* Image 2 */}
               <div className="group relative overflow-hidden rounded-2xl border border-border hover:border-foreground/50 transition-all duration-300">
                 <div className="aspect-[4/3] overflow-hidden">
                   <img 
                     src="/IMG_2348.JPG" 
                     alt="Desenvolvimento de soluções web na CodeWork"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                   />
                 </div>
               </div>
             </div>

             {/* Statistics Card */}
             <div className="relative">
               <div className="relative p-10 md:p-12 rounded-3xl border border-border bg-muted/20">
           
                  <div className="space-y-10">
              
                     <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6" />
                          </div>
                          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
                            100+
                          </div>
                        </div>
                        <div className="font-bold text-xl mb-2">Projetos Entregues</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Impactando negócios em todo o Brasil com soluções sob medida.
                        </p>
                     </div>
                     
                   
                     <div className="relative h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
                     
                  
                     <div className="group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                            <Heart className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="font-bold text-xl mb-2">Clientes Satisfeitos</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Compromisso real com resultado e entrega dentro do prazo.
                        </p>
                     </div>
                  </div>
                  
                 
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

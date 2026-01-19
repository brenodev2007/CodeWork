import { CheckCircle2, Target, Users, Zap, TrendingUp } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-dots opacity-20 -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-2 border-2 border-border rounded-full bg-muted/30 mb-6">
                Sobre a Codework
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight leading-tight">
                Não somos apenas desenvolvedores.{' '}
                <span className="relative inline-block">
                  <span className="text-gradient">Somos parceiros do seu sucesso.</span>
                 
                </span>
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
                    <div className="relative">
                      <div className="absolute inset-0 bg-foreground/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <span className="font-semibold text-lg group-hover:text-gradient transition-all">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

  
          <div className="relative">

             <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-border rounded-tr-3xl opacity-50" />
             <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-border rounded-bl-3xl opacity-50" />
             
      
             <div className="relative p-10 md:p-12 rounded-3xl border-2 border-border bg-gradient-to-br from-muted/40 to-background backdrop-blur-xl shadow-2xl">
         
                <div className="space-y-10">
            
                   <div className="group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
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
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                          98%
                        </div>
                      </div>
                      <div className="font-bold text-xl mb-2">Satisfação dos Clientes</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Compromisso real com o resultado e sucesso do seu negócio.
                      </p>
                   </div>
                </div>
                
               
             </div>
             
             
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-foreground/5 rounded-full opacity-30 blur-[100px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

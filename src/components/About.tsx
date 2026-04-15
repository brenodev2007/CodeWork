import { ArrowUpRight } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section label */}
        {/* Section title */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase ">
            Sobre a Codework
          </h2>
          <div className="w-24 h-1.5 bg-foreground mx-auto rounded-full" />
        </div>

        {/* ===== 2×2 Quadrant Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border">
          
          {/* Q1 — Top Left: Text */}
          <div className="relative flex flex-col justify-center p-10 md:p-14 lg:p-16 bg-foreground text-primary-foreground min-h-[340px] md:min-h-[400px]">
            {/* Decorative corner accent */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary-foreground/30" />
            <div className="absolute bottom-6 right-6 opacity-10">
              <ArrowUpRight className="w-16 h-16" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Não somos <br className="hidden sm:block" />
              apenas <br className="hidden sm:block" />
              desenvolvedores<span className="text-primary-foreground/50">.</span>
            </h2>
            
            <div className="mt-8 space-y-4 border-l-2 border-primary-foreground/30 pl-5">
              <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed">
                Nascemos com um objetivo claro: eliminar a complexidade do desenvolvimento web e entregar produtos digitais que{' '}
                <span className="text-primary-foreground font-semibold">realmente funcionam e escalam.</span>
              </p>
            </div>
          </div>

          {/* Q2 — Top Right: Image 1 */}
          <div className="group relative overflow-hidden min-h-[340px] md:min-h-[400px]">
            <img 
              src="/IMG_2341.JPG" 
              alt="Equipe CodeWork colaborando em projeto"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Q3 — Bottom Left: Image 2 */}
          <div className="group relative overflow-hidden min-h-[340px] md:min-h-[400px] order-4 md:order-3">
            <img 
              src="/IMG_2348.JPG" 
              alt="Desenvolvimento de soluções web na CodeWork"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Q4 — Bottom Right: Text */}
          <div className="relative flex flex-col justify-center p-10 md:p-14 lg:p-16 bg-muted/30 min-h-[340px] md:min-h-[400px] order-3 md:order-4">
            {/* Decorative corner accent */}
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-foreground/20" />
            <div className="absolute top-6 left-6 opacity-5">
              <ArrowUpRight className="w-16 h-16 rotate-180" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Somos parceiros <br className="hidden sm:block" />
              do seu <br className="hidden sm:block" />
              sucesso<span className="text-foreground/40">.</span>
            </h2>

            <div className="mt-8 space-y-4 border-l-2 border-foreground/20 pl-5">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Enquanto o mercado oferece soluções lentas e complicadas, nós apostamos na{' '}
                <span className="text-foreground font-semibold">simplicidade e eficiência</span>. Unimos design moderno com tecnologia rápida para o seu site vender mais.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white container-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4 block">
              Sobre a Codework
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-gray-900">
              Não somos apenas desenvolvedores. Somos parceiros de <span className="text-gray-400">crescimento.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nascemos com um objetivo claro: eliminar a complexidade do desenvolvimento web e entregar produtos digitais que realmente funcionam.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Enquanto o mercado oferece soluções lentas e genéricas, nós apostamos em engenharia de ponta. Unimos design minimalista com a performance bruta do React e Node.js para criar sites que convertem visitantes em clientes.
            </p>
            
            <div className="space-y-4">
              {[
                "Foco total em performance e SEO",
                "Atendimento prático e sem tecniquês",
                "Entrega ágil com qualidade garantida"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual/Stats */}
          <div className="relative">
             <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
                <div className="grid grid-cols-1 gap-12">
                   <div>
                      <div className="text-4xl md:text-6xl font-bold text-black mb-2">100+</div>
                      <div className="text-gray-500 font-medium">Projetos Entregues</div>
                      <p className="text-sm text-gray-400 mt-2">Impactando negócios em todo o Brasil.</p>
                   </div>
                   <div className="w-full h-px bg-gray-200"></div>
                   <div>
                      <div className="text-4xl md:text-6xl font-bold text-black mb-2">98%</div>
                      <div className="text-gray-500 font-medium">Satisfação dos Clientes</div>
                      <p className="text-sm text-gray-400 mt-2">Compromisso real com o resultado.</p>
                   </div>
                </div>
             </div>
             {/* Abstract Decor */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-50 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

import { Zap, Smartphone, FileCode } from 'lucide-react';

export const Differentiators = () => {
  return (
    <section id="differentiators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Por que escolher a <span className="text-gray-500">Codework?</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
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
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mt-1">
                    <item.icon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-2xl bg-white border border-gray-100 shadow-2xl p-8 flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                <div className="text-center z-10">
                   <div className="text-6xl font-bold mb-2">100<span className="text-green-500 text-4xl">%</span></div>
                   <p className="text-gray-500 font-medium">Performance Score</p>
                   <div className="w-full h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
                     <div className="h-full bg-green-500 w-full animate-pulse"></div>
                   </div>
                </div>
             </div>
             {/* Decorative elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-black rounded-xl -z-10 opacity-10 rotate-12"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-full -z-10 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

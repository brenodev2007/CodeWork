import { Zap, Smartphone, FileCode, Timer } from 'lucide-react';

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
                },
                {
                  icon: Timer,
                  title: 'Velocidade na Entrega',
                  desc: 'Processo ágil e eficiente. Receba seu projeto em tempo recorde sem perder qualidade.'
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
             <div className="relative z-10 bg-white border border-gray-200 rounded-3xl shadow-2xl p-8 animate-fade-in-up">
                <div className="mb-8">
                   <h3 className="text-xl font-bold mb-2">Comparativo de Mercado</h3>
                   <p className="text-gray-500 text-sm">Veja por que somos a escolha técnica superior.</p>
                </div>

                <div className="space-y-8">
              
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span>Performance (Google LCP)</span>
                         <span className="text-green-600 font-bold">10x mais rápido</span>
                      </div>
                      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                       
                         <div className="absolute top-0 left-0 h-full bg-gray-300 w-[30%] rounded-full"></div>
                      
                         <div className="absolute top-0 left-0 h-full bg-black w-[95%] rounded-full shadow-lg" style={{ zIndex: 10 }}></div>

                      </div>
                   </div>

                 
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span>Otimização SEO</span>
                         <span className="text-green-600 font-bold">Estrutura Nativa</span>
                      </div>
                      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                         <div className="absolute top-0 left-0 h-full bg-gray-300 w-[45%] rounded-full"></div>
                         <div className="absolute top-0 left-0 h-full bg-black w-[100%] rounded-full shadow-lg" style={{ zIndex: 10 }}></div>
                      </div>
                   </div>

                   {/* Metric 3 */}
                   <div>
                      <div className="flex justify-between text-sm font-medium mb-2">
                         <span>Manutenibilidade</span>
                         <span className="text-green-600 font-bold">Código Limpo</span>
                      </div>
                      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                         <div className="absolute top-0 left-0 h-full bg-gray-300 w-[40%] rounded-full"></div>
                         <div className="absolute top-0 left-0 h-full bg-black w-[90%] rounded-full shadow-lg" style={{ zIndex: 10 }}></div>
                      </div>
                   </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span>Codework</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span>Concorrência Comum</span>
                   </div>
                </div>
             </div>
             
             {/* Decorative Background Elements */}
             <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Layout, Globe, Search } from 'lucide-react';

const services = [
  {
    title: 'Landing Pages de Alta Conversão',
    description: 'Páginas projetadas psicologicamente para transformar visitantes em clientes, com design limpo e chamadas para ação estratégicas.',
    icon: Layout,
  },
  {
    title: 'Aplicações Web com React & Node',
    description: 'Sistemas robustos e escaláveis. Dashboards, CRMs e plataformas completas desenvolvidas com a stack mais moderna do mercado.',
    icon: Globe,
  },
  {
    title: 'Sites Otimizados para Google',
    description: 'Estrutura técnica impecável para SEO. Garanta que seu site seja encontrado e carregue instantaneamente em qualquer dispositivo.',
    icon: Search,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Soluções Sob Medida</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Combinamos design premium com código de alta performance para entregar resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

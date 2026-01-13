import { Layout, Globe, Search } from 'lucide-react';

const services = [
  {
    title: 'Sites Focados em Vendas',
    description: 'Páginas criadas estrategicamente para transformar visitantes em clientes, com design atraente e botões que chamam atenção.',
    icon: Layout,
  },
  {
    title: 'Sistemas Personalizados',
    description: 'Painéis administrativos, sistemas de gestão e plataformas completas feitas sob medida para as necessidades do seu negócio.',
    icon: Globe,
  },
  {
    title: 'Apareça no Google',
    description: 'Seu site otimizado para ser encontrado facilmente nas pesquisas e carregar instantaneamente no celular do seu cliente.',
    icon: Search,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Soluções Sob Medida</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Design premium e funcionamento perfeito para entregar resultados reais para sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group glass-card p-8 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                <service.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

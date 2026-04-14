import { Layout, Globe, Search } from 'lucide-react';

const services = [
  {
    title: 'Sites Focados em Vendas',
    description: 'Páginas criadas estrategicamente para transformar visitantes em clientes, com design atraente e botões que chamam atenção.',
    icon: Layout,
    badge: 'Conversão'
  },
  {
    title: 'Sistemas Personalizados',
    description: 'Painéis administrativos, sistemas de gestão e plataformas completas feitas sob medida para as necessidades do seu negócio.',
    icon: Globe,
    badge: 'Sob Medida'
  },
  {
    title: 'Apareça no Google',
    description: 'Seu site otimizado para ser encontrado facilmente nas pesquisas e carregar instantaneamente no celular do seu cliente.',
    icon: Search,
    badge: 'SEO'
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border border-border rounded-full bg-muted/30">
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Soluções{' '}
            <span className="text-foreground font-extrabold">Sob Medida</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Design premium e funcionamento perfeito para entregar{' '}
            <span className="text-foreground font-semibold">resultados reais</span> para sua empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 rounded-2xl border border-border bg-muted/20 hover:border-foreground/40 hover:shadow-md transition-all duration-300">
                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-foreground text-background rounded-full shadow-sm">
                    {service.badge}
                  </span>
                </div>
                
                {/* Icon container */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-background border border-border group-hover:border-foreground/60 flex items-center justify-center shadow-sm transition-all duration-300">
                    <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

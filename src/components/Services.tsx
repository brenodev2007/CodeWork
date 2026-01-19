import { Layout, Globe, Search, Sparkles } from 'lucide-react';

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
      {/* Background elements */}
      <div className="absolute inset-0 pattern-dots opacity-20 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-foreground/5 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border-2 border-border rounded-full bg-muted/30 backdrop-blur-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Soluções{' '}
            <span className="text-gradient">Sob Medida</span>
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
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-foreground/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
              
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 rounded-2xl border-2 border-border bg-gradient-to-br from-muted/40 to-background backdrop-blur-sm group-hover:border-foreground transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                {/* Badge */}
                <div className="absolute -top-3 -right-3">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-foreground text-background rounded-full shadow-lg">
                    {service.badge}
                  </span>
                </div>
                
                {/* Icon container */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-background border-2 border-border group-hover:border-foreground flex items-center justify-center shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

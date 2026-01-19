
const projects = [
  {
    title: 'E-commerce Futuro',
    category: 'Full Stack',
    image: '/projects/ecommerce-dashboard.png',
    description: 'Plataforma de vendas com dashboard em tempo real e integração AI.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Sistemas de Gestão',
    category: 'Dashboard',
    image: '/projects/crm-dashboard.png',
    description: 'CRM completo para gestão de leads e automação de marketing.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    title: 'App Financeiro',
    category: 'Mobile First',
    image: '/projects/fintech-app.png',
    description: 'Interface bancária moderna com gráficos interativos e segurança total.',
    tech: ['React Native', 'TypeScript', 'Redis'],
  },
  {
    title: 'Site Institucional',
    category: 'Presença Digital',
    image: '/projects/corporate-site.png',
    description: 'Apresente sua empresa com profissionalismo. Design corporativo focado em fortalecer sua marca.',
    tech: ['Identidade Visual', 'SEO Otimizado', 'Mobile'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid opacity-20 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-28">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border-2 border-border rounded-full bg-muted/30 backdrop-blur-sm">
              Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            Projetos que{' '}
            <span className="relative inline-block">
              <span className="text-gradient">Definem o Futuro</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent" />
            </span>
          </h2>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Uma seleção de trabalhos onde a tecnologia atende ao design de alta performance.
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-40">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center group relative`}
            >
              {/* Decorative number */}
              <div className={`absolute -top-12 ${index % 2 === 0 ? 'left-0' : 'right-0'} text-9xl font-bold text-muted/10 select-none hidden lg:block`}>
                0{index + 1}
              </div>
              
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                
                {/* Image border decoration */}
                <div className="absolute -inset-4 border-2 border-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-[2px] bg-foreground" />
                  <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold leading-tight group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-border pl-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-sm font-semibold px-4 py-2 rounded-full border-2 border-border bg-muted/30 hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

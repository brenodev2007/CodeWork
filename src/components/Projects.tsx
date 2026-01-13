

const projects = [
  {
    title: 'E-commerce Futuro',
    category: 'Full Stack',
    image: '/projects/ecommerce-dashboard.png', // Tech image
    description: 'Plataforma de vendas com dashboard em tempo real e integração AI.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Sistemas de Gestão',
    category: 'Dashboard',
    image: '/projects/crm-dashboard.png', // Dashboard image
    description: 'CRM completo para gestão de leads e automação de marketing.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    title: 'App Financeiro',
    category: 'Mobile First',
    image: '/projects/fintech-app.png', // Code image
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block animate-pulse">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Projetos que <span className="text-primary">Definem o Futuro</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção de trabalhos onde a tecnologia atende ao design de alta performance.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-3">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-sm font-medium text-gray-400 px-3 py-1 rounded-full border border-white/10 bg-white/5">
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

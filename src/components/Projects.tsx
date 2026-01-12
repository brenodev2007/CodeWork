import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Futuro',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800', // Tech image
    description: 'Plataforma de vendas com dashboard em tempo real e integração AI.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Sistemas de Gestão',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', // Dashboard image
    description: 'CRM completo para gestão de leads e automação de marketing.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    title: 'App Financeiro',
    category: 'Mobile First',
    image: 'https://images.unsplash.com/photo-1555617914-6868e8cb8d3b?auto=format&fit=crop&q=80&w=800', // Code image
    description: 'Interface bancária moderna com gráficos interativos e segurança total.',
    tech: ['React Native', 'TypeScript', 'Redis'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block animate-pulse">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Projetos que <span className="text-primary">Definem o Futuro</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção de trabalhos onde a tecnologia atende ao design de alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-10 transition-opacity duration-300 group-hover:opacity-90"/>
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-1 rounded bg-white/10 text-white backdrop-blur-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                 <button className="p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-black transition-colors backdrop-blur-md">
                    <ExternalLink size={18} />
                 </button>
                 <button className="p-2 rounded-full bg-black/50 text-white hover:bg-secondary hover:text-black transition-colors backdrop-blur-md">
                    <Github size={18} />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

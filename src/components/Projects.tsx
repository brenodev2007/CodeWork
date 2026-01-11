import { ArrowUpRight, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Felix Cell',
    category: 'Landing Page',
    description: 'Página de alta conversão para assistência técnica de celulares, focada em fidelização e orçamentos rápidos.',
    color: 'bg-blue-50',
    link: '#' // Placeholder
  },
  {
    title: 'Estoka',
    category: 'Aplicação Web (SaaS)',
    description: 'CRM completo para controle de estoque integrado ao e-commerce, com dashboard de vendas e gestão de produtos.',
    color: 'bg-orange-50',
    link: '#'
  },
  {
    title: 'Omega Tour',
    category: 'Site Institucional',
    description: 'Plataforma para aluguel de vans e turismo, com sistema de agendamento e apresentação de frota.',
    color: 'bg-indigo-50',
    link: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Projetos Recentes</h2>
            <p className="text-gray-500 max-w-xl">
              Confira alguns dos trabalhos que desenvolvemos com foco em estética e funcionalidade.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">
            Ver todos os projetos <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300">
              <div className={`h-48 ${project.color} flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500`}>
                  {/* Placeholder for project image/logo */}
                  <span className="text-2xl font-bold opacity-30 tracking-widest uppercase">{project.title}</span>
              </div>
              <div className="p-8">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="w-full h-px bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">
            Ver todos os projetos <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};


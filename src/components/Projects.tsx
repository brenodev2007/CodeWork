import { Globe, Bug, Palette, Code } from 'lucide-react';

const projects = [
  {
    title: 'Criação de Sites Profissionais',
    category: 'Desenvolvimento Web',
    icon: Globe,
    image: '/projects/corporate-site.png',
    description: 'Sites institucionais, landing pages e lojas virtuais criados do zero. Design moderno, responsivo e otimizado para converter visitantes em clientes.',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    highlights: ['Design Responsivo', 'SEO Otimizado', 'Alta Performance'],
  },
  {
    title: 'Sistemas Web Sob Medida',
    category: 'Soluções Web',
    icon: Code,
    image: '/projects/crm-dashboard.png',
    description: 'Painéis administrativos, dashboards, CRMs e plataformas completas feitas sob medida para automatizar e escalar as operações do seu negócio.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL'],
    highlights: ['Automação', 'Integração de APIs', 'Escalável'],
  },
  {
    title: 'Correção de Bugs e Manutenção',
    category: 'Suporte Técnico',
    icon: Bug,
    image: '/projects/fintech-app.png',
    description: 'Seu site com problemas? Corrigimos erros, melhoramos a velocidade e garantimos que tudo funcione perfeitamente em qualquer dispositivo.',
    tech: ['Debug', 'Performance', 'Segurança'],
    highlights: ['Diagnóstico Rápido', 'Correção Eficiente', 'Monitoramento'],
  },
  {
    title: 'Posicionamento de Marca',
    category: 'Branding Digital',
    icon: Palette,
    image: '/projects/ecommerce-dashboard.png',
    description: 'Construímos a presença digital da sua marca com identidade visual consistente, estratégia de conteúdo e posicionamento que transmite autoridade e confiança.',
    tech: ['Identidade Visual', 'Estratégia Digital', 'SEO'],
    highlights: ['Branding Completo', 'Presença Online', 'Autoridade'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border border-border rounded-full bg-muted/30">
              O que fazemos
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
            Nossos <span className="font-extrabold">Projetos</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Criamos soluções web completas — do site à marca — para empresas que querem{' '}
            <span className="text-foreground font-semibold">resultados reais na internet.</span>
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center group relative`}
            >
              {/* Decorative number */}
              <div className={`absolute -top-10 ${index % 2 === 0 ? 'left-0' : 'right-0'} text-8xl lg:text-9xl font-bold text-muted/10 select-none hidden lg:block`}>
                0{index + 1}
              </div>
              
              {/* Image Section */}
              <div className="w-full md:w-3/5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:border-foreground/40">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-background/90 border border-border flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[2px] bg-foreground" />
                  <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed border-l-2 border-border pl-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.highlights.map((h, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground text-background"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-sm font-medium px-4 py-2 rounded-full border border-border bg-muted/30 cursor-default"
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

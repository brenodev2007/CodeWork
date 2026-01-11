import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent -z-10 rounded-[100%] opacity-70 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-6 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Disponível para novos projetos</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 max-w-4xl mx-auto leading-tight">
          Desenvolvemos sua próxima <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-500">grande ideia na web</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Especialistas em React, Node e Tailwind. Criamos experiências digitais rápidas, modernas e focadas em conversão.
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-5 bg-black text-white hover:bg-gray-800 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Quero meu orçamento gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-5 bg-white text-black border border-gray-200 hover:border-gray-400 rounded-full font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Ver portfolio
            </a>
          </div>
          
          <p className="text-sm text-gray-500 font-medium flex items-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Disponibilidade para apenas 2 novos projetos este mês. Garanta sua vaga.
          </p>
        </div>

        <div className="mt-8">
           <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Tecnologias que dominamos</p>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {/* React Logo */}
              <div className="flex items-center gap-3 group cursor-default hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#087ea4] fill-current animate-[spin_10s_linear_infinite]">
                      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                      <g stroke="currentColor" strokeWidth="1" fill="none">
                        <ellipse rx="10" ry="4.5"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                      </g>
                    </svg>
                 </div>
                 <span className="font-bold text-xl text-gray-700 group-hover:text-[#087ea4] transition-colors">React</span>
              </div>
              
              {/* Node.js Logo */}
              <div className="flex items-center gap-3 group cursor-default hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#539e43] fill-current">
                       <path d="M128 0l34.8 19.9v20.1l-34.8 19.9L93.2 40V19.9L128 0zM93.2 79.9l34.8 20.1v20.1l-34.8-20.1V79.9zm69.6 0L128 59.9V40l34.8 19.9v20zM61.9 44.2L28.1 63.8v39.1L61.9 123l33.8-19.6V63.8L61.9 44.2z m132.8 0l-33.8 20.1v39.1l33.8 19.6 33.8-20.1V63.8l-33.8-19.6zM28.1 153.1l33.8 19.6v39.1L28.1 192.3 0 176v-42l28.1 19.1z m199.8 0l28.1-19.1v42l-28.1 16.3-33.8-19.6v-39.1l33.8 19.5z m-99.9 14.5l33.8 19.6v39.1l-33.8 19.6-33.8-19.6v-39.1l33.8-19.6z" />
                    </svg>
                 </div>
                 <span className="font-bold text-xl text-gray-700 group-hover:text-[#539e43] transition-colors">Node.js</span>
              </div>
              
              {/* Tailwind Logo */}
              <div className="flex items-center gap-3 group cursor-default hover:opacity-100 transition-opacity">
                 <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 54 33" className="w-full h-full text-[#38bdf8] fill-current">
                      <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C32.256 19.31 29.192 16.2 22.5 16.2H13.5z"></path>
                    </svg>
                 </div>
                 <span className="font-bold text-xl text-gray-700 group-hover:text-[#38bdf8] transition-colors">Tailwind</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

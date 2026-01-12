import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quanto tempo demora para ficar pronto?',
    answer: 'Para Landing Pages, entregamos a primeira versão em até 7 dias úteis após o recebimento de todo o material. Projetos mais complexos podem variar, mas sempre prezamos pela agilidade.'
  },
  {
    question: 'O site funciona bem no celular (mobile)?',
    answer: 'Sim, 100%. Adotamos a abordagem "Mobile First". Seu site será perfeitamente responsivo, garantindo uma experiência incrível em iPhone, Android, Tablets e Desktops.'
  },
  {
    question: 'Vocês dão suporte após a entrega?',
    answer: 'Com certeza. Oferecemos um período de garantia para correções e também planos de manutenção para manter seu site sempre atualizado e seguro.'
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Para o desenvolvimento do site, o pagamento é único (ou parcelado). Você só terá custos recorrentes com a hospedagem e domínio, que são valores baixos e pagos diretamente aos provedores.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">Dúvidas Frequentes</h2>
          <p className="text-gray-400">
            Tire suas dúvidas antes de fechar negócio. Transparência total.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? 'bg-white/10 border-primary/50 shadow-lg' 
                : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

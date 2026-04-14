import { Plus, Minus, MessageCircle } from 'lucide-react';
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
  const whatsappLink = "https://wa.me/5511940512636?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Codework%20e%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas.";

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border border-border rounded-full bg-muted/30 flex items-center gap-2 mx-auto w-fit">
              FAQ
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Dúvidas <span className="text-foreground font-extrabold">Frequentes</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas antes de fechar negócio.{' '}
            <span className="text-foreground font-semibold">Transparência total.</span>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* FAQ Card */}
              <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? 'bg-muted/30 border-foreground/40 shadow-md' 
                : 'bg-muted/20 border-border hover:border-muted-foreground hover:bg-muted/30'
              }`}>
                <button
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none group/button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                      ? 'bg-foreground text-background' 
                      : 'bg-muted border border-border group-hover/button:border-foreground'
                    }`}>
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    
                    <span className={`text-base md:text-lg lg:text-xl font-bold transition-all ${
                      openIndex === index ? 'text-foreground' : 'text-foreground/80 group-hover/button:text-foreground'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                    ? 'bg-foreground text-background rotate-180' 
                    : 'bg-muted border border-border group-hover/button:border-foreground'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {/* Answer */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="pl-14 pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative mt-16">
          <div className="relative p-8 lg:p-10 rounded-2xl border border-border bg-muted/20 text-center hover:border-foreground/40 hover:shadow-md transition-all duration-300">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-foreground" />
            
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Não encontrou sua resposta?
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Fale diretamente conosco no WhatsApp. Estamos prontos para ajudar!
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

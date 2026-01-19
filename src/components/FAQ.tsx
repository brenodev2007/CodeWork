import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
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
      {/* Background elements */}
      <div className="absolute inset-0 pattern-dots opacity-20 -z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="font-bold uppercase tracking-widest text-sm px-6 py-2 border-2 border-border rounded-full bg-muted/30 backdrop-blur-sm flex items-center gap-2 mx-auto w-fit">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Dúvidas <span className="text-gradient">Frequentes</span>
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
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-foreground/5 blur-xl rounded-2xl opacity-0 transition-opacity duration-500 -z-10 ${
                openIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
              }`} />
              
              {/* FAQ Card */}
              <div className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                openIndex === index 
                ? 'bg-gradient-to-br from-muted/50 to-background border-foreground shadow-2xl' 
                : 'bg-muted/20 border-border hover:border-muted-foreground hover:bg-muted/30'
              }`}>
                <button
                  className="w-full flex items-center justify-between p-6 lg:p-8 text-left focus:outline-none group/button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                      ? 'bg-foreground text-background scale-110' 
                      : 'bg-muted border-2 border-border group-hover/button:border-foreground'
                    }`}>
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    
                    <span className={`text-lg lg:text-xl font-bold transition-all ${
                      openIndex === index ? 'text-foreground' : 'text-foreground/80 group-hover/button:text-foreground'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                    ? 'bg-foreground text-background rotate-180' 
                    : 'bg-muted border-2 border-border group-hover/button:border-foreground'
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
                    <div className="pl-14 pt-4 border-t-2 border-border">
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
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
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 via-transparent to-foreground/10 blur-2xl rounded-3xl -z-10" />
          
          <div className="relative p-8 lg:p-10 rounded-2xl border-2 border-border bg-gradient-to-br from-muted/40 to-background backdrop-blur-sm text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-foreground" />
            
            <h3 className="text-2xl font-bold mb-3">
              Não encontrou sua resposta?
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Fale diretamente conosco no WhatsApp. Estamos prontos para ajudar!
            </p>
            
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
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

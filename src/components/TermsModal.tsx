import { X } from 'lucide-react';
import { useEffect } from 'react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background border-t sm:border border-border sm:rounded-2xl w-full sm:max-w-4xl h-[95vh] sm:h-auto sm:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col rounded-t-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between z-10 flex-shrink-0">
          <h2 className="text-lg sm:text-2xl font-bold pr-2">Termos e Condições de Uso</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] min-h-[36px] rounded-full bg-muted hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center border border-border flex-shrink-0"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6 text-muted-foreground text-sm sm:text-base overscroll-contain">
          <p className="text-xs sm:text-sm text-muted-foreground">
            <strong>Última atualização:</strong> 19 de Janeiro de 2026
          </p>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">1. Aceitação dos Termos</h3>
            <p className="leading-relaxed">
              Ao aceder e utilizar o sítio web CodeWork, o Utilizador aceita cumprir estes Termos de Uso
              e todas as leis e regulamentos aplicáveis. Se não concordar com algum destes termos, está
              proibido de usar ou aceder a este site.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">2. Licença de Uso</h3>
            <p className="leading-relaxed mb-2 sm:mb-3">
              É concedida permissão para descarregar temporariamente uma cópia dos materiais
              (informação ou software) no site apenas para visualização transitória pessoal e não
              comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta
              licença o Utilizador não pode:
            </p>
            <ul className="list-disc list-outside space-y-1.5 sm:space-y-2 ml-5 sm:ml-6">
              <li>Modificar ou copiar os materiais;</li>
              <li>Utilizar os materiais para qualquer finalidade comercial ou exibição pública;</li>
              <li>Tentar descompilar ou realizar engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos de autor ou outras notações de propriedade dos materiais.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">3. Isenção de Responsabilidade</h3>
            <p className="leading-relaxed mb-2 sm:mb-3">
              Os materiais no sítio da CodeWork são fornecidos "como estão". Não oferecemos garantias,
              expressas ou implícitas, e por este meio isentamo-nos de todas as outras garantias,
              incluindo, sem limitação, garantias implícitas de comercialização ou adequação a um fim
              específico.
            </p>
            <p className="leading-relaxed">
              Além disso, não garantimos a precisão ou fiabilidade do uso dos materiais no site ou de
              outra forma relacionado com tais materiais ou em sites ligados a este.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">4. Limitações</h3>
            <p className="leading-relaxed">
              Em caso algum a CodeWork ou os seus fornecedores serão responsáveis por quaisquer
              danos (incluindo, sem limitação, danos por perda de dados ou lucros, ou devido a
              interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais,
              mesmo que tenhamos sido notificados da possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">5. Precisão dos Materiais</h3>
            <p className="leading-relaxed">
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não
              garantimos que qualquer material no site seja preciso, completo ou atual. Podemos fazer
              alterações nos materiais a qualquer momento sem aviso prévio.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">6. Lei Aplicável</h3>
            <p className="leading-relaxed">
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil
              (respeitando a LGPD e o Marco Civil da Internet) e o Utilizador submete-se
              irrevogavelmente à jurisdição exclusiva dos tribunais da comarca de Santo André - São
              Paulo.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t border-border px-4 sm:px-6 py-3 sm:py-4 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-foreground text-background rounded-lg font-semibold hover:bg-background hover:text-foreground border border-foreground transition-all duration-300 text-sm sm:text-base"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

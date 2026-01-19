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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative bg-background border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold">Termos e Condições de Uso</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted hover:bg-foreground hover:text-background transition-all duration-300 flex items-center justify-center border border-border"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6 space-y-6 text-muted-foreground">
          <p className="text-sm text-muted-foreground">
            <strong>Última atualização:</strong> 19 de Janeiro de 2026
          </p>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">1. Aceitação dos Termos</h3>
            <p className="leading-relaxed">
              Ao aceder e utilizar o sítio web CodeWork, o Utilizador aceita cumprir estes Termos de Uso
              e todas as leis e regulamentos aplicáveis. Se não concordar com algum destes termos, está
              proibido de usar ou aceder a este site.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">2. Licença de Uso</h3>
            <p className="leading-relaxed mb-3">
              É concedida permissão para descarregar temporariamente uma cópia dos materiais
              (informação ou software) no site apenas para visualização transitória pessoal e não
              comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta
              licença o Utilizador não pode:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modificar ou copiar os materiais;</li>
              <li>Utilizar os materiais para qualquer finalidade comercial ou exibição pública;</li>
              <li>Tentar descompilar ou realizar engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos de autor ou outras notações de propriedade dos materiais.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">3. Isenção de Responsabilidade</h3>
            <p className="leading-relaxed mb-3">
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
            <h3 className="text-xl font-bold text-foreground mb-3">4. Limitações</h3>
            <p className="leading-relaxed">
              Em caso algum a CodeWork ou os seus fornecedores serão responsáveis por quaisquer
              danos (incluindo, sem limitação, danos por perda de dados ou lucros, ou devido a
              interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais,
              mesmo que tenhamos sido notificados da possibilidade de tais danos.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">5. Precisão dos Materiais</h3>
            <p className="leading-relaxed">
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. Não
              garantimos que qualquer material no site seja preciso, completo ou atual. Podemos fazer
              alterações nos materiais a qualquer momento sem aviso prévio.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-foreground mb-3">6. Lei Aplicável</h3>
            <p className="leading-relaxed">
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil
              (respeitando a LGPD e o Marco Civil da Internet) e o Utilizador submete-se
              irrevogavelmente à jurisdição exclusiva dos tribunais da comarca de Santo André - São
              Paulo.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-foreground text-background rounded-full font-semibold hover:bg-background hover:text-foreground border border-foreground transition-all duration-300"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

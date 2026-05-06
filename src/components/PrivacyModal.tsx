import { X } from 'lucide-react';
import { useEffect } from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
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
          <h2 className="text-lg sm:text-2xl font-bold pr-2">Política de Privacidade</h2>
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
            <strong>Última atualização:</strong> 06 de Maio de 2026
          </p>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">1. Introdução</h3>
            <p className="leading-relaxed">
              A CodeWork Development ("nós", "nosso" ou "empresa") está comprometida em proteger a
              privacidade e os dados pessoais dos visitantes do nosso site. Esta Política de Privacidade
              descreve como coletamos, utilizamos, armazenamos e protegemos as suas informações pessoais
              em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">2. Dados que Coletamos</h3>
            <p className="leading-relaxed mb-2 sm:mb-3">
              Podemos coletar os seguintes tipos de dados pessoais:
            </p>
            <ul className="list-disc list-outside space-y-1.5 sm:space-y-2 ml-5 sm:ml-6">
              <li><strong>Dados de identificação:</strong> nome, e-mail e telefone, fornecidos voluntariamente por meio de formulários de contato ou solicitação de orçamento;</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e dados de cookies;</li>
              <li><strong>Dados de comunicação:</strong> mensagens enviadas por WhatsApp, e-mail ou outros canais de contato disponíveis no site.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">3. Finalidade do Tratamento</h3>
            <p className="leading-relaxed mb-2 sm:mb-3">
              Utilizamos os dados coletados para as seguintes finalidades:
            </p>
            <ul className="list-disc list-outside space-y-1.5 sm:space-y-2 ml-5 sm:ml-6">
              <li>Responder a solicitações de contato e orçamento;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Enviar comunicações comerciais, mediante consentimento prévio;</li>
              <li>Garantir a segurança e o funcionamento adequado do site;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">4. Compartilhamento de Dados</h3>
            <p className="leading-relaxed">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
              comerciais. Seus dados poderão ser compartilhados apenas nas seguintes situações:
              com prestadores de serviços essenciais (como hospedagem web e ferramentas de analytics),
              sob exigência de obrigação legal ou ordem judicial, ou para proteger os direitos e a
              segurança da CodeWork e de seus usuários.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">5. Cookies</h3>
            <p className="leading-relaxed">
              Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do
              usuário, analisar o tráfego e personalizar conteúdo. Você pode configurar seu navegador
              para recusar cookies, porém isso pode afetar a funcionalidade de algumas áreas do site.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">6. Segurança dos Dados</h3>
            <p className="leading-relaxed">
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais
              contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum
              método de transmissão pela internet ou de armazenamento eletrônico é 100% seguro, e não
              podemos garantir segurança absoluta.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">7. Seus Direitos (LGPD)</h3>
            <p className="leading-relaxed mb-2 sm:mb-3">
              De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc list-outside space-y-1.5 sm:space-y-2 ml-5 sm:ml-6">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados;</li>
              <li>Eliminação dos dados pessoais tratados com consentimento;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p className="leading-relaxed mt-2 sm:mt-3">
              Para exercer seus direitos, entre em contato conosco pelo e-mail:{' '}
              <a href="mailto:contato@codework.com.br" className="text-foreground underline hover:no-underline break-all">
                contato@codework.com.br
              </a>.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">8. Retenção de Dados</h3>
            <p className="leading-relaxed">
              Seus dados pessoais serão armazenados apenas pelo tempo necessário para cumprir as
              finalidades para as quais foram coletados, salvo quando houver obrigação legal de
              retenção por período superior.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">9. Alterações nesta Política</h3>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento.
              As alterações serão publicadas nesta página com a data de atualização revisada.
              Recomendamos que você revise esta política periodicamente.
            </p>
          </section>

          <section>
            <h3 className="text-base sm:text-xl font-bold text-foreground mb-2 sm:mb-3">10. Contato</h3>
            <p className="leading-relaxed">
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
              dados pessoais, entre em contato conosco:
            </p>
            <div className="mt-3 p-3 sm:p-4 bg-muted/30 rounded-lg border border-border text-sm sm:text-base">
              <p className="font-semibold text-foreground">CodeWork Development</p>
              <p>E-mail: <a href="mailto:contato@codework.com.br" className="text-foreground underline hover:no-underline break-all">contato@codework.com.br</a></p>
              <p>Santo André – São Paulo, Brasil</p>
            </div>
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

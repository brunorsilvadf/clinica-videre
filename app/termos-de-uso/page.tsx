'use client'

import { FaFileContract } from 'react-icons/fa'

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <FaFileContract className="text-primary text-4xl" />
            <h1 className="text-3xl font-bold text-text">Termos de Uso</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text-light mb-8">
              Bem-vindo ao site da Clínica Videre. Ao acessar e utilizar este site, você concorda com os seguintes termos e condições de uso.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">1. Aceitação dos Termos</h2>
            <p className="text-text-light mb-6">
              Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">2. Uso do Site</h2>
            <p className="text-text-light mb-6">
              O conteúdo deste site é fornecido apenas para fins informativos. As informações contidas no site não substituem o aconselhamento médico profissional. Sempre consulte um profissional de saúde qualificado para qualquer questão relacionada à sua saúde.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">3. Propriedade Intelectual</h2>
            <p className="text-text-light mb-6">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade da Clínica Videre e está protegido por leis de direitos autorais. A reprodução não autorizada é proibida.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">4. Links Externos</h2>
            <p className="text-text-light mb-6">
              Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites. O acesso a esses links é por sua conta e risco.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-text-light mb-6">
              A Clínica Videre não garante que as informações contidas neste site sejam precisas, completas ou atualizadas. O uso do site é por sua conta e risco.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">6. Alterações nos Termos</h2>
            <p className="text-text-light mb-6">
              Podemos revisar estes termos de serviço a qualquer momento sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">7. Contato</h2>
            <p className="text-text-light">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do WhatsApp ou Instagram disponíveis no rodapé do site.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
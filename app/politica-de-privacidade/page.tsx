'use client'

import { FaShieldAlt } from 'react-icons/fa'

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <FaShieldAlt className="text-primary text-4xl" />
            <h1 className="text-3xl font-bold text-text">Política de Privacidade</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text-light mb-8">
              Esta Política de Privacidade descreve como a Clínica Videre ("nós", "nosso" ou "nos") trata as informações coletadas durante sua visita ao nosso site.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">1. Coleta de Informações</h2>
            <p className="text-text-light mb-6">
              Nosso site não coleta dados pessoais dos usuários. Utilizamos apenas cookies de navegação e ferramentas de análise para melhorar sua experiência e entender como o site está sendo utilizado.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">2. Cookies</h2>
            <p className="text-text-light mb-6">
              Utilizamos cookies para:
            </p>
            <ul className="list-disc pl-6 text-text-light mb-6">
              <li>Melhorar a experiência de navegação</li>
              <li>Analisar o tráfego do site</li>
              <li>Monitorar o desempenho das páginas</li>
            </ul>

            <h2 className="text-2xl font-bold text-text mb-4">3. Ferramentas de Análise</h2>
            <p className="text-text-light mb-6">
              Utilizamos ferramentas de análise como o Google Analytics para entender como os visitantes interagem com nosso site. Essas ferramentas coletam informações anônimas sobre:
            </p>
            <ul className="list-disc pl-6 text-text-light mb-6">
              <li>Páginas visitadas</li>
              <li>Tempo de permanência no site</li>
              <li>Dispositivos utilizados</li>
              <li>Origem do tráfego</li>
            </ul>

            <h2 className="text-2xl font-bold text-text mb-4">4. Links Externos</h2>
            <p className="text-text-light mb-6">
              Nosso site pode conter links para sites externos. Não nos responsabilizamos pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de cada site que visitar.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">5. Alterações na Política</h2>
            <p className="text-text-light mb-6">
              Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo suas informações.
            </p>

            <h2 className="text-2xl font-bold text-text mb-4">6. Contato</h2>
            <p className="text-text-light">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do WhatsApp ou Instagram disponíveis no rodapé do site.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 
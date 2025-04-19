'use client'

import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import { OptimizedImage } from './components/OptimizedImage'

export default function Home() {
  return (
    <>
      {/* Menu Fixo */}
      <header className="fixed w-full z-50 bg-white/100 backdrop-blur-sm shadow-sm">
        <nav className="container py-4">
          <div className="flex items-center justify-between">
            <OptimizedImage 
              src="/image 1.png" 
              alt="Videre Logo" 
              width={150} 
              height={50} 
              className="h-12 w-auto"
              priority
            />
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-text hover:text-primary transition-colors">Serviços</a>
              <a href="#sobre" className="text-text hover:text-primary transition-colors">Sobre nós</a>
              <a href="#localizacao" className="text-text hover:text-primary transition-colors">Onde estamos</a>
              <a
                href="https://wa.me/5561996570049?text=Olá,%20gostaria%20de%20agendar%20um%20exame%20de%20Optometria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-all"
              >
                Agende uma consulta
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <OptimizedImage
              src="/hero-image.jpg"
              alt="Clínica Videre - Exame de Vista em Brasília"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
          </div>
          
          <div className="hero-content px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cuide da sua saúde visual na Clínica Videre
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Exames completos e atendimento especializado em Optometria na Asa Norte, Brasília
            </p>
            <a
              href="https://wa.me/5561996570049?text=Olá,%20gostaria%20de%20agendar%20um%20exame%20de%20Optometria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-bold py-4 px-8 rounded-full inline-flex items-center hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Agende sua consulta
            </a>
          </div>
        </section>

        {/* Sobre a Clínica */}
        <section id="sobre" className="section bg-white">
          <div className="container">
            <h2 className="section-title text-text">
              Clínica de Optometria em Brasília
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary-fade rounded-xl p-8 mb-8">
                <p className="text-lg leading-relaxed text-text mb-6">
                  A Clínica Videre, localizada na Asa Norte – Brasília/DF, é referência em exames de vista, avaliações visuais e check-up ocular completo. Com equipamentos de última geração e profissionais altamente qualificados, oferecemos um atendimento humanizado e eficiente para garantir a saúde dos seus olhos.
                </p>
                <p className="text-lg leading-relaxed text-text">
                  Agende agora mesmo sua consulta, exame ou avaliação ocular com facilidade e rapidez! Clique no botão abaixo para falar diretamente com a nossa equipe pelo WhatsApp. Estamos prontos para te atender e cuidar da sua visão com excelência.
                </p>
                <div className="mt-8 text-center">
                  <a
                    href="https://wa.me/5561996570049?text=Olá,%20gostaria%20de%20agendar%20um%20exame%20de%20Optometria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white font-bold py-4 px-8 rounded-full inline-flex items-center hover:bg-primary-light transition-all transform hover:scale-105"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    Fale conosco no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section bg-primary-fade">
          <div className="container">
            <h2 className="section-title text-text">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Optometria Clínica',
                  description: 'Avaliação completa da saúde visual com profissionais especializados. Realizamos exames abrangentes para diagnóstico e correção de problemas visuais.',
                  features: ['Avaliação da acuidade visual', 'Diagnóstico preciso', 'Tratamento personalizado']
                },
                {
                  title: 'Exame de Vista Completo',
                  description: 'Exame de vista moderno e detalhado em Brasília, utilizando equipamentos de última geração para garantir resultados precisos.',
                  features: ['Tecnologia avançada', 'Resultados imediatos', 'Laudos detalhados']
                },
                {
                  title: 'Avaliação Visual Especializada',
                  description: 'Análise detalhada do sistema visual e suas funcionalidades, identificando problemas de refração e condições oculares.',
                  features: ['Mapeamento visual', 'Testes específicos', 'Orientação profissional']
                },
                {
                  title: 'Check-up Ocular Preventivo',
                  description: 'Acompanhamento preventivo da saúde dos seus olhos, com exames periódicos e monitoramento de condições oculares.',
                  features: ['Prevenção de doenças', 'Acompanhamento contínuo', 'Cuidado especializado']
                }
              ].map((service) => (
                <div key={service.title} 
                  className="p-6 bg-white rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 border border-primary/10">
                  <h3 className="text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-text-light mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-text-light">
                        <FaCheckCircle className="text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="section bg-white relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Informações de Endereço */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-primary/10 flex flex-col justify-center">
                <h2 className="section-title text-text mb-8">
                  Onde Estamos
                </h2>
                <p className="flex items-center justify-center text-xl mb-4 text-primary">
                  <FaMapMarkerAlt className="mr-2" />
                  SHCG - 716 BL G SALA 101
                </p>
                <p className="text-text-light text-center">Asa Norte, Brasília - DF</p>
                <p className="text-text-light text-center mb-6">CEP: 70770-537</p>
                <a
                  href="https://maps.app.goo.gl/25MKuiBAF4N4f78k8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center hover:bg-primary-light transition-all transform hover:scale-105 mx-auto"
                >
                  Como chegar
                </a>
              </div>

              {/* Mapa - Apenas em Desktop */}
              <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2">
                <div className="h-full w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4570.263082929542!2d-47.90164502416671!3d-15.739440784893239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3969f9714165%3A0x45e400f866ec48d9!2sClinica%20Videre%20Optometria%20-%20Exame%20de%20vista%20e%20Avalia%C3%A7%C3%A3o%20Visual!5e1!3m2!1spt-BR!2sbr!4v1745020441084!5m2!1spt-BR!2sbr"
                    className="h-full w-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Clínica Videre. Todos os direitos reservados.</p>
              <div className="flex gap-4 mt-2 text-sm text-white/80">
                <a href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <span>|</span>
                <a href="/termos-de-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/clinica.videre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-80 transition-all transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/5561996570049?text=Olá,%20gostaria%20de%20agendar%20um%20exame%20de%20Optometria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-80 transition-all transform hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 
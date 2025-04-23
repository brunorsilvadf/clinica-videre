import './globals.css'
import { Montserrat } from 'next/font/google'
import type { Metadata } from 'next'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://videreclinica.com.br'),
  title: {
    default: 'Clínica Videre | Optometria em Brasília',
    template: '%s | Clínica Videre'
  },
  description: 'Exames de vista, avaliação visual e check-up ocular na Asa Norte, Brasília. Agende sua consulta na Clínica Videre.',
  keywords: 'optometria, exame de vista, avaliação visual, check-up ocular, Brasília, Asa Norte',
  authors: [{ name: 'Clínica Videre' }],
  creator: 'Clínica Videre',
  publisher: 'Clínica Videre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://videreclinica.com.br',
    siteName: 'Clínica Videre',
    title: 'Clínica Videre | Optometria em Brasília',
    description: 'Exames de vista, avaliação visual e check-up ocular na Asa Norte, Brasília. Agende sua consulta na Clínica Videre.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clínica Videre - Especialista em Optometria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Videre | Optometria em Brasília',
    description: 'Exames de vista, avaliação visual e check-up ocular na Asa Norte, Brasília.',
    images: ['/images/og-image.jpg'],
    creator: '@videreclinica',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-verificacao-google',
    yandex: 'seu-codigo-verificacao-yandex',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Clínica Videre',
              description: 'Exames de vista, avaliação visual e check-up ocular na Asa Norte, Brasília.',
              image: 'https://videreclinica.com.br/images/og-image.jpg',
              url: 'https://videreclinica.com.br',
              telephone: '+5561996570049',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'SHCN CLN 210 Bloco C Sala 101',
                addressLocality: 'Brasília',
                addressRegion: 'DF',
                postalCode: '70856-520',
                addressCountry: 'BR'
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '-15.739440784893239',
                longitude: '-47.90164502416671'
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
                ],
                opens: '08:00',
                closes: '18:00'
              },
              priceRange: '$$'
            })
          }}
        />
      </head>
      <body className="font-montserrat antialiased">
        {children}
      </body>
    </html>
  )
} 
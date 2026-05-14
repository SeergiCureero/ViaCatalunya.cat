import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Via Catalana — Per una xarxa ferroviària del segle XXI',
  description:
    'Proposta ciutadana per vertebrar Catalunya amb infraestructura ferroviària. Menys accidents, habitatge accessible, oportunitats arreu del territori.',
  keywords: [
    'ferrocarril Catalunya',
    'xarxa ferroviària',
    'mobilitat sostenible',
    'descentralització',
    'habitatge Catalunya',
    'Via Catalana',
  ],
  openGraph: {
    title: 'Via Catalana',
    description: 'Per una xarxa ferroviària del segle XXI a Catalunya',
    locale: 'ca_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  )
}

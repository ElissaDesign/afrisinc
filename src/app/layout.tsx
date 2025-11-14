import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Afrisinc | Building Africa\'s Future Through Media, Technology & Innovation',
  description: 'Afrisinc is an international parent company based in Africa, specializing in media & entertainment, technology & software engineering, product sales & e-commerce, and consulting services.',
  keywords: ['Afrisinc', 'Africa', 'Media', 'Technology', 'Software Engineering', 'E-commerce', 'Consulting', 'Innovation'],
  authors: [{ name: 'Afrisinc' }],
  openGraph: {
    title: 'Afrisinc | Building Africa\'s Future',
    description: 'International parent company specializing in media, technology, and innovation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afrisinc | Building Africa\'s Future',
    description: 'International parent company specializing in media, technology, and innovation.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

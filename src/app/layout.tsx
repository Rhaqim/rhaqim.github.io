import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import HomeLayout from '@/components/Layout/Home'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const irishGrover = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rhaqim.com/'),
  title: 'Rhaqim',
  description: "Rhaqim's personal website",
  robots: {
    follow: true,
    index: true
  },
  twitter: {
    card: 'summary',
    title: 'Rhaqim'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={irishGrover.className}>
        <ThemeProvider>
          <HomeLayout>{children}</HomeLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

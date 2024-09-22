import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { ClerkProvider } from '@clerk/nextjs'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('@/components/Header'), {
  ssr: false,
  loading: () => <div>Loading...</div> // Optional loading component
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LookLockers',
  description: 'Find your perfect storage space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
            strategy="beforeInteractive"
          />
          <DynamicHeader />
          <main>{children}</main>
          {/* Footer component if you have one */}
        </body>
      </html>
    </ClerkProvider>
  )
}
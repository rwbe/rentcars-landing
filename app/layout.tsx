import './globals.css'
import type { Metadata } from 'next'
import { SearchContextProvider } from './context/search'

// Metadados para SEO
export const metadata: Metadata = {
  title: 'RentCars',
  description: 'Find the best deals on rental cars from top companies worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SearchContextProvider>
      <html lang="en">
        <body className="font-poppins">
          {children}
        </body>
      </html>
    </SearchContextProvider>
  )
}

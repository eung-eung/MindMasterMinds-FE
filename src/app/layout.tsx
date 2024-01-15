'use client'
import ProvidersWrapper from './ProvidersWrapper'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  )
}

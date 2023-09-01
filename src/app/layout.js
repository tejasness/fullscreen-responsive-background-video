'use client';
import './globals.css'

export const metadata = {
  title: 'Fullscreen Background video',
  description: 'By Tejas Chaudhari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      {children}
      </body>
    </html>
  )
}

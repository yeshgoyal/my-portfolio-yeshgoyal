import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yesh Goyal - Frontend and python Developer Portfolio',
  description: 'Frontend Developer | MERN Stack Developer | Building modern web experiences',
  keywords: 'frontend developer, MERN stack, React, Next.js, python, portfolio',
  authors: [{ name: 'Yesh Goyal' }],
  openGraph: {
    title: 'Yesh Goyal - Frontend and python Developer',
    description: 'Frontend Developer | MERN Stack Developer | Building modern web experiences',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  )
}

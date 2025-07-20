import Footer from '@/components/layout/Footer'
import Head from '@/components/layout/Head'
import Navbar from '@/components/layout/Navbar'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AmirSaman Gharechahi',
  description: 'FrontEnd web developer, HTML CSS Bootstrap Tailwind Javascript Typescript React.js Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>

        <Navbar />
        
        {children}

        <Footer />
        
      </body>
    </html>
  )
}
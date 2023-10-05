import Header from '../components/header'
import '../sass/global.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loginext-Goals',
  description: 'The application for setting goals',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <main>
        {children}
      </main>
      </body>
    </html>
  )
}

export default RootLayout


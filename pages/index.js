import { Inter } from 'next/font/google'
import Home from '@/components/Home'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function LandingPage() {
  return (
    <Layout title="Home">
      <Home/>
    </Layout>
  )
}

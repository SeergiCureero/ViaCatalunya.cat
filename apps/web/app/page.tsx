import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProblemaSection from '@/components/ProblemaSection'
import MapaSection from '@/components/MapaSection'
import VisiSection from '@/components/VisiSection'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemaSection />
      <MapaSection />
      <VisiSection />
      <CtaSection />
      <Footer />
    </main>
  )
}

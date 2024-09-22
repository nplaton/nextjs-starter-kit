import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularStorageTypes from '@/components/PopularStorageTypes'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import GoogleMapsScript from '@/components/GoogleMapsScript'

export default function Home() {
  return (
    <>
      <GoogleMapsScript />
      <Header />
      <main className="flex-grow">
        <Hero />
        <PopularStorageTypes />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
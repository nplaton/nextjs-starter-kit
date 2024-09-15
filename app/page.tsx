import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularStorageTypes from '@/components/PopularStorageTypes'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PopularStorageTypes />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PopularStorageTypes from '@/app/(marketing)/_components/PopularStorageTypes'
import WhyChooseUs from '@/app/(marketing)/_components/WhyChooseUs'
import Testimonials from '@/app/(marketing)/_components/Testimonials'

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
    </div>
  )
}
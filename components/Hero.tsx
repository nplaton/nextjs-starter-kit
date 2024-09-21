'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

const Hero: React.FC = () => {
  const router = useRouter()

  const handleSearch = (searchTerm: string, date: Date | undefined) => {
    const searchParams = new URLSearchParams({
      location: searchTerm,
      date: date ? date.toISOString() : ''
    })
    router.push(`/search-results?${searchParams.toString()}`)
  }

  return (
    <section className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
        >
          Find your perfect storage space
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md rounded-full max-w-4xl mx-auto"
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
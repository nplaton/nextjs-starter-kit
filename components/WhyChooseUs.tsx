'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Clock, Box } from 'lucide-react'
import { Feature } from '@/types'

const features: Feature[] = [
  { title: 'Verified Facilities', description: 'Quality-checked storage spaces', icon: <Shield className="w-8 h-8" /> },
  { title: 'Easy Booking', description: 'Secure your space in minutes', icon: <Clock className="w-8 h-8" /> },
  { title: 'Flexible Options', description: 'Short and long-term storage solutions', icon: <Box className="w-8 h-8" /> }
]

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why choose LookLockers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
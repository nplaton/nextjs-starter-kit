'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'
import { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
    { name: 'Sarah Johnson', role: 'Small Business Owner', testimonial: 'LookLockers made finding a secure space for my inventory incredibly easy. The climate-controlled unit gives me peace of mind.', avatar: '/placeholder.svg?height=80&width=80' },
    { name: 'Mike Thompson', role: 'Digital Nomad', testimonial: "As someone always on the move, LookLockers's flexibility is a game-changer. I can easily manage my storage needs from anywhere.", avatar: '/placeholder.svg?height=80&width=80' },
    { name: 'Emily Chen', role: 'Homeowner', testimonial: 'During our home renovation, LookLockers was a lifesaver. The booking process was smooth, and the facility was top-notch.', avatar: '/placeholder.svg?height=80&width=80' }
  ]

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="backdrop-blur-sm bg-white/30 border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <Avatar className="h-16 w-16 ring-4 ring-white">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
                  <div className="mt-8 text-center">
                    <p className="text-gray-800 mb-4 italic">{`"${testimonial.testimonial}"`}</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
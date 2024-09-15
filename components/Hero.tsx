'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Search, MapPin, Calendar as CalendarIcon } from 'lucide-react'

const Hero: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

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
          className="bg-white/80 backdrop-blur-md rounded-full p-2 max-w-4xl mx-auto"
        >
          <form className="flex items-center">
            <div className="flex-grow flex items-center space-x-4">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Where do you need storage?" className="pl-10 py-6 rounded-full bg-transparent border-none" />
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="rounded-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Move-in date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" size="icon" className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90">
              <Search className="h-5 w-5 text-white" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
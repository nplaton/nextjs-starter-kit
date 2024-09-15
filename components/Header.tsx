'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          LookLockers
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/list-facility" className="text-sm font-medium hover:text-primary transition-colors">List Your Facility</Link>
          <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">Log in</Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

export default Header
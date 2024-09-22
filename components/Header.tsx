'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const DynamicNavbar = dynamic(() => import('@/components/wrapper/navbar'), { ssr: false })

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-black dark:bg-opacity-50' : 'bg-transparent'}`}>
      <DynamicNavbar isScrolled={isScrolled} />
    </header>
  )
}

export default Header
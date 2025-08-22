"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false) // Always start with light mode
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
  }

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme')
      
      // If no saved theme, force light mode as default
      if (!savedTheme) {
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else if (savedTheme === 'dark') {
        setIsDarkMode(true)
        document.documentElement.classList.add('dark')
      } else {
        // Ensure light mode is set correctly
        setIsDarkMode(false)
        document.documentElement.classList.remove('dark')
      }
    }
    
    // Initialize immediately and also with a small delay
    initializeTheme()
    setTimeout(initializeTheme, 10)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className='w-full' alt="" />
      </div>

      <nav className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50' : 'bg-transparent'}`}>
        {/* Logo */}
        <a href="#top">
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} className='cursor-pointer h-10 w-28 mr-14' alt="Logo" />
        </a>

        {/* Desktop menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${isScrolled ? '' : 'bg-white/50 shadow-sm dark:bg-darkTheme/50'}`}>
          <li><a href='#top' className='font-Ovo text-black dark:text-white'>Home</a></li>
          <li><a href='#about' className='font-Ovo text-black dark:text-white'>About me</a></li>
          <li><a href='#services' className='font-Ovo text-black dark:text-white'>Services</a></li>
          <li><a href='#work' className='font-Ovo text-black dark:text-white'>My Work</a></li>
          <li><a href='#contact' className='font-Ovo text-black dark:text-white'>Contact me</a></li>
        </ul>

        {/* Desktop Controls*/}
        <div className='flex items-center gap-4'>
          <button onClick={toggleTheme}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className='w-6 h-6' />
          </button>
          <a href='#contact' className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 text-black dark:text-white dark:border-white/50'>
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Go to contact" className='w-3 h-3' />
          </a>
          {/* Mobile menu button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className='w-6 h-6' />
          </button>
        </div>


        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-100 dark:bg-darkTheme transition duration-500'>
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className='w-6 h-6 cursor-pointer' />
          </div>
          <li><a href='#top' className='font-Ovo text-black dark:text-white' onClick={closeMenu}>Home</a></li>
          <li><a href='#about' className='font-Ovo text-black dark:text-white' onClick={closeMenu}>About me</a></li>
          <li><a href='#services' className='font-Ovo text-black dark:text-white' onClick={closeMenu}>Services</a></li>
          <li><a href='#work' className='font-Ovo text-black dark:text-white' onClick={closeMenu}>My Work</a></li>
          <li><a href='#contact' className='font-Ovo text-black dark:text-white' onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

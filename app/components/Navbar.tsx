"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} className='w-full' alt="" />
      </div>

      <nav className={`w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} className='cursor-pointer h-10 w-28 mr-14' alt="Logo" />
        </a>

        {/* Desktop menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? '' : 'bg-white shadow-sm bg-opacity-50'}`}>
          <li><a href='#top' className='font-Ovo'>Home</a></li>
          <li><a href='#about' className='font-Ovo'>About me</a></li>
          <li><a href='#services' className='font-Ovo'>Services</a></li>
          <li><a href='#work' className='font-Ovo'>My Work</a></li>
          <li><a href='#contact' className='font-Ovo'>Contact me</a></li>
        </ul>

        {/* Desktop Controls*/}
        <div className='flex items-center gap-4'>
          <button>
            <Image src={assets.moon_icon} alt="" className='w-6 h-6' />
          </button>
          <a href='#contact' className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
            Contact <Image src={assets.arrow_icon} alt="Go to contact" className='w-3 h-3' />
          </a>
          {/* Mobile menu button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className='w-6 h-6' />
          </button>
        </div>


        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-100 transition duration-500'>
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className='w-6 h-6 cursor-pointer' />
          </div>
          <li><a href='#top' className='font-Ovo' onClick={closeMenu}>Home</a></li>
          <li><a href='#about' className='font-Ovo' onClick={closeMenu}>About me</a></li>
          <li><a href='#services' className='font-Ovo' onClick={closeMenu}>Services</a></li>
          <li><a href='#work' className='font-Ovo' onClick={closeMenu}>My Work</a></li>
          <li><a href='#contact' className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

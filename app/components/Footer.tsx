"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false) // Default to light mode

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className='mt-20'>
        <div className='text-center'>
            <div className='flex items-center gap-2'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="logo" className='w-36 mx-auto mb-2' />
            </div>

            <div className='w-max flex items-center gap-2 mx-auto text-black dark:text-white'>
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="mail" className='w-6' />vutranquangminh.dev@gmail.com
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='text-sm font-Ovo text-black dark:text-white'><span className='font-bold'>Copyright</span> 2025. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/vutranquangminh" className='text-black dark:text-white'>GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/vutranquangminh/" className='text-black dark:text-white'>LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </div>
  ) 
}

export default Footer
"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "304f09d3-d9c9-49ce-aa3f-8fdb0e0f663f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
    <div 
      id='contact' 
      className={`w-full px-[12%] py-10 scroll-mt-20 ${!isDarkMode ? 'bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' : ''}`}
    >
        <h4 className='text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80'>Connect me</h4>
        <h2 className='text-center text-5xl font-Ovo text-gray-800 dark:text-white'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80'>I&apos;m a software engineer with a passion for building web applications.</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' name='name' required
                className='flex-1 p-3 outline-none border border-gray-400 rounded-md' />
                <input type="email" placeholder='Enter your email' name='email' required
                className='flex-1 p-3 outline-none border border-gray-400 rounded-md' />
            </div>
            <textarea placeholder='Enter your message' rows={6} name='message' required
            className='w-full p-4 outline-none border border-gray-400 rounded-md mb-6' />
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 disabled:opacity-50 disabled:cursor-not-allowed'
            >Submit now <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' /></button>

            {result && (
                <div className='text-center mt-6'>
                    <p className='text-gray-800 dark:text-white/90 bg-gray-100 dark:bg-gray-800/50 px-4 py-2 rounded-md inline-block'>{result}</p>
                </div>
            )}
        </form>
    </div>
  )
}

export default Contact
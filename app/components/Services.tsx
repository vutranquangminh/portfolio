import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80'>What I offer</h4>
            <h2 className='text-center text-5xl font-Ovo text-gray-800 dark:text-white'>My Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80'>I offer a wide range of services to help you achieve your goals.</p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 duration-500 active:shadow-black active:scale-95'>
                        <Image src={icon} alt={title} className='w-10 h-10' />
                        <h3 className='text-lg my-4 text-gray-800 dark:text-white font-Ovo'>{title}</h3>
                        <p className='text-sm text-gray-700 dark:text-white/80 leading-5 font-Ovo'>{description}</p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 font-Ovo text-gray-800 dark:text-white'>
                            Read more <Image src={assets.right_arrow} alt="right arrow" className='w-4' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
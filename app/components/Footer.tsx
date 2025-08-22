import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <div className='flex items-center gap-2'>
                <Image src={assets.logo} alt="logo" className='w-36 mx-auto mb-2' />
            </div>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt="mail" className='w-6' />vutranquangminh.dev@gmail.com
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p className='text-sm font-Ovo'><span className='font-bold'>Copyright</span> 2025. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/vutranquangminh">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/vutranquangminh/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </div>
  ) 
}

export default Footer
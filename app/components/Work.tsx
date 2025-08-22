import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80'>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo text-gray-800 dark:text-white'>My Lasted Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80'>I&apos;m a software engineer with a passion for building web applications.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
        {workData.map((project, index) => (
          <div key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:shadow-black hover:-translate-y-1 duration-500 active:shadow-black active:scale-95'
            style={{ backgroundImage: `url(${project.bgImage})` }}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 p-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div className='flex-1'>
                <h2 className='font-semibold text-black text-base leading-tight'>{project.title}</h2>
                <p className='text-sm text-gray-600 mt-1'>{project.description}</p>
              </div>

              <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:shadow-[4px_4px_0_#000] dark:group-hover:shadow-[4px_4px_0_#fff] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt="send icon" className='w-4' />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-800 dark:text-white border-[0.5px] border-gray-700 dark:border-white/50 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-500'> Show more <Image src={assets.right_arrow_bold} alt="right arrow" className='w-4' /></a>
    </div>
  )
}

export default Work
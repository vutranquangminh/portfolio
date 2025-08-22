import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  const [result, setResult] = useState("");

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

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I&apos;m a software engineer with a passion for building web applications.</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' name='name' 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
                <input type="email" placeholder='Enter your email' name='email' 
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
            </div>
            <textarea placeholder='Enter your message' rows={6} name='message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' />
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
            >Submit now <Image src={assets.right_arrow_white} alt="right arrow" className='w-4' /></button>

            <p className='mt-4'>{result}</p>
        </form>
    </div>
  )
}

export default Contact
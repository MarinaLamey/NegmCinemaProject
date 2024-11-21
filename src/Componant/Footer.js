import React from 'react'
import '../App.css'
import '../index.css'
import { Facebook , Twitter , Instagram , Youtube, TwitchIcon } from 'lucide-react'

const Footer = () => {
  return (
    <div className=' bgimage relative z-20  h-96 w-full   flex flex-row items-center border-t-2  border-neutral-100 border-opacity-5 '>
      <div className='logoholder w-1/4 flex flex-col justify-center justify-between  items-center gap-20 px-20'>
      <div className=''>
        <a href='/'  className='text-black font-bold text-3xl '>Negm<span className='text-red-700' >Cinema</span></a>
        <p className='text-white  text-opacity-15'>movie time</p>
      </div>
      <p className='text-white'>Follow Us</p>
      <ul className='flex flex-row gap-4 '>
        <li className='bg-red-700 rounded-full w-16 h-16 flex items-center justify-center border border-neutral-100 hover:bg-zinc-900 '><Facebook color='white' size={30} /></li>
        <li className='bg-red-700 rounded-full w-16 h-16 flex items-center justify-center border border-neutral-100 hover:bg-zinc-900'><Instagram color='white' size={30} /></li>
        <li className='bg-red-700 rounded-full w-16 h-16 flex items-center justify-center border border-neutral-100 hover:bg-zinc-900'><Youtube color='white' size={30} /></li>
        <li className='bg-red-700 rounded-full w-16 h-16 flex items-center justify-center border border-neutral-100 hover:bg-zinc-900'><TwitchIcon color='white' size={30} /></li>

      </ul>
      </div>
      <div className='linksholder w-4/5 h-full bg-red-700 bg-opacity-20 p-11 flex flex-col items-start justify-center justify-between'>
       <ul className='flex  gap-16 text-white text-opacity-40'>
        <li>Contact us</li>
        <li>Media Center</li>
        <li>Terms of Us</li>
       </ul>
       <div className='text-white'>
       <p>BY: Marina Lamey <span className='text-red-700'>Negm</span></p>
       <a href=''>My LinkedIn</a>
       </div>
      </div>
    </div>
  )
}

export default Footer

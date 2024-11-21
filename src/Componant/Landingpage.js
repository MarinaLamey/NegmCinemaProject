import { CirclePlay } from 'lucide-react'
import { CircleFadingPlus } from 'lucide-react'
import React from 'react'
import { CircleArrowDown } from 'lucide-react'

const Landingpage = () => {
  return (
    <div className={' relative z-20 container mx-auto flex flex-col items-center justify-center py-64 gap-20 '}>
      <div className=' flex flex-row  items-center gap-3 text-white text-4xl font-bold '>
        <span>WATCH</span>
    <CirclePlay color='white' size={110}/>
        <span>NOW</span>
      </div>
      <div className='flex flex-col items-start  justify-start gap-4 text-white'>
        <h3 className='text-2xl font-bold'>Captain America Civil War</h3>
        <p className='text-left text-xl leading-8'>he First Avenger premiered at the El Capitan Theatre in Los Angeles on July 19, 2011, and was released in the United States on July 22, as part of Phase One of the MCU. The film was commercially successful, grossing over $370 million worldwide. The film received positive reviews from critics, who praised Evans' performance, the film's depiction of its 1940s time period, and Johnston's direction.</p>
        <div className=' flex flex-row justify-between items-center gap-3 text-white'>
        <CircleFadingPlus color='white' size={40}/>
        <p>Add To My List</p>
        </div>
        </div>
        <div className='' style={{position:'absolute' , bottom:'-100px'}}>
        <CircleArrowDown className='animate-bounce' size={70} color='rgba(185 , 28 , 28 , 1)' />
        </div>
    </div>
  )
}

export default Landingpage;

import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

const Moviecard = ({movie}) => {

  return (
   <Link to={`/movie/${movie.id}`}>
      <div className=' h-96 rounded relative  mt-4 ml-4 ' style={{ boxShadow:'rgba(185, 28 , 28 , 0.2 ) 0px 7px 15px 0px'}}>
      <div className=' opacity-0 hover:opacity-100 transition-opacity flex flex-col h-full items-start p-5 gap-5 '  style={{width:"100%", height:"100%",   backgroundColor:"#f3f3f333",transition:"1m",position:"absolute" , top:'50%' , left:'50%' ,transform:'translate(-50%, -50%)',zIndex:'50' }}>
        <p className='text-white text-xl font-bold w-full h-1/4 '>Movie Name: {movie.title}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Release Date: {movie.release_date}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Number of Residents: {movie.vote_count}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Rating: {movie.vote_average}</p>
      </div>
      <img
                  className="rounded w-full h-full  relative"
                  src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}
                  alt=""
                />
              
      </div> 
      </Link>
  )
}

export default Moviecard

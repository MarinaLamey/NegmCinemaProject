import React from 'react'
import {Link,useParams} from "react-router-dom"
import { useState , useEffect } from 'react'
import axios from 'axios'




const Moviedetails = () => {
  const params = useParams()
  const [moviesdetails , setmoviesdetails] = useState([]);
//API steps 
const getMoviedetails = async () => {
 const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=5c01c0e2e104498bedb3110a3204f74a&language=en`)
setmoviesdetails(res.data)  
}
useEffect(() => {
   getMoviedetails();

} , [])


  return (
    <div className='container mx-auto flex flex-col gap-14  relative z-20 my-48   '>
      <div className='flex flex-row justify-start  p-3 gap-8 ' style={{ boxShadow: 'rgba(185 , 28 , 28 , 0.2 ) 0px 10px 50px 0px' }}>
        <div className='imgholder  h-96 rounded relative '>
          <img
            className="rounded  h-full  relative"
            src={`https://image.tmdb.org/t/p/w500`+moviesdetails.poster_path}
            alt=""
          />

        </div>
        <div className='textholder text-center  relative flex flex-col gap-3  justify-center items-center'>
        <p className='text-white text-xl font-bold w-full h-1/4 '>Movie Name: {moviesdetails.title}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Release Date: {moviesdetails.release_date}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Number of Residents: {moviesdetails.vote_count}</p>
        <p className='text-white text-xl font-bold w-full  h-1/4'>Rating: {moviesdetails.vote_average}</p>
        </div>
      </div>
    <div className='flex flex-col p-4  h-96 justify-between' style={{ boxShadow: 'rgba(185, 28 , 28 , 0.2 ) 0px 10px 50px 0px' }}>
     <div className='text-white font-bold text-left '>
     <h3 className='text-red-800 text-3xl mb-5' >The Story </h3>
     <p>Movie Story:{moviesdetails.overview}</p>
     </div>
     <div className='flex flex-row  self-center gap-4 p-6'>
      <Link to={'/'}>
      <buttom className=' text-white rounded-lg px-4 py-4 border-2  shadow-xl bg-gradient-to-r from-zinc-900 to-red-900 border-transparent'  >Back Home</buttom>
      </Link>
      <a href={moviesdetails.homepage} target='_blank' >
      <buttom className='text-white rounded-lg px-4 border-2 py-4 shadow-xl bg-gradient-to-r from-zinc-900 to-red-900 border-transparent'  >Watch The Movie</buttom>
      </a>

     </div>

      </div>
    </div>
  )
}

export default Moviedetails

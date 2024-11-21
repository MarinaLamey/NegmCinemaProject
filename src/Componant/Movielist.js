import React from 'react'
import {  Star } from 'lucide-react';
import '../App.css'
import Moviecard from './Moviecard';
import Pagination from './Paginationcomp';
import { useRef } from 'react';
import { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {getAllMovies} from '../Redux/Action/moviesAction'


const Movielist = ({ }) => {

  const [movies , setmovies] = useState([]);

  //API steps 
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getAllMovies())
  } , [])

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
  setmovies(dataMovies)
  
  },[dataMovies])
  
  return (
    
    <div   className='container z-20 mx-auto h-auto relative overflow-hidden py-28'>
    <div className='flex flex-row gap-4'>
      <Star color='red' size={30}/>
      <p className='text-2xl text-white font-bold'>Popular on Negm<span className='text-2xl text-red-700' >Cinema</span></p>
    </div>
    <div className=' mt-20 relative grid grid-cols-4 gap-3 z-40 overflow-auto p-3'>
    {movies.length >= 1 ? (movies.map((movie) => {
      return (<Moviecard key={movie.id} movie={movie}/>)
    })) : <h2>There are no movies to show.</h2> } 
    </div>
    <Pagination />
    </div>
  )
}

export default Movielist;

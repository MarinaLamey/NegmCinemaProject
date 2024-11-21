import '../App.css'
import React from 'react'
import { Bell } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { SearchIcon } from 'lucide-react'
import user from '../imgs/user3.jpg'
import { useDispatch , useSelector } from 'react-redux'
import {getAllMovies, getSearchMovies } from "../Redux/Action/moviesAction"


const NavBar = ({ Scrolltosection , Movielistssec}) => {
  
  const Search = (word) => {
 ApiSearch(word)
  } 

const dispatch = useDispatch();

//search api 
const ApiSearch = async (word) => {
  if(word === ''){
    dispatch(getAllMovies())
  }else{
  dispatch(getSearchMovies(word))  
  }
 }
//

  return (
    <nav className=" relative   py-4 z-10"   >
    <div className='container mx-auto  flex items-center  justify-center'>
      <div className='w-1/4 '>
        <a href='/'  className='text-black font-bold text-3xl '>Negm<span className='text-red-700' >Cinema</span></a>
      </div>
      <div className='w-1/2  flex items-center justify-end gap-3'  >
      <div>
      <div className='flex flex-row items-center justify-between' style={{borderRadius: '15px' , height: '40px' , backgroundColor: '#00000036'  , color:'white'}} >
      <span className='bg-red-800 flex items-center justify-center w-16 h-10 rounded-xl '>
        <SearchIcon color='white' size={25} /> </span>
        <input onChange={(e) => Search(e.target.value)} onBlur={() => Scrolltosection(Movielistssec)} type='text' className=' placeholder:text-white placeholder:text-opacity-25   relative' style={{borderRadius: '15px', width: '270px' , height: '40px' , backgroundColor:'transparent', padding:'10px' , color:'white'}} placeholder='Search'>
        </input>
      </div>
      </div>
       <Bell color='white' size={33} ></Bell>
      </div>
      <div className='w-1/4 ml-3 flex flex-row items-center justify-start gap-2 '>
      <img
                  className="w-12 h-12 mr-3 rounded-full border border-neutral-300"
                  src={user}
                  alt=""
                />
      <h3 className='text-xl font-bold text-white'>Michael Nabil</h3>
      <ChevronDown color='white' size={30}></ChevronDown>
      </div>
    </div>
    </nav>
  )
}

export default NavBar;
;
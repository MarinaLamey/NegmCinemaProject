
import React from "react"
import ReactPaginate from 'react-paginate';
import '../App.css'
import { LucideArrowLeft , LucideArrowRight } from "lucide-react";
import { useState ,useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import { getPage  } from "../Redux/Action/moviesAction"


const Paginationcomp = ({ }) =>  {

  const[pageCount , setpageCount] = useState(0);
 
const dispatch = useDispatch()
const pagesCount = useSelector((state) => state.pageCount )
useEffect(() => {
setpageCount(pagesCount)
})

const getPageMovie = async(page) => {
  dispatch(getPage(page))
}

  const handlePageClick = (data) => {
  getPageMovie(data.selected + 1)
  }
 

  
  return (
    <>
    <div className=" container mx-auto relative flex justify-end p-2 ">
    <ReactPaginate
      breakLabel=". . ."
      nextLabel={<LucideArrowRight/>}
      onPageChange={handlePageClick}
      marginPagesDisplayed={1} //last num 
      pageRangeDisplayed={1}//firt num 
      pageCount={pageCount}
      previousLabel={<LucideArrowLeft/>}
      containerClassName=" z-40  flex items-center justify-center  rounded-md  bg-black absolute p-3 text-white gap-3 border-2  border-neutral-100 border-opacity-20  "
      pageLinkClassName="bg  relative py-2 px-2 font-bold text-2xl rounded-md focus:bg-red-700 "
      previousClassName=" bg  relative px-4 py-4 font-bold text-2xl rounded-md hover:bg-red-700 "
      nextClassName=" bg  relative px-4 py-4 font-bold text-2xl rounded-md hover:bg-red-700"
      breakClassName=" relative px-4 py-2 text-white rounded-md bg-red-700   "
      activeClassName="active"
      
      />
      </div>
  </>
  )
}

export default Paginationcomp 
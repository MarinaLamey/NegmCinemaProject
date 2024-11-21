import { AllMovies , apiLinkAll } from "../type/moviesType";
import axios from "axios";

export const getAllMovies = () =>{
    return async(dispatch) => {
    const res = await axios.get(apiLinkAll)
    dispatch({type:AllMovies , data: res.data.results , pages: res.data.total_pages})
    }

} 


//search api 

export const getSearchMovies = (word) =>{
    return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c01c0e2e104498bedb3110a3204f74a&query=${word}&anguage=en`)
    dispatch({type:AllMovies , data: res.data.results , pages: res.data.total_pages})
    }

} 

//get page

export const getPage = (page) =>{
    return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5c01c0e2e104498bedb3110a3204f74a&language=en&page=${page}`)
    dispatch({type:AllMovies , data: res.data.results , pages: res.data.total_pages})
    }

} 



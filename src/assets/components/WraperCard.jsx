import {IoIosArrowForward} from "react-icons/io";
import axios from "axios"
import React,{useState,useEffect} from "react"
import CardFilm from "./CardFilm"
import Load from "./Load"

export default function WraperCard({param,event}){
const [film,setFilm]=useState([])
const [loading,setLoading]=useState(true)
const url=`https://www.omdbapi.com/?s=${param}&apikey=c3e4c0c0`

const getFilm=async()=>{
  const req=await axios.get(url)
  if(req.data.Response){
    setLoading(false)
    setFilm(req.data.Search)
  }else{
    setLoading(true)
  }
  
}
 useEffect(()=>{
   getFilm()
 },[film])
 
 const titles=(str)=>{
   return str.charAt(0).toUpperCase() + str.slice(1)
 }
  return (
    <div className="h-64 md:h-96 w-[96%] rounded border border-blackSecond mx-auto my-8">
      <div className="flex items-center justify-between h-10 md:h-14 w-[100%] text-white">
        <div className="h-[100%] flex items-center ml-2 md:ml-4 font-inter md:text-[1.2em]">
          <h1>{titles(param)}</h1>
        </div>
        <div className="h-[100%] flex items-center mr-2 text-2xl" onClick={event}>
          <IoIosArrowForward/>
        </div>
      </div>
      <div className="flex h-54 md:h-72 items-center overflow-hidden">
        {
        loading ? <Load/>
          :
          film.map((film,index)=>{
          if(window.innerWidth < 900){
           if(index <=2){
            return <CardFilm img={film.Poster} title={film.Title}/>
           }
          }else if(window.innerWidth >=900){
           if(index < 4){
            return <CardFilm img={film.Poster} title={film.Title}/>
           }
          }
          })
        }
      </div>
    </div>
    )
}
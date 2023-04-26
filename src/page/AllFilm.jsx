import {useParams,useNavigate} from "react-router-dom"
import {HiOutlineArrowLeft} from "react-icons/hi"
import BtnScrol from "../assets/components/BtnScrol"
import React,{useEffect,useState} from "react"
import Footer from "../assets/components/Footer"
import CardDetailSearch from "../assets/components/CardDetailSearch"
import axios from "axios"
export default function AllFilm(){
  const [films,setFilms]=useState([])
  const [up,setUp]=useState(false)
  const {title}=useParams()
  const nvgt=useNavigate()
  const getFilms=async(query)=>{
    const req=await axios.get(query)
    console.log(req.data.Response)
    if(req.data.Response === "True") setFilms(req.data.Search)
    return true
    if(req.data.Response ==="False") return false
  }
  
  useEffect(()=>{
    getFilms(`https://www.omdbapi.com/?s=${title}&apikey=c3e4c0c0`)
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 150){
        setUp(true)
      }else{
        setUp(false)
      }
    } )
  },[])
  
  const header=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  const handleToTop=()=>{
    scrollTo({
      top:0,
      behavior:"smooth",
      duration:500
    })
  }
  return (
    <div className={`bg-black w-screen ${films.length > 3 ? "h-full" : "h-screen"}`}>
      <div className="w-screen md:h-28 h-10 flex text-white bg-second items-center">
        <div className="h-[100%] w-1/3 pl-1 md:pl-2 flex items-center justify-start">
           <div className="text-2xl md:text-3xl md:text-5xl" onClick={()=>nvgt("/film")}><HiOutlineArrowLeft/></div>
        </div>
        <div className="h-[100%] w-2/3 pl-7 text-[1em] md:pl-16 flex justify-start md:text-5xl items-center font-inter">
        <p>{header(title)}</p>
        </div>
      </div>
      {
        films?.map((film,i)=>{
          return <CardDetailSearch key={i} img={film.Poster} title={film.Title} type={film.Type} year={film.Year} id={film.imdbID}/>
        })
      }
     { up ? <BtnScrol toTop={handleToTop}/> : null }
     <Footer/>
    </div>
    )
}
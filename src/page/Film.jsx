import React from "react"
import Input from "../assets/components/Input"
import Footer from "../assets/components/Footer"
import WraperCard from "../assets/components/WraperCard"
import BtnScrol from "../assets/components/BtnScrol"
import CardFilm from "../assets/components/CardFilm"
import {useState,useEffect} from "react"
import axios from "axios"
import FilmRecomend from "../assets/components/FilmRecomend"
import ResultSearchFilm from "../assets/components/ResultSearchFilm"
import {useNavigate} from "react-router-dom"
export default function Film(){
  const [input,setInput]=useState("")
  const [up,setUp]=useState(false)
  const [err,setErr]=useState({status:false,msg:null})
  const [films,setFilms]=useState({
    status:false,
    data:[]
  })
  const nvgt=useNavigate()
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 150){
        setUp(true)
      }else{
        setUp(false)
      }
    } )
  })
  const getFilm=async(url)=>{
    const req=await axios.get(url)
    if(req.data.Response === "True"){
      
     setFilms({status:true,data:req.data.Search})
    }else if(req.data.Response === "False"){
      setErr({status:true,msg:input})
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const url=`https://www.omdbapi.com/?s=${input}&apikey=c3e4c0c0`
    getFilm(url)
    setInput("")
  }
  const handleChange=({target:{value}})=>{
    if(value.length === 1){
      setErr({status:false,msg:null})
    }
    setInput(value)
  }
  const handleToTop=()=>{
    
     scrollTo({
        top:0,
        behavior:"smooth",
        duration:500
      })
  }
  const film=["avenger","dilan","superman","upin ipin","doraemon","pocong","anunnaki","world war","tusk","sword art online","ice age","the fast and the furious"]
  
  return (
    <div className="w-screen h-full bg-black">
    {up ? <BtnScrol toTop={handleToTop}/> : null}
     <Input change={handleChange} submit={handleSubmit} value={input} err={err}/>
     {
     films.status ? <ResultSearchFilm films={films.data}/> : err.status ? <FilmRecomend film={film}/> : <FilmRecomend film={film}/>

     }
     <Footer/>
    </div>
    )
}


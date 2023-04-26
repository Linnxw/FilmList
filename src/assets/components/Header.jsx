import {IoIosArrowForward} from "react-icons/io"
import img from "../imgs/20230408_113752.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
export default function Header(){
  const [input,setInput]=useState("")
  const [err,setErr]=useState(false)
  const nvgt=useNavigate()
  const handleChange=({target:{value}})=>{
    setInput(value)
    setErr(false)
  }
  const handleSubmit=(e)=>{
  e.preventDefault()
    if(input === "root"){
      nvgt("/film")
      setErr(false)
    }else{
      setErr(true)
    }
  }
  return (
    <div>
      <div className="bgs shadows shadow-inner h-[240px] md:h-[500px] w-screen flex flex-col items-center overflow-hidden relative">
      
      <div className="w-[100%] h-[100%] bg-black opacity-50 absolute">
      </div>
      <div className="w-screen flex items-center justify-start static mt-3 ml-3 z-10">
         <img src={img} alt="film list" className="h-16 md:h-36 absolute -top-3 md:-top-8 left-1"/>
      </div>
      <div className="w-[100%] p-1 mt-9 mb-1 md:mt-36 md:mb-3 text-white flex flex-col items-center justify-center static z-10 fonts">
         <h1 className="font-bold text-1xl md:text-5xl">Welcome to Film list</h1>
         <p className="font-light text-[.6em] md:text-[1.4em] text-slate-200">Filmlist,Website pencarian Film dengan UI yg friendly</p>
        <p className="font-light text-[.6em] md:text-[1.4em] text-slate-200">siap memulai?masukan token untuk memulai mencari film kesukaan</p>
       </div>
       <form className="flex items-center h-10 w-[100%] static z-10 justify-center" onSubmit={handleSubmit}>
         <input type="teks" placeholder="input token" className="py-[2px] px-2 md:py-1 md:px-3 outline-none ring-1 ring-[#4d4d4d] rounded-sm mr-1 bg-[#1c1c1cc4] text-[.7em] md:text-[1em] text-white w-48 h-7 md:w-80 md:h-11 tracking-wide" onChange={handleChange} required/>
         <div className="">
         <button className="font-noto h-7 md:h-11 bg-second rounded text-white px-2 md:px-3 flex items-center justify-center text-white text-[.7em] md:text-[.9em]">Mulai
          <span className="inline-block"><IoIosArrowForward/></span>
           </button>
      </div>
       </form>
       {
         err ? <p className="text-red-600 inter text-[.9em] static z-40 font-bold"> Token salah</p> : null
       }
      </div>
      <div className="w-screen h-1 md:h-2 bg-blackSecond"></div>
    </div>
    )
}
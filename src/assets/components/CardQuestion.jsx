import {IoMdAdd} from "react-icons/io"
import {RxCross2} from "react-icons/rx"
import React from "react"
import {useState} from "react"
export default function CardQuestion({quest,answer}){
  const [status,setStatus]=useState(false)
  const handleStatus=()=>{
    setStatus(status=>!status)
  }
  return (
   <div className="relative bg-[#2D2D2D]  z-20 w-[96%] md:w-[90%] md:mb-3 mb-1">
    <div className="w-[100%] px-2 h-7 md:h-14 md:px-4 flex items-center justify-between hover:bg-[#4E4E4E] text-white">
      <div className="fonts2 md:text-[.9em] text-[.6em] font-medium tracking-widest">
       <p>{quest}</p>
      </div>
      <div className="text-white static z-40 w-7 h-[100%] md:text-2xl flex items-center justify-center" 
      onClick={handleStatus}>
      {
        status ? <RxCross2/> : <IoMdAdd/>
      }
      
      
      </div>
    </div>
     {
       status ? (
       
      <div className="md:text-[.8em] text-[.6em] tracking-widest p-3 md:p-4 text-white font-inter w-[100%] ">
       <p>{answer}</p>
      </div>
       ):null
     }
      
   </div>
    )
}
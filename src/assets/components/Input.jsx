import React from "react"
import {HiOutlineArrowLeft} from "react-icons/hi"
import {useNavigate} from "react-router-dom"
export default function Input({change,submit,value,err}){
  const nvgt=useNavigate()
  return (
    <div className="w-screen flex flex-col items-center relative mb-5">
    <div className="w-screen flex items-center h-8 md:h-20 justify-start relativ">
        <div className="text-slate-200 mx-1 text-2xl md:text-5xl md:mx-3" onClick={()=>nvgt("/")}>
         <HiOutlineArrowLeft/>
        </div>
        <div className="ml-1/3 flex items-center justify-center h-8 md:h-20 md:left-[32%] md:text-3xl absolute left-[27%]">
          <h1 className="fonts text-slate-200">Mulai pencarian film</h1>
        </div>
    </div>
    <form onSubmit={submit} className="flex mt-3">
      <input type="teks" placeholder="masukan judul film" onChange={change} value={value} className={`py-[2px] px-2 md:py-1 md:px-3 outline-none ring-1 ${err.status ? "ring-red-500" : "ring-[#4d4d4d]"} rounded-sm mr-2 bg-[#1c1c1cc4] text-[.7em] md:text-[1em] text-white w-64 h-7 md:w-[600px] md:h-11 tracking-wide`} required/>
      <button type="submit" className="font-noto h-7 md:h-11 bg-second rounded text-white px-2 md:px-3 flex items-center justify-center text-white text-[.7em] md:text-[.9em]">Cari film</button>
    </form>
    {
      err.status ? <p className="text-red-500 inter bold absolute text-[.8em] -bottom-5 md:-bottom-7 left-20 md:left-[40%] md:text-[1em] md:tracking-wider">{err.msg} tidak ditemukan</p> : null
    }
    </div>
    )
}

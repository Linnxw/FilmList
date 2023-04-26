import React from "react"
import {MdKeyboardDoubleArrowUp} from "react-icons/md"
export default function BtnScroll({toTop}){
  return (
    <div className="w-10 h-10 md:w-28 md:h-28 md:text-5xl rounded-full bg-second text-white fixed bottom-5 right-5 text-2xl flex items-center justify-center" onClick={toTop}>
     <MdKeyboardDoubleArrowUp/>
    </div>
    )
}
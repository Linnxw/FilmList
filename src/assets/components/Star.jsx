import {FaStarHalfAlt,FaStar} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
export default function Star({star}){
   const ratingStar=Array.from({length:10},(m,i)=>{
     const number=i + 0.5
     return <span key={i}>{
       star >= i+1 ? <FaStar/> : star >= number ? <FaStarHalfAlt/> : <AiOutlineStar/>
     }</span>
   })
  return (
    <div className="text-yellow-500 text-[.8em] md:text-[1.3em] flex">
      {ratingStar}
    </div>
    )
}
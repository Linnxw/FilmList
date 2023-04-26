import {useNavigate} from "react-router-dom"
import WraperCard from "./WraperCard"
export default function FilmRecomned(props){
  const nvgt=useNavigate()
  const {film}=props
 const handleEvent=(title)=>{
   nvgt(`/film/${title}`)
 }
  return  (  
  <div className="w-screen h-full bg-black">
 
     {
       film.map((m,i)=>{
         return <WraperCard key={i} param={m} event={()=>handleEvent(m)}/>
       })
       
     }
    
     <div className="h-1 w-screen bg-black"></div>
    </div>)
}
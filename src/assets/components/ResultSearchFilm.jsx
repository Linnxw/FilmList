import CardDetailSearch from "./CardDetailSearch"
export default function ResultSearchFilm({films}){
  return ( 
  <div className="w-screen h-full bg-black mt-3">
     <div className="w-screen h-full">
     {
       films?.map((m,i)=>{
         return <CardDetailSearch key={i} title={m.Title} img={m.Poster} type={m.Type} year={m.Year} id={m.imdbID}/>
       })
       
     }
    </div>
     <div className="h-1 w-screen bg-black"></div>
    </div>)
}
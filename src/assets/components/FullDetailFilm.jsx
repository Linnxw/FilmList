import React from "react"
import Star from "./Star"
export default function FullDetailFilm({values}){
  return(
    <>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>{Object.keys(values)[0]}</p>
       <p>{values.Title}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Director : </p>
       <p> {values.Director}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Genre : </p>
       <p> {values.Genre}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Rating : </p>
       <Star star={values.imdbRating}/>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Actor : </p>
       <p> {values.Actors}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Type : </p>
       <p> {values.Type}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Awards : </p>
       <p> {values.Awards}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Box Office : </p>
       <p>{values.BoxOffice}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-t-2 border-white">
       <p>Language : </p>
       <p>{values.Language}</p>
     </div>
     <div className="w-screen h-10 items-center static z-40 flex flex justify-start pl-2 text-[.8em] text-white font-inter font-semibolf border-y-2 border-white">
       <p>Releas : </p>
       <p> {values.Released}</p>
     </div>
     </>
  )
}
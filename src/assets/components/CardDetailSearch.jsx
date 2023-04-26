import {useNavigate} from "react-router"
export default function CardDetailSearch(props){
  const nvgt=useNavigate()
  const {title,img,type,year,id}=props
  const handleDetailFilm=()=>{
    nvgt(`/film/detail/${id}`)
  }
  return (
    <div className="w-[96%] mt-3 md:mt-10 mx-auto h-52 md:h-[500px] bg-black border border-blackSecond rounded flex overflow-hidden">
      
        <img src={img} alt={img} className="object-cover w-[40%] h-[100%]"/>

      <div className="w-[60%] h-[100%] ml-2 flex flex-col text-white font-sans justify-between">
      <div className="ml-3 mt-3 flex flex-col justify-evenly">
          <h1 className={`font-bold ${title.length < 30 ? "text-[1.1em]" : title.length > 45 ? "text-[.7em]" : "text-[.9em]"} md:text-5xl md:mb-14 mb-3`}>{title}</h1>
          <p className="text-[1em] md:text-4xl mb-2 md:mb-10"> Type: {type}</p>
          <p className="text-[1em] md:text-4xl mb-10">Tahun: {year}</p>
        </div>
        <div>
        <button className="w-[96%] mb-2 h-7 md:h-20 md:text-3xl rounded bg-blackSecond text-white text-center mx-auto" onClick={handleDetailFilm}>Detail Film</button>
        </div>

      </div>
    </div>
    )
}
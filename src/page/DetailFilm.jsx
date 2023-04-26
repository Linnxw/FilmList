import {
  useParams
} from "react-router-dom"
import Star from "../assets/components/Star"
import {
  useNavigate
} from "react-router-dom"
import {
  HiOutlineArrowLeft
} from "react-icons/hi"
import {
  BsFillBookmarkStarFill,
  BsBookmarkStar,
  BsFillPlayFill
} from "react-icons/bs"
import bg from "../assets/imgs/bg.jpg"
import {
  useEffect,
  useState
} from "react"
import axios from "axios"
import FullDetailFilm from "../assets/components/FullDetailFilm"
import Footer from "../assets/components/Footer"
export default function DetailFilm() {
  const {
    id
  } = useParams()
  const nvgt=useNavigate()

  const [film,
    setFilm] = useState( {})
  const [fav,
    setFav] = useState(false)
  const getDetailFilm = async(i)=> {
    const url = `https://www.omdbapi.com/?i=${i}&apikey=c3e4c0c0`
    const req = await axios.get(url)
    setFilm(req.data)
  }
  useEffect(()=> {
    getDetailFilm(id)
  }, [])
  const filmsArray=Object.entries(film)
  
  return (
    <div className="w-screen md:h-screen h-full bg-black">
      <div className="absolute top-0 w-screen h-10 md:h-20 flex justify-start px-2 items-center z-40 text-white text-2xl font-sans">
        <div className="w-1/3 h-[100%] flex items-center md:text-5xl" onClick={()=>nvgt("/film")}>
      <HiOutlineArrowLeft />
    </div>
        <div className="w-2/3 h-[100%] flex items-center">
         <p className="text-[.7em] md:text-4xl font-semibold text-second">
        {film.Type} detail
      </p>
    </div>
    </div>
      <div className="bgs relative add-black-effect w-screen h-56 md:h-[500px]">
    </div>
        <div className="z-20 absolute left-3 md:left-40 top-24 md:top-[300px] h-48 w-72 md:h-96 md:w-[650px] rounded overflow-hidden flex effect-blur">
          <div className="h-[100%] w-32 md:w-72">
             <img src={film.Poster} alt={film.Poster} className="object-cover w-[100%] h-[100%]" />
    </div>
          <div className="pl-1 pt-2 md:pl-3 md:pt-3 h-[100%] w-40 md:w-[362px] flex flex-col font-inter text-white">
           <p className={`font-bold ${film.Title?.length > 25 ? "text-[.8em] md:text-2xl" : film.Title?.length > 43 && "text-[.6em] md:text-[.5em]"}`}>
        {film.Title}
      </p>
           <p className={`mt-1 ${film.Title?.length > 43 ? "text-[.7em]" : "text-[.8em]"} md:text-[1.4em] md:mt-3`}>
Type: {film.Type}
      </p>
           <p className={`${film.Title?.length > 43 ? "text-[.6em]" : "text-[.7em]"} italic md:mt-2 md:text-[1.4em]`}>
Genre: {film.Genre}
      </p>
           <p className="text-[.7em] md:text-[1.4em] md:mt-2">
Rating film :
      </p>
           <Star star={film.imdbRating} />
           <div className="w-[100%] h-full flex mt-5 md:mt-20 text-[.7em] justify-evenly">
             <button className="bg-sky-500 w-[48%] md:text-[1.7em] flex items-center justify-center md:h-12 h-7 rounded" onClick={()=>setFav(state=>!state)}>
             <span className="text-[1.3em] flex-items-center justify-center">
             {
          fav ? <BsBookmarkStar />: <BsFillBookmarkStarFill />
          }
             </span>
             Favorite
             </button>
             <button className="bg-second w-[48%] md:text-[1.7em] flex items-center justify-center h-7 md:h-12 rounded">
             <span className="text-[1.3em] flex-items-center justify-center">
               <BsFillPlayFill />
             </span>
             Tonton
             </button>
      </div>
    </div>
    </div>
    <div className="mt-20 md:mt-56 w-screen bg-black">
    <div className="py-7 pl-4 font-semibold font-inter text-white">
    <p className="text-2xl mb-3">Sinopsis</p>
    <p className="text-[.8em] font-normal">{film.Plot}</p>
    </div>
     <FullDetailFilm values={film}/>
     </div>
     <Footer/>
  </div>
)
}
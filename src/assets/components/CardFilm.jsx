export default function CardFilm({img,title}){
  return (
    <div className="flex flex-col md:h-80 h-48 rounded w-[120px] md:w-[200px] overflow-hidden md:mx-4 mx-1">
      <div className="h-3/4 w-[100%] rounded object-cover overflow-hidden">
        <img src={img} alt={img}/>
      </div>
      <div className="w-[100%] h-1/4 flex justify-start md:pt-3 md:px-3 pt-2 px-1">
    <p className={`text-white ${title.length > 21 ? "text-[.6em] md:text-[.8em]" : "text-[.8em] md:text-[1em]"} font-inter`}>{title}</p>
      </div>
    </div>
    )
}
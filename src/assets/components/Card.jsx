import imgc from '../imgs/tv.png'
import img from '../imgs/poster.png'
export default function Card(){
  return (
    <>
    <div className="h-[200px] md:h-[400px] w-screen flex items-center justify-evenly">
       <div className="fonts ml-2 mr-3 md:ml-3 md:mr-5 text-white w-1/2">
          <h1 className="font-semibold text-[1.2em] md:text-3xl md:mb-4 mb-2">Nikmati di Tv-mu.</h1>
        <h2 className="text-[.6em] mb:text-3xl font-light">Tonton di Smart Tv,playstation,Xbox,Chromecast,Aple Tv,Pemuyar blu-ray,dan banyak lagi</h2>
       </div>
       <div className="h-[180px] md:h-[340px] md:mr-5 flex items-center justify-center relative bg-black">
          <div className="absolute">
           <img src={imgc} alt="tv" className="h-[100%]"/>
          </div>
           <img src={img} alt="poster" className="h-[70%]"/>
       </div>
    </div>
  <div className="w-screen h-1 md:h-2 bg-blackSecond"></div>
 </>
    )
}
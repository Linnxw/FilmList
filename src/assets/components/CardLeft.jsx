import img from '../imgs/20230408_103945.png'
export default function CardLeft(){
  return (
    <>
    <div className="h-[200px] md:h-[400px] w-screen flex items-center justify-evenly bg-black">
       <div className="fonts ml-2 mr-3 md:ml-3 md:mr-5 text-white w-1/2">
          <h1 className="font-semibold text-[1.2em] md:text-3xl md:mb-4 mb-2">Tonton dimanapun.</h1>
        <h2 className="text-[.6em] mb:text-3xl font-light">Streaming film dan acara TV tak terbatas di ponsel, tablet, laptop, dan TV-mu.</h2>
       </div>
       <div className="w-1/2 md:mr-5">
           <img src={img} alt="device" className="h-[100%]"/>
       </div>
    </div>
  <div className="w-screen h-1 md:h-2 bg-blackSecond"></div>
 </>
    )
}
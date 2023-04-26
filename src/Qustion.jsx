import CardQuestion from "./assets/components/CardQuestion"
import {useState} from "react"
export default function Qustion(){
  const [quest,setQuest]=useState(
    [
      {
        q:"Apa itu FilmList?",
        a:"Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet."
      
      },
      {
        q:"Berapa biaya berlangganan di Filmlist?",
        a:"Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak."
      },
      {
        q:"Dimana saya bisa menonton?",
        a:"Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.."
      },
      {
        q:"Apa saja yg bisa saya cari di FilmList?",
        a:"Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau."
      },
      {
        q:"Apakah Filmlist sesuai bagi anak-anak?",
        a:"Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah."
      }
    ]
  )
 
  return (
      <div className="w-screen bg-black">
        <div className="w-[100%] py-5 md:py-8 text-white fonts text-2xl text-center">
          <h1 className="md:text-4xl">
          Pertanyaan umum
          </h1>
        </div>
        <div className="w-screen flex flex-col items-center justify-center">
        {
          quest.map((m,i)=>{
            return  <CardQuestion quest={m.q} key={i} answer={m.a}/>
          })
        }
         
        </div>
      </div>
    )
}
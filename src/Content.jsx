import Card from "./assets/components/Card"
import CardRight from "./assets/components/CardRight"
import CardLeft from "./assets/components/CardLeft"
import img1 from "./assets/imgs/mobile.jpg"
import img2 from "./assets/imgs/akun.png"
export default function Content(){
  const cardRight=[
    {
      title:"Download acara Tv untuk menontonnya secara offline",
      img:img1,
      desc:"Simpan acara favoritmu dengan mudah agar selalu ada acara Tv yg di tonton"
    },
    {
      img:img2,
      title:"Buat profile untuk anak",
      desc:"Kirim anak-anak untuk bertualang bersama karakter favorit mereka di dunia yang dibuat khusus untuk mereka—gratis dengan keanggotaanmu."
    }
   ]
  return (
    <>
      <Card/>
      <CardRight 
      img={cardRight[0].img} 
      title={cardRight[0].title}
      desc={cardRight[0].desc}/>
      <CardLeft/>
     <CardRight img={cardRight[1].img} title={cardRight[1].title} desc={cardRight[1].desc}/>
    </>
   )
}
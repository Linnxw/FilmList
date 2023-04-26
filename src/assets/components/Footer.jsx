export default function Footer(){
  const quest=[
"Tanya Jawab",
"Pusat Bantuan",
"Akun",
"Pusat Media",
"Hubungan Investor",
"Lowongan Kerja",
"Tukar Kartu Hadiah",
"Beli Kartu Hadiah",
"Cara Menonton",
"Ketentuan Penggunaan",
"Privasi",
"Preferensi Cookie",
"Informasi Perusahaan",
"Hubungi Kami",
"Uji Kecepatan",
"Informasi Legal",
"Hanya di Netflix"
    ]
  return (
    <div className="mt-8 md:mt-20 w-screen bg-black text-white">
    <p className="ml-5 font-inter text-[.6em] text-white">Ada pertanyaan ? Hub <a className="underline">088 888 777 111</a></p>
    <div className="w-screen pl-5 pt-8 h-32 grid grid-cols-3">
    {
      quest.map(m=>{
        return <div className="gap-x-10 inter text-[.5em] md:text-[.7em] underline md:gap-y-10 place-items-center">{m}</div>
      })
    }

    </div>
    <div className="w-screen h-full">
    <div className="mt-5">
      <select className="ml-10 h-5 w-44 bg-[rgb(22,22,22)] rounded text-[.7em] border-[1px] border-white">
        <option>Bahasa indonesia</option>
      </select>
    </div>
    <div className="ml-5 mt-5 pb-5 font-inter text-[.6em] md:text-[.8em] text-white tracking-widest">Film list</div>
    </div>
    </div>
    )
}
import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import Content from "../Content"
import Qustion from "../Qustion"
function Home() {
  return (
    <div className="bg-black w-screen h-full">
      <Header/>
      <Content/>
      <Qustion/>
      <Footer/>
    </div>
  )
}

export default Home
import React from "react"
import {Routes,Route} from "react-router-dom"
import DetailFilm from "./page/DetailFilm"
import Home from "./page/Home"
import Film from "./page/Film"
import AllFilm from "./page/AllFilm"
import NotFound  from "./page/NotFound"
function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/film" element={<Film/>}/>
     <Route path="*" element={<NotFound/>}/>
     <Route path="/film/:title" element={<AllFilm/>}/>
     <Route path="/film/detail/:id" element={<DetailFilm/>}/>
    </Routes>
  )
}

export default App

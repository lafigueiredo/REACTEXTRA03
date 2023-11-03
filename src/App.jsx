import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Home } from "./Pages/Home"
import { Contato } from "./Pages/Contato"
import { Cursos } from "./Pages/Cursos"
import { Skills } from "./Pages/Skills"
import { Sobre } from "./Pages/Sobre"
import { Page404 } from "./Pages/Page404"
import { Projetos } from "./Pages/Projetos"
import { Menu } from "./Components/Menu"

1

function App() {

  return (
    <>
    <GlobalStyle/>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="contato" element={<Contato/>}/>
          <Route path="cursos" element={<Cursos/>}/>
          <Route path="projetos" element={<Projetos/>}/>
          <Route path="skills" element={<Skills/>}/>
          <Route path="sobre" element={<Sobre/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

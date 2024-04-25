import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App

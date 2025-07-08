import Navbar from "./components/element/Navbar"
import About from "./components/navigationPage/About"
import Contact from "./components/navigationPage/Contact"
import Home from "./components/navigationPage/Home"
import Product from "./components/navigationPage/Product"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

     < Navbar />
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/product" element={ <Product />} />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact />} />
    </Routes>
    </>
  )
}

export default App

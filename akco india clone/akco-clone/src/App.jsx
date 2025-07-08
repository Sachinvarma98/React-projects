import React from 'react'
import Navigation from './navigation/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Management from './pages/Management'
import Blogs from './pages/Blogs'
import Utilities from './pages/Utilities'
import Contact from './pages/Contact'
import { Routes, Route } from "react-router-dom"
import Read from './pages/Read'
import Toggle from './navigation/toggle'
import Details from './pages/Details'
import Whatsapp from './navigation/Whatsapp'

const App = () => {
  return (
    <div>
      <Navigation />
      < Toggle />
      < Whatsapp />
     <Routes>
      <Route path='/' element={< Home />}/>
      <Route path='/about' element={< About />}/>
      <Route path='/service' element={< Service />}/>
      <Route path='/management' element={< Management />}/>
      <Route path='/blogs' element={< Blogs />}/>
      <Route path='/utilities' element={< Utilities />}/>
      <Route path='/contact' element={< Contact />}/>
      <Route path='/read' element={ <Read />}/>
      <Route path='/details' element={ < Details />} />
      <Route path='/servicedrop' element={ < Service />}/> 
     </Routes>

    </div>
  )
}

export default App
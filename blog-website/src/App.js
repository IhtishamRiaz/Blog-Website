import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Policy from './pages/Policy'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/policy' element={<Policy />} />
        <Route path='/*' element={<Error />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
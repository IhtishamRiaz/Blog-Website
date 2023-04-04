import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Policy from './pages/Policy'
import Contact from './pages/Contact'
import Post1 from './posts/Post1'
import BlogsProvider from './context/BlogsProvider'

const App = () => {
  return (
    <>
      <BlogsProvider>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/policy' element={<Policy />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/register' element={<Signup />} />
          <Route exact path='/post/:postid' element={<Post1 />} />
          <Route path='/*' element={<Error />} />
        </Routes>

        <Footer />

      </BlogsProvider>
    </>
  )
}

export default App
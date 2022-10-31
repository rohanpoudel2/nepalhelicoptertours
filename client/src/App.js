import React from 'react'
import { Container } from '@mui/system'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Tours from './pages/tours/Tours'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import Tour from './pages/tour/Tour'
import Contact from './pages/contact/Contact'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Container maxWidth='xl'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tours/:type' element={<Tours />} />
            <Route path='/tours/:type/:tourID' element={<Tour />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
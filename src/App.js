import React from 'react'
import { Container } from '@mui/system'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Tours from './pages/tours/Tours'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Container maxWidth='xl'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tours/:type' element={<Tours />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
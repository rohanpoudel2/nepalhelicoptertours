import React, { useEffect } from 'react'
import { Container } from '@mui/system'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Tours from './pages/tours/Tours'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import Tour from './pages/tour/Tour'
import Contact from './pages/contact/Contact'
import ExtraTour from './pages/extratour/ExtraTour'
import Gallery from './pages/gallery/Gallery'
import Why from './pages/why/Why'
import Affiliate from './pages/affiliate/Affiliate'


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
            <Route path='/extra/:id' element={<ExtraTour />} />
            <Route path='/gallery/:type' element={<Gallery />} />
            <Route path='/why' element={<Why />} />
            <Route path='/affiliate' element={<Affiliate />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { Container } from '@mui/system'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import './app.scss'

const App = () => {
  return (
    <div className='app'>
      <Container maxWidth='xl'>
        <NavBar />
        <Home />
        <Footer />
      </Container>
    </div>
  )
}

export default App
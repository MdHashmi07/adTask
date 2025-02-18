import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Main from './components/Main'
import TickerScroll from './components/TickerScroll'
import AddTaskWorksWith from './components/AddTaskWorksWith'
import Features from './components/Features'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import ContactSUs from './components/ContactSUs'
import StartTrail from './components/StartTrail'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <TickerScroll/>
      <AddTaskWorksWith/>
      <Features/>
      <Services/>
      <Testimonials/>
      <ContactSUs/>
      <StartTrail/>
      <Footer/>
    </div>
  )
}

export default App




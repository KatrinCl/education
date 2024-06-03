import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoP from './components/VideoP'

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
    <Navbar />
    <Hero />
    <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer' />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student Says' />
      <Testimonials />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact />
      <Footer />
    </div>
    <VideoP playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App

import { useEffect } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import TrustUs from './components/Trust'
import CardsWeBuy from './components/CardsWeBuy'
import HowItWork from './components/HowItWork'
import Counter from './components/Counters'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  })

  return (
    <div className="App">
      <Header />
      <Hero />
      <TrustUs />
      <CardsWeBuy />
      <HowItWork />
      <Counter />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App

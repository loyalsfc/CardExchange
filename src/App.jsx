import { useEffect } from 'react'
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import{ createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"

function App() {
  useEffect(()=>{
    AOS.init({duration: 1000});
  })

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'

// Single pages
import Hero from './pages/Hero'
import MenuSection from './pages/MenuSection'
import AboutSection from './pages/AboutSection'
import CoffeeGallery from './pages/GallerySection'
import ReservationSection from './pages/ReservationSection'
import ContactSection from './pages/ContactSection'
import Footer from './components/Footer'

// Router pages
import Menu from './router/Menu'
import Gallery from './router/Gallery'
import Contact from './router/Contact'
import VisitUs from './router/VisitUs'
import BookaSeat from './router/BookaSeat'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        {/* Home page */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <MenuSection />
              <CoffeeGallery/>
              <AboutSection />
              <ReservationSection />
              <ContactSection />
              <Footer />
            </>
          } 
        />

        {/* Other pages */}
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/VisitUs" element={<VisitUs />} />
        <Route path="/BookaSeat" element={<BookaSeat />} />

      </Routes>
    </Router>
  )
}

export default App

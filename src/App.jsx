import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Services from './Component/Services'
import Projects from './Component/Projects'
import Testimonials from './Component/Testimonials'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

// import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Services from './Component/Services'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

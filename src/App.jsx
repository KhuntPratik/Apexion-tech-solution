import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
import Layout from './pages/Layout'
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";

function App() {


  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

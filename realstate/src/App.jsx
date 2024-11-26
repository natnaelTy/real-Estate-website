
import './index.css'
import NavBar from './components/Header/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App

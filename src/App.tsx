import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Ser/Services'
import Counter from './components/Ser/Counter'
import Contact from './components/Contact/Contact'
// import Footer from './Footer/Footer'
import Footer from './components/Footer/Footer'
// import Ser from './components/Ser/Services'


function App() {
  return (
    <>
      <div className='scrollable'>
        <Header />
        <Hero />
        <About />
        <Services />
        <Counter />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App

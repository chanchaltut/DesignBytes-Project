import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './pages/Services'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App 
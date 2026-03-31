import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import GetStarted from './components/getstarted'
import Hero from './components/hero'
import Pricing from './components/pricing'
import ServiceCard from './components/servicecard'
import Stats from './components/stats'

function App() {

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
    <Stats></Stats>
    <ServiceCard></ServiceCard>
    <GetStarted></GetStarted>
    <Pricing></Pricing>
    <Footer></Footer>
    </>
  )
}

export default App

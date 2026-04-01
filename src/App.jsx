import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Footer from './components/footer'
import GetStarted from './components/getstarted'
import Hero from './components/hero'
import Pricing from './components/pricing'
import ServiceCard from './components/servicecard'
import Stats from './components/stats'
import Cart from './components/cart'
import productsData from './json/products.json'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [cart, setCart] = useState([])
  const [activeTab, setActiveTab] = useState('products')

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product])
      toast.success(`${product.name} added to cart.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } else {
      toast.warning(`${product.name} is already in your cart!`, {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  const handleRemove = (id) => {
    const itemToRemove = cart.find((item) => item.id === id)
    setCart(cart.filter((item) => item.id !== id))
    if (itemToRemove) {
      toast.info(`${itemToRemove.name} removed from cart.`, {
        position: "top-right",
        autoClose: 2000,
      })
    }
  }

  const handleCheckout = () => {
    toast.success('Thank you for your purchase! 🎉 Your order is confirmed.', {
      position: "top-right",
      autoClose: 3000,
    })
    setCart([])
  }

  return (
    <>
      <Nav cartCount={cart.length} setActiveTab={setActiveTab} />
      <section id="hero"><Hero /></section>
      <Stats />
      
      <div id="products">
        {activeTab === 'products' ? (
          <ServiceCard
            products={productsData}
            onAddToCart={handleAddToCart}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            cartCount={cart.length}
          />
        ) : (
          <Cart
            cart={cart}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>

<div id="features">
      <GetStarted />
</div>
<div id="pricing">
      <Pricing />
</div>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App

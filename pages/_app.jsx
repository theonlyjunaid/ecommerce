import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState(0)
  const router = useRouter()
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(30)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')))
        saveCart(JSON.parse(localStorage.getItem('cart')))
      }
    } catch (error) {
      console.log(error)
      localStorage.clear()
    }
    const token = localStorage.getItem('token')
    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }

  }, [router.query])

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let keys = Object.keys(myCart)
    keys.forEach((k) => {
      subt += myCart[k].price * myCart[k].qty
    })

    setSubTotal(subt)
    // console.log(cart)
  }
  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient }
    }

    setCart(newCart)
    saveCart(newCart)
    // console.log(cart)

  }
  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("cart cleared")
  }
  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
    // console.log(cart)
  }
  const buyNow = (itemCode, qty, price, name, size, varient) => {
    let newCart = { itemCode: { qty: 1, price, name, size, varient } }


    setCart(newCart)
    saveCart(newCart)
    router.push("/checkout")
  }
  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push("/")
  }
  return <div>
    <LoadingBar
      color='#f11946'
      progress={progress}
      waitingTime={500}
      transitionTime={300}
      onLoaderFinished={() => setProgress(0)}
    />
    <Navbar logout={logout} user={user} key={key} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}  {...pageProps} buyNow={buyNow} />
    <Footer />
  </div>

}

export default MyApp

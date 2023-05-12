import { useEffect,} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { getAllProductsThunk } from './store/slices/products.slices'

import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import Header from './components/shared/Header'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import Login from './pages/login'
import Cart from './pages/cart'
import Purchases from './pages/Purchases'







function App() {

  const dispatch = useDispatch()

  useEffect(() => {
dispatch(getAllProductsThunk())
  }, [])



  return (
<div className='app'>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/product/:id' element={<ProductId />}/>
    <Route path='/purchases' element={<Purchases />}/>
    <Route path='/cart' element={<Cart />}/>
    <Route/>
    
  </Routes>
</div>
  )
}

export default App

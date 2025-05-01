import React from 'react'
import { Route, Routes ,useLocation } from 'react-router-dom'
import Home from '../components/Home'
import ProductDetails from '../components/ProductDetails'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Home />} />

        <Route path='/product/detail/:id' element={<ProductDetails />} />
    </Routes>
    
  )
}

export default Routing
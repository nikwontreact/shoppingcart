import React from 'react'
import ProductCard from './ProductCard'
const ProductGrid = () => {
  return (
    <div className='grid grid-cols-3 gap-4 p-4 bg-white'>
     <ProductCard />    
    </div>
  )
}

export default ProductGrid
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductIdInfo from '../components/ProductId/ProductIdInfo'
import Slidermgs from '../components/ProductId/Slidermgs'
import SimilarProduct from '../components/ProductId/SimilarProduct'

const ProductId = () => {
const { id } = useParams()

const URL_BASE = import.meta.env.VITE_REACT_APP_URL
  const url = `${URL_BASE}/products/${id}`

const [product, getProductById] = useFetch(url)

useEffect(() => {
getProductById()
}, [id])

  return (
    <div>
        <Slidermgs product={product}/>
  <ProductIdInfo product={product} />
  <SimilarProduct product={product}/>

    </div>
  )
}

export default ProductId
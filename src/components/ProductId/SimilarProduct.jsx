import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'

const SimilarProduct = ({product}) => {
  
    const URL_BASE = import.meta.env.VITE_REACT_APP_URL
    const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`

const [ filterProducts, getProductByCategory] = useFetch(url)

useEffect(() => {


    if(product){
        getProductByCategory()
    }

}, [product])



  
    return (
    <section>
        <h1>Discover similar products</h1>
        <div>
            {
                filterProducts?.map( product => {
                    if(product.id !== product.id)
                    return(
                        <CardProduct
                        key={product.id}
                        product={product}
                        />
                    )
                }

                )
            }
        </div>
    </section>
  )
}

export default SimilarProduct
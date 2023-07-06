import React from 'react'
import './styles/cardProducts.css';
import { useNavigate } from 'react-router-dom';
import useCrudCart from '../../hooks/useCrudCart';



const CardProduct = ({product}) => {
const navigate =  useNavigate()
const{ AddProductToCart } =  useCrudCart()

const handleSelectProductId = () => {
    navigate(`/product/${product.id}`)
}

const handleClickBtn = e => {
e.stopPropagation()
const data = {
    quantity: 1,
    productId: product.id,
}
AddProductToCart(data)
}

  return (

            <article className='product' onClick={handleSelectProductId}>
        <header className='product__header'>
        <img className='produc__img produc__img1' src={product?.productImgs?.[1]?.url} alt="" />
<img className='produc__img produc__img2' src={product?.productImgs?.[0]?.url} alt="" />
        </header>
        <section className='product__section'>

            <h2 className='product__title'>{product?.title}</h2>
        </section>
        <div className='btn_information'>
        <div className='product__price'>
            <span className='product__price-label'>Price </span>
            <span className='product__price-value'>{product?.price}</span>
        </div>
        <button onClick={handleClickBtn} className='product__btn'>
        <i className='bx bx-cart product__btn-icon'></i>
        </button>
        </div>

    </article>


  )
}

export default CardProduct
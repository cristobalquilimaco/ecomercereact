import axios from "axios"
import getConfigToken from "../utils/getConfigToken"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getAllProductsCartThunk } from "../store/slices/cart.slice"

const URL_BASE = import.meta.env.VITE_REACT_APP_URL
const url = `${URL_BASE}/purchase`

const usePurchase = () => {

    const [purchases, setPurchases] = useState()

    const dispatch = useDispatch()

    const buyThisCart = () =>{
        
        axios.post(url, {}, getConfigToken())
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductsCartThunk())
        })
        .catch(err => console.log(err))
    }

const getAllProductsPurchases = () =>{

axios.get(url, getConfigToken())
.then(res => setPurchases(res.data))
.catch(err => console.log(err))

}

return { purchases, getAllProductsPurchases, buyThisCart }

}

export default usePurchase
import React, { createContext, useEffect ,useState} from 'react'
import instance from './axios'

export const ProductContext = createContext()
const Context = (props) => {
    const [products, setProducts] = useState(null)
    const getProducts=async()=>{
        try {
          const {data}=await instance.get(`/products`);
          setProducts(data)
        } catch (error) {
          console.log(error)
        }
      }
      const uniqueCat =
      products && products.reduce((acc, i) => [...acc, i.category], []);
    const uniqueCats = [...new Set(uniqueCat)];
      useEffect(()=>{
        getProducts()
      },[])
  return (
    <ProductContext.Provider value={{products, setProducts,uniqueCats}}>{props.children}</ProductContext.Provider>
  )
}

export default Context
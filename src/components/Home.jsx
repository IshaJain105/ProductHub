import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import { ProductContext } from "../utils/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { products , uniqueCats } = useContext(ProductContext);
  const { search } = useLocation();
  const query = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null)

  const getFilteredProducts=async()=>{
    try {
      const fProducts = await products && products.filter((product) => product.category == query);
      setfilteredProducts(fProducts)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  useEffect(()=>{
    if(query == "undefined") setfilteredProducts(products)
    else getFilteredProducts()
  },[query,products])

  return (
    <div className="w-screen h-screen flex">
      <div className="absolute"><Header /></div>
      <Nav />
      <div className="w-[85%] h-full bg-amber-100 p-15 flex gap-9 flex-wrap overflow-auto">
        {filteredProducts &&
          filteredProducts.map((product, index) => (
            <Link 
              key={index}
              className="w-40 max-h-fit hover:text-amber-600 rounded-md  "
              to={`/product/detail/${product.id}`}
            >
              <div className="w-full h-40 rounded-md bg-white p-2">
                <img
                  className="object-contain w-full h-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <h1 className="text-sm font-bold mt-2 ">{product.title}</h1>
              <h2 className="font-semibold opacity-50 mt-1 mb-2">
                $ {product.price}
              </h2>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Home;

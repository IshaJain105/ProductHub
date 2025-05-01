import React, { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
const ProductDetails = () => {
   const {id} = useParams();
   
   const {products}= useContext(ProductContext);
   const product= products && products.filter(elem => elem.id == id)
   console.log()
  return (
    <div className="w-full h-full  flex flex-col">
      <Header />
      <div className="w-full max-h-[92%]  flex justify-center items-center">
        <div className="w-[70%] h-[70%] flex gap-3 items-center text-amber-100 ">
          <div className="w-[40%] h-full">
            <img
              className="w-full h-full object-contain"
              src={product[0].image}
              alt=""
            />
          </div>
          <div className="w-[60%]  flex flex-col bg-amber-600 p-10 rounded-md">
            <h1 className="text-3xl font-bold mb-3 ">
            {product[0].title}
            </h1>
            <h3 className="text-zinc-100 opacity-70 mb-5">{product[0].category}</h3>
            <h2 className="text-xl font-bold ">$ {product[0].price}</h2>
            <p className="text-sm mt-5">
            {product[0].description}
            </p>
            <div className="flex gap-10 mt-10">
              <button className="px-3 py-0.5 border text-amber-100 rounded-md hover:bg-amber-100 hover:text-amber-600 flex items-center gap-2 ">
                <CiEdit className="w-5 h-5" />
                Edit
              </button>
              <button className="px-3 py-0.5 border text-amber-100 rounded-md  hover:bg-amber-100 hover:text-amber-600 flex items-center gap-2 ">
                {" "}
                <AiOutlineDelete className="w-5 h-5" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

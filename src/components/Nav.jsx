import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const { uniqueCats } = useContext(ProductContext);

  

  return (
    <nav className="w-[15%] h-full text-amber-100 bg-amber-600 py-[6%] flex flex-col items-center gap-4">
      <button className="px-3 py-2 rounded-md border hover:bg-amber-100 hover:text-amber-600">
        Add New Product
      </button>
      <hr className="w-[95%]" />
      <div className=" w-full h-full flex flex-col items-center gap-5 ">
        <h1 className="text-3xl">Categories.</h1>
        <div className="w-[90%] max-h-[85%] overflow-y-auto px-3">
          {uniqueCats &&
            uniqueCats.map((cat, index) => (
              <Link key={index} className=" mb-2 flex gap-4 items-center hover:text-amber-50 hover:scale-105 break-all " to={`/products/?category=${cat}`}>
                <span className=" w-2 h-2 rounded-full bg-amber-100 block"></span>
                {cat}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

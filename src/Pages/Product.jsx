import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { DataContext } from "../Component/Context/DataProvider";

function Product() {
  const [products] = useContext(DataContext).products;

  return (
   <div className="container mx-auto xl:max-w-[1280px]  "> 
       <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        <ProductCard product={product} key={product._id}  />
      ))}
    </div>
   </div>
  );
}

export default Product;

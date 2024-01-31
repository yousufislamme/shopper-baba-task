"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import toast, { Toaster } from "react-hot-toast";

const Products = () => {
  //  products data fetching

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  // add cart


  // const addToCart = (product) => {
  //   if (cartItems.indexOf(product) !== -1) return;
  //   setCartItems([...cartItems, product]);
  //   toast.success("Product Added");
  //   // console.log(cartItems);
  // };

  return ( 
    <div className="w-full px-[50px]">
      {/* ml-[90px] grid sm:grid-cols-1 md:grid-cols-3 items-center gap-5 */}
      <div className=" flex flex-col justify-evenly md:flex-row lg:flex-row flex-wrap gap-4 items-center">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from "react";

function ProductCard({ product }) {
  return (
    <div className=" bg-white shadow-lg m-4 p-4 relative group transition-transform duration-500 transform ease-in-out hover:scale-110">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      <div className="flex justify-evenly my-3">
      <div>
        <div className="text-gray-700 mt-2 text-lg">{product.name}</div>
        <div className="text-gray-600 text-sm">{product.price}</div>
      </div>
      <div><button className="p-2 text-white textlg bg-purple-800 rounded-xl  transition-transform duration-500 transform ease-in-out hover:scale-110">Add To Cart</button></div>
   
      </div>
       </div>
  );
}

export default ProductCard;

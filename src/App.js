import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductCard from "./Components/ProductCard/ProductCard";
 

function App() {
  const products = [
    {
      name: "Classic White Sneakers",
      image: "https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-4197.jpg",
      price: "$59.99",
    },
    {
      name: "Running Shoes",
      image: "https://n.nordstrommedia.com/id/842e824a-ec57-42aa-ba44-fa100756a349.jpeg?h=900&w=750",
      price: "$79.99",
    },
    {
      name: "Casual Slip-Ons",
      image: "https://images.othoba.com/images/thumbs/0499425_mens-genuine-leather-casual-slip-on-loafer-black.webp",
      price: "$49.99",
    },
    {
      name: "High-Top Boots",
      image: "https://i0.wp.com/www.pristineshop.com.bd/wp-content/uploads/2022/10/O1CN01SOWqP31xHUiZP8Os1_2689906418-0-cib.jpg?fit=800%2C800&ssl=1",
      price: "$89.99",
    },
    {
      name: "Formal Dress Shoes",
      image: "https://www.batabd.com/cdn/shop/files/1_7bca53b5-6195-45df-99d6-29dc809ae2af_1024x1024.jpg?v=1693116344",
      price: "$69.99",
    },
    {
      name: "Hiking Boots",
      image: "https://cdn.thewirecutter.com/wp-content/media/2023/03/hikingboots-2048px-2820.jpg",
      price: "$99.99",
    },
  ];
  
  return (
   <div>
    <Header/>
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

    <hr className="mt-8 mb-2 border-t-2 border-gray-300" />
    <Footer/>
   </div>
  );
}

export default App;


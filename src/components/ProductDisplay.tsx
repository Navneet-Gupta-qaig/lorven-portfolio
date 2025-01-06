import React from "react";

const ProductDisplay = () => {
  return (
    <section id="products" className="min-h-screen flex items-center">
      <div className=" md:px-12">
        <div className="opacity-0 animate-[fadeIn_1s_ease-in_forwards] scroll-mt-20">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white  to-yellow-400 bg-clip-text text-transparent 
                drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] text-center"
          >
            Unlock Your Creative Potential with Lorven AI Products
          </h1>
          {/* Add your products content here */}
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;

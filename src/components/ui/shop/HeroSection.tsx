import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative rounded bg-gray-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.primermagazine.com/wp-content/uploads/2021/06/mens-clothing-brands_wide.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="container relative mx-auto flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Discover Amazing Products
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Shop the latest trends and exclusive deals just for you.
        </p>
        <a
          href="#shop"
          className="mt-8 inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

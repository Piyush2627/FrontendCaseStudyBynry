import React from "react";

interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Stylish Watch",
    imageUrl:
      "https://t3.ftcdn.net/jpg/03/34/79/68/240_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
    price: "$199.99",
  },
  {
    id: 2,
    title: "Smartphone",
    imageUrl: "https://source.unsplash.com/random/400x300?smartphone",
    price: "$499.99",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    imageUrl: "https://source.unsplash.com/random/400x300?headphones",
    price: "$89.99",
  },
  {
    id: 4,
    title: "Sneakers",
    imageUrl: "https://source.unsplash.com/random/400x300?sneakers",
    price: "$129.99",
  },
  {
    id: 5,
    title: "Laptop",
    imageUrl: "https://source.unsplash.com/random/400x300?laptop",
    price: "$899.99",
  },
  {
    id: 6,
    title: "Camera",
    imageUrl: "https://source.unsplash.com/random/400x300?camera",
    price: "$599.99",
  },
];

const BentoGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold">Exclusive Offers</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-700">{product.price}</p>
              <a
                href="#"
                className="mt-2 block rounded-lg bg-blue-500 py-2 text-center font-semibold text-white transition duration-300 hover:bg-blue-600"
              >
                Buy Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;

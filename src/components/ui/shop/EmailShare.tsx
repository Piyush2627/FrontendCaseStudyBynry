import React from "react";

interface Product {
  id: string;
  name: string;
}

const products: Product[] = [
  { id: "123", name: "Product 1" },
  { id: "456", name: "Product 2" },
  { id: "789", name: "Product 3" },
];

const EmailShare: React.FC = () => {
  const handleEmailClick = (productId: string) => {
    const email = "piyushdahiwadkar89@gmail.com"; // Replace with the recipient's email
    const subject = "Check out this product!";
    const body = `I found this amazing product: ${productId}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <button onClick={() => handleEmailClick(product.id)}>
              Share via Email
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailShare;

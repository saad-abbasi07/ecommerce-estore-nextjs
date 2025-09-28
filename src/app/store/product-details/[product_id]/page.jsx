import React from "react";
import Container from "@/components/home/Container";

// fetch single product by id
async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const data = await res.json();
  return data.product; // API returns { product: {...} }
}

export default async function ProductDetailsPage({ params }) {
  const { product_id } = params;
  const product = await getProductById(product_id);

  return (
    <div className="bg-gray-100 py-6 md:py-10">
      <Container>
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-xl md:text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {product.description}
            </p>
            <p className="text-pink-500 font-bold text-2xl md:text-3xl">
              ${product.price}
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition w-full md:w-1/2">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

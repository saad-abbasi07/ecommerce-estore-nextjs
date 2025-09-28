import React from "react";
import Container from "./Container";
import Image from "next/image";
import { getProductsLimited } from "@/library";
import { MOCK_PRODUCTS } from "@/mock/products";

export default async function FeaturedProducts() {
  // Try network first via library (with multiple fallbacks), then use mock
  let products = await getProductsLimited(5);
  if (!Array.isArray(products) || products.length === 0) {
    products = MOCK_PRODUCTS.slice(0, 5);
  }

  return (
    <div className="bg-gray-100 py-8">
      <Container>
        <h1 className="text-center text-3xl font-bold mb-6">
          Featured Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-xl max-w-xs mx-auto w-full"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         20vw"
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-sm sm:text-md font-semibold text-center line-clamp-2 mb-2">
                {p.title}
              </h2>
              <p className="text-pink-500 font-bold text-base sm:text-lg mb-3">
                ${p.price}
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md transition text-sm sm:text-base">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

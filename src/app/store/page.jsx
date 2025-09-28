import React from "react";
import Link from "next/link";
import Container from "@/components/home/Container";
import { getCategories, getProducts } from "@/library";

export default async function StorePage() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <div className="bg-gray-100 py-8">
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Sidebar - Categories */}
        <CategoryListing categories={categories} />

        {/* Products Grid */}
        <ProductListing products={products} />
      </Container>
    </div>
  );
}

function CategoryListing({ categories }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md col-span-1 h-fit">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">categories</h2>
      <ul className="space-y-2">
        {categories && categories.length > 0 ? (
          categories.map((c, i) => (
            <li
              key={"category-" + i}
              className="cursor-pointer capitalize text-gray-700 hover:text-pink-500 hover:pl-2 transition-all"
            >
              {c.toLowerCase()}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No Categories Available</li>
        )}
      </ul>
    </div>
  );
}

function ProductListing({ products }) {
  return (
    <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products && products.length > 0 ? (
        products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="relative w-40 h-40 mb-4">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="text-md font-semibold text-center line-clamp-2 mb-2">
              {p.title}
            </h2>
            <p className="text-pink-500 font-bold text-lg mb-3">${p.price}</p>

            {/* Buy Now → Correct Product Details Page */}
            <Link
              href={`/store/product-details/${p.id}`}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition w-full text-center"
            >
              Buy Now
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No Products Found</p>
      )}
    </div>
  );
}

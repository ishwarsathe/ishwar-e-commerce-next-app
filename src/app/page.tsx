"use client";

import Image from "next/image";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-8 px-16 bg-white sm:items-start">
        <Image
          src="/onlyPlantsBg.jpg"
          alt="Green plants collage"
          width={240}
          height={80}
          className="rounded-lg object-contain w-full h-1/5 mb-4"
          priority
        />
        {/* Featured Products Section */}
        <section className="w-full max-w-6xl mb-14">
          <h2 className="text-2xl font-bold mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-medium transition"
            >
              View All
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

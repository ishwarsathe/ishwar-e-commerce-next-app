"use client";

import { useCartContext } from "../context/CartContext";
import { Product } from "../data/products";

type Props = {
    product: Product;
    showDetails?: boolean;
};

export default function ProductCard({ product, showDetails }: Props) {
    const { addToCart } = useCartContext();

    return (
        <div className="border rounded-lg p-6 bg-white shadow relative">
            {showDetails && (
                <button
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow transition"
                    title="Add to Cart"
                    aria-label="Add to cart"
                    onClick={() => addToCart(product)}
                >
                    {/* Cart Icon SVG */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="8" cy="16" r="1.3" />
                        <circle cx="15" cy="16" r="1.3" />
                        <path d="M3 5h14l-1.1 7.2A1.8 1.8 0 0 1 14.13 14H7.87a1.8 1.8 0 0 1-1.77-1.45L3 5zm2-3h3" />
                    </svg>
                </button>
            )}
            <h2 className="text-xl font-semibold mb-2 ">{product.name}</h2>
            <p className="mb-2 ">{product.description}</p>
            <p className="mb-2 font-bold ">${product.price}</p>
        </div>
    );
}

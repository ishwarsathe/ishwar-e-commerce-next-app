import Link from "next/link";
import products from "../data/products";

export default function ProductList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 bg-white shadow">
                    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                    <p className="mb-2">{product.description}</p>
                    <p className="font-bold text-blue-600 mb-2">${product.price}</p>
                    <Link
                        href={`/products/${product.id}`}
                        className="text-blue-500 underline"
                    >
                        View Details
                    </Link>
                </div>
            ))}
        </div>
    );
}

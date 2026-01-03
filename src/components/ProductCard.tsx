import { useCartContext } from "../context/CartContext";
import { Product } from "../data/products";

type Props = {
    product: Product;
    showDetails?: boolean;
};

export default function ProductCard({ product, showDetails }: Props) {
    const { addToCart } = useCartContext();

    return (
        <div className="border rounded-lg p-6 bg-white shadow">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2 font-bold text-blue-600">${product.price}</p>
            {showDetails && (
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            )}
        </div>
    );
}

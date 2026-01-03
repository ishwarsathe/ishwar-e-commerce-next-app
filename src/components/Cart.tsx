import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart } = useCartContext();

    if (cart.length === 0) {
        return <p>Your cart is empty.</p>;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <ul className="mb-6">
                {cart.map((item) => (
                    <li key={item.id} className="border-b py-2 flex justify-between items-center">
                        <span>
                            {item.name} - ${item.price}
                        </span>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <p className="font-bold">Total: ${total.toFixed(2)}</p>
        </div>
    );
}

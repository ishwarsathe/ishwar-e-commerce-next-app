export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
};

const products: Product[] = [
    {
        id: "p1",
        name: "Premium T-Shirt",
        description: "A stylish premium tee for all occasions.",
        price: 29.99,
    },
    {
        id: "p2",
        name: "Leather Wallet",
        description: "Handmade genuine leather wallet.",
        price: 49.99,
    },
    {
        id: "p3",
        name: "Classic Sneakers",
        description: "Comfortable sneakers in timeless design.",
        price: 69.99,
    },
];

export default products;

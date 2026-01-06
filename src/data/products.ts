export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: "plants" | "seeds" | "pots-planters" | "plant-care";
};

const products: Product[] = [
    {
        id: "p1",
        name: "Ficus Lyrata",
        description: "A visually striking indoor 'Fiddle Leaf Fig' plant.",
        price: 699.99,
        category: "plants",
    },
    {
        id: "p2",
        name: "Basil Seeds",
        description: "High-quality basil seeds for your herb garden.",
        price: 29.99,
        category: "seeds",
    },
    {
        id: "p3",
        name: "Ceramic Pot Medium",
        description: "A modern white ceramic pot for plants.",
        price: 149.99,
        category: "pots-planters",
    },
    {
        id: "p4",
        name: "Organic Plant Food",
        description: "A balanced organic plant fertilizer for healthy growth.",
        price: 89.99,
        category: "plant-care",
    },
    // Add more if needed
];

export default products;

import { notFound } from "next/navigation";
import ProductCard from "../../../components/ProductCard";
import products from "../../../data/products";

type Params = {
    params: {
        id: string;
    };
};

export default function ProductDetailsPage({ params }: Params) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <ProductCard product={product} showDetails />
        </main>
    );
}

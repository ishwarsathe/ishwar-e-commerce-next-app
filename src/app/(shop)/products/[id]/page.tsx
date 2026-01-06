import { notFound } from "next/navigation";
import ProductCard from "../../../../components/ProductCard";
import products from "../../../../data/products";

type Params = {
    params: {
        id: string;
    };
};

export default async function ProductDetailsPage({ params }: Params) {
    const { id } = await params;
    console.log('params', id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <ProductCard product={product} showDetails />
        </main>
    );
}

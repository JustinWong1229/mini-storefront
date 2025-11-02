'use client';
import ProductCard from "./ProductCard"

export default function ProductList ({ products, onAdd}) {
    return (
        <div>
            <p>Product List</p>
            {products.map (p => (
                <ProductCard key={p.id} product={p} addCart={addCart} />
            ))}
        </div>
    )
}
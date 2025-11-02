'use client';

export default function ProductCard({ product, addCart}) {
    const outOfStock = stock =0

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
        {outOfStock ? (
            <button disabled>Out of stock</button>
        ):(
            <button onClick={() => addCart(product)}>Add to cart</button>
        )}
        </div>
    )
}

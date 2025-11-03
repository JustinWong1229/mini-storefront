'use client';
import { useEffect, useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function SalesDashboard() {
    const [sales, setSales] = useState([]);
    const [filters, setFilters] = useState({price:'', category:''});
    const [cart, setCart] = useState({});
    const update = (k, v) => setFilters(prev => ({...prev, [k]: v}));

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(setSales)
        .catch(console.error);
    }, []);
    const addCart = (product) =>
        setCart(prev => ({...prev, [product.id]: (prev[product.id] ||0)+1}));

    const decFromCart = (id) =>
        setCart(prev => {
            const next = (prev[id] ||0)-1;
            if (next <=0) {
                const { [id]: _, ...rest} = prev;
            }
            return {...prev, [id]: next};
        });
        const resetCart = () => setCart ({});
         return(
        <div>
            <h2> Catalog</h2>
            <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
            <CategoryFilter value={filters.category} onChange={(v) => update('category', v)} />
            <ProductList products={sales} addCart={addCart} />
            <CartSummary products={sales} cart={cart} onDecrement={decFromCart} onReset={resetCart} />
        </div>
         )
}

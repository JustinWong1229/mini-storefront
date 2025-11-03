"use client";

export default function CartSummary({ products = [], cart = {}, onDecrement, onReset }) {
  const entries = Object.entries(cart); 
  const { count, total } = entries.reduce(
    (acc, [id, qty]) => {
      const p = products.find(x => x.id === id);
      if (!p) return acc;
      acc.count += qty;
      acc.total += p.price * qty;
      return acc;
    },
    { count: 0, total: 0 }
  );

  const empty = entries.length === 0;

  return (
    <section style={{ marginTop: 16 }}>
      <h3>Cart</h3>
      <p>Items: <strong>{count}</strong></p>
      <p>Total: <strong>${total.toFixed(2)}</strong></p>

      {empty ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {entries.map(([id, qty]) => {
            const p = products.find(x => x.id === id);
            if (!p) return null;
            return (
              <li key={id} style={{ marginBottom: 6 }}>
                {p.name} × {qty} (${(p.price * qty).toFixed(2)})
                <button onClick={() => onDecrement(id)} style={{ marginLeft: 8 }}>−1</button>
              </li>
            );
          })}
        </ul>
      )}

      <button onClick={onReset} disabled={empty}>Reset cart</button>
    </section>
  );
}

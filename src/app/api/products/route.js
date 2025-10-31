export async function GET() {
    const products = [
      { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
      { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
      { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
      { id: 'p4', name: 'Table', price: 1800, category: 'Furniture', stock: 5 },
    { id: 'p5', name: 'Football', price: 20, category: 'Sports', stock: 3 },
    { id: 'p6', name: 'Ipad', price: 1000, category: 'Electronics', stock: 4 },
    { id: 'p7', name: 'Basketball', price: 80, category: 'Sports', stock: 5 },
    { id: 'p8', name: 'Sofa', price: 500, category: 'Furniture', stock: 3 },
    { id: 'p9', name: 'Airpods', price: 350, category: 'Electronics', stock: 4 }
    ];
    return Response.json(products);
  }
  

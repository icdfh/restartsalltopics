import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts(){
      try{
        setLoading(true);
        setError("");

        const res = await fetch("https://dummyjson.com/products?limit=12");
        if(!res.ok) throw new Error("Ошибка загрузки товаров");

        const data = await res.json();
        setProducts(data.products);
      }
      catch(e){
        setError(e.message || "Ошибка");
      }
      finally{
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if(loading) return <p>Загрузка товаров...</p>;
  if(error) return <p style={{ color: "crimson" }}>{error}</p>;

  return (
    <div>
      <h1>Товары</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}>
            
            <img
              src={product.thumbnail}
              alt={product.title}
              width="100%"
            />

            <h3>{product.title}</h3>
            <p>{product.price} $</p>

            <Link to={`/products/${product.id}`}>
              Подробнее →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

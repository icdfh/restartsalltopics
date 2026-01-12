import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail(){
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() =>{
        async function loadProduct(){
            try{
                setLoading(true)
                setError("")

                const res = await fetch(`https://dummyjson.com/products/${id}`)
            
                if(!res.ok) throw new Error("Товар не найден")
                
                const data = await res.json()
                setProduct(data)
            }
            catch(e){
                setError(e.message || "Ошибка загрузки")
            }
            finally{
                setLoading(false)
            }
        }
        loadProduct()
    }, [id])

    if(loading) return <p>Загрузка товара...</p>
    if(error) return (
        <div>
            <p style={{color: "crimson"}}>{error}</p>
            <button><Link to={"/"}>⬅</Link></button>
        </div>
    )

    return(
        <div>
            <Link to={"/"}><button>Назад к списку</button></Link>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p><b>Цена:</b>{product.price}</p>
            <p><b>{product.rating}</b></p>

            <img
            src={product.thumbnail}
            alt={product.title}
            width="320"
            />
        </div>
    )
}
export default ProductDetail
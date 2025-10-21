import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import type { RootState, AppDispatch } from "../app/store";

export default function ProductsPages() {
    const dispatch = useDispatch<AppDispatch>();
    const {items, loading, error} = useSelector((state: RootState) => state.product);

    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    if(loading){
       return <p>Loading fetch...</p>
    }
    if(error){
        return <p style={{color: "red"}}>Erorr...</p>
    }
    return(
        <div>
            <h2>Products</h2>
            {items.map((p) => (
               <div key={p.id}>
                 <h4>{p.name}</h4>
                <p>${p.price.toFixed(2)}</p>
                <button onClick={() => dispatch(addToCart(p))}>Add To Cart</button>
               </div>
            ))}

        </div>
    )

}
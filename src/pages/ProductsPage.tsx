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
        <div className="text-xl text-center grid-cols-2 gap-3  " >
            <h2 className="text-4xl text-bold m-1 text-center">Products</h2>
            {items.map((p) => (
               <div className=" text-center" key={p.id}>
                 <h4 className="px-4 py-1 m-2">{p.name}</h4>
                <p>${p.price.toFixed(2)}</p>
                <button className="bg-blue-500 text-sm p-1.5 rounded-md text-cyan-50 cursor-pointer hover:bg-blue-700" onClick={() => dispatch(addToCart(p))}>Add To Cart</button>
               </div>
            ))}

        </div>
    )

}
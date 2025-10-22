import { useDispatch, useSelector } from "react-redux"
import { removeCart, clearCart } from "../features/cartSlice"
import type { RootState, AppDispatch } from "../app/store"

export default function CartPage() {
    const dispatch = useDispatch<AppDispatch>();
    const {items}  = useSelector((state: RootState) => state.cart);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    if(items.length === 0){
        return <h3 style={{textAlign: "center"}}>🛒 Cart is empty</h3>
    }  

    return(
        <div className="w-full">
             <div className="place-content-center aligan-center bg-cyan-600 text-white text-center w-1/2 mx-auto">
            <h2 className="text-3xl p-2">Your Cart</h2>
            {items.map((item) => (
                <div key={item.id}>
                    <span className="px-4 ">{item.name} X {item.quantity} </span>
                    <button className=" bg-red-500 p-1 my-1 rounded-md cursor-pointer hover:bg-red-700" onClick={() => dispatch(removeCart(item.id))}>Delete</button>
                </div>
            ))}

            <h3 className="m-3">Total: {total.toFixed(2)}</h3>
            <button className="bg-green-500 p-1.5 m-1 cursor-pointer hover:bg-green-700 rounded-md " onClick={() => dispatch(clearCart())}>Clear</button>

        </div>

        </div>
       
    )
}
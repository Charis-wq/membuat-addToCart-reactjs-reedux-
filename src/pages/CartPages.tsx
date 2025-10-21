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
        <div>
            <h2>Your Cart</h2>
            {items.map((item) => (
                <div key={item.id}>
                    <span>{item.name} X {item.quantity} </span>
                    <button onClick={() => dispatch(removeCart(item.id))}>Delete</button>
                </div>
            ))}

            <h3>Total: {total.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear</button>

        </div>
    )
}
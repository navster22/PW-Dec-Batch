import { useDispatch, useSelector } from "react-redux";
import { buyApple, buyBanana, clearCart } from "../slices/cartSlice";

function Cart(){
    const dispatch = useDispatch();
  
    const apple = useSelector((state) => state.cart.apple);
    const banana = useSelector((state) => state.cart.banana);

    const totalItems = apple + banana;

    return (
        <>
            <h2>Cart</h2>
            <p>🍎 Apples: {apple}</p>
            <p>🍌 Bananas: {banana}</p>
            <p>Total Items: {totalItems}</p>

            <button onClick={() => dispatch(buyApple())}>
                Buy Apple
            </button>

            <button onClick={() => dispatch(buyBanana())}>
                Buy Banana
            </button>

            <button onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
        </>
    );
}

export default Cart;
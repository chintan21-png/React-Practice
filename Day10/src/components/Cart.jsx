import { useContext } from "react";
import { ProductContext } from "../App";
function Cart() {
    const {cartItem} = useContext(ProductContext)
    return(
        <>
            <h1>Total items:{cartItem}</h1>
        </>
    )
};

export default Cart;
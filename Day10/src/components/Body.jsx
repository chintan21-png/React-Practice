import { useState } from "react";
import Product from "./Product";

//import Counter from "./Counter";
function Body () {
    const [items, setItems] = useState([
        {id:1, name:"milk", price:100},
        {id:2, name:"Protein", price:10000},
        {id:3, name:"Almond", price:200},
        {id:4, name:"Coconut", price:10},
        {id:5, name:"Pencil", price:20}
    ])

    return (
        <>
            <h1>I am the Blinkit Body.</h1>
            {/* <Counter  /> */}
            <div className="flex gap-50">
                {
                    items.map((item) => <Product key={item.id} item={item}/>)
                }
            </div>
        </>
    )

}

export default Body;
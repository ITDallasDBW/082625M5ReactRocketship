import "./Counter.css";
import React, { useState } from 'react';

function CounterObj() {
    const [cart, setCart] = useState({
        item: "apple", 
        quantity: 0
    });

function removeApple() {
    setCart(prevCart => ({...prevCart, quantity: prevCart.quantity -1,}))
}

function addApple() {
    setCart(prevCart => ({...prevCart, quantity: prevCart.quantity +1,}))
}
    return (
        <div>
            <button onClick={removeApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple}>+</button>
        </div>
    )
}
export default CounterObj;

//This section is previous to 18:24 in video
    // const [counter, setCounter] = useState(0)
    // function incrementCounter() {
    //     setCounter((prevCounter) => prevCounter +1)
    // }   
    
    // function decrementCounter() {
    //     setCounter((prevCounter) => prevCounter -1)
    // }
    // return (
    //     <div className="counting">
    //         <button className="crement" onClick={decrementCounter}>-</button>
    //         <div className="digitCSS">{counter}</div>
    //         {/* OR */}
    //         <button className="crement" onClick={incrementCounter}>+</button>

    //     </div>
    // )


{/* //This strategy worked for increment but couldn't put a different function on the same variable...so could add but not subtract. */}
{/* <button className="crement" onClick={() => decrement(digit -1)}>-</button>
<p className="digitCSS">{digit}</p>
<button className="crement" onClick={() => increment(digit +1)}>+</button> */}

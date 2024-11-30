import { useState, useEffect } from "react";

import { useSelector } from "react-redux";


export default function SuperCoin() {
    const [superCoins, setSuperCoins] = useState(0);
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    useEffect(()=>{
        if (totalAmount >= 100 &&  totalAmount < 200){
            setSuperCoins(10);
        } else if  (totalAmount >= 200 && totalAmount < 300){
            setSuperCoins(20);
        } else if (totalAmount >= 300){
            setSuperCoins(300);
        } else{
            setSuperCoins(0)
        }
    }, [totalAmount])


    return (
        <div className="super-coins" style={{textAlign: "center"}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase</p>

        </div>
    )


}

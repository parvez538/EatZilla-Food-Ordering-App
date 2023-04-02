import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import ItemCart from "./ItemCart";
import { useState } from "react";

const Cart = () => {
    const items = useSelector((store) => store.cart.items);

    // console.log(totalAmount/100)
  return (
    <>
      {items.length === 0 ? (
        <EmptyCart/>
      ) : (
        <ItemCart />
      )}
    </>
  );
};

export default Cart;

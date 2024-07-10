import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";

const Placeorder = () => {
  const{getTotalCartValue} = useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
      </div>
      <input type="email" placeholder="Email address" />
      <input type="text" placeholder="Street" />
      <div className="multi-fields">
        <input type="text" placeholder="city" />
        <input type="text" placeholder="state" />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="zip code" />
        <input type="text" placeholder="country" />
      </div>
      <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
            <p>Sub Total</p>
            <p>₹{getTotalCartValue()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>₹{getTotalCartValue()===0 ?0 : 25}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getTotalCartValue()===0 ? 0:getTotalCartValue()+25}</b>
          </div>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
      </div>
    </form>
  );
};

export default Placeorder;

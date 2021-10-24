import React from "react";

import CustomButton from "../CustomButton/CustomButton";

import "./CartDropdown.scss";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cart.selelctors";

import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/Cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";

import { selectCartItemsCount } from "../../redux/Cart/cart.selelctors";

import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

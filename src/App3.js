import "./styles.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment1,
  incrementByAmount,
  incrementAsync,
  selectCount,
  selectCart,
  static1,
  addcart
} from "./features/counter/counterSlice";
export default function App() {
  var cart1 = useSelector(selectCart);
  var cartRes = cart1.map((item, index) => (
    <li key={index}>
      {" "}
      {item.value} - {item.count} шт
    </li>
  ));

  return (
    <div className="App">
      <div className="cart">
        <div className="container">Корзина {cartRes}</div>
      </div>
    </div>
  );
}

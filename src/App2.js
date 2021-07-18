import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment1,
  incrementByAmount,
  incrementAsync,
  selectCount,
  static1,
  addToCart
} from "./features/counter/counterSlice";

export default function App() {
  const count = useSelector(selectCount);
  const [addToCart, setaddToCart] = useState("sss");
  const dispatch1 = useDispatch();
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["1", "3", "45", "22"], text: "", inputValue: "" };
    this.Add = this.Add.bind(this);
    this.myRef = React.createRef();
  }

  Add(e) {
    this.setState({ text: this.myRef.current.value });
    if (this.myRef.current.value.length >= 1) {
      this.state.items.push(this.myRef.current.value);
      this.myRef.current.value = "";
    }
  }

  render() {
    return (
      <div className="container ">
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/2.jpeg")} />
              </div>
              <div className="">
                <div className="name">Крекер</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    aria-label="Increment value"
                    onClick={() => dispatch1(static1())}
                  >
                    в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/1.jpg")} />
              </div>
              <div className="">
                <div className="name">Шоколадка</div>
              </div>
              <div className="">
                <div>
                  <button className="btn btn-primary">в корзину </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/3.jpg")} />
              </div>
              <div className="">
                <div className="name">Селедка</div>
              </div>
              <div className="">
                <div>
                  <button className="btn btn-primary">в корзину </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/5.jpg")} />
              </div>
              <div className="">
                <div className="name">Молоко</div>
              </div>
              <div className="">
                <div>
                  <button className="btn btn-primary">в корзину </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/4.png")} />
              </div>
              <div className="">
                <div className="name">Сосиски</div>
              </div>
              <div className="">
                <div>
                  <button className="btn btn-primary">в корзину </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic">
                <img src={require("./img/7.jpg")} />
              </div>
              <div className="">
                <div className="name">Хлеб</div>
              </div>
              <div className="">
                <div>
                  <button className="btn btn-primary">в корзину </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

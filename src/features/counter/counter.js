import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, selectCart, addcart } from "./counterSlice";

export default function App() {
  const count = useSelector(selectCount);
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container ">
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Крекер</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    aria-label="Increment value"
                    data-id="Крекер"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Шоколадка</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    data-id="Шоколадка"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Селедка</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    data-id="Селедка"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Молоко</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    data-id="Молоко"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Сосиски</div>
              </div>
              <div className="">
                <div>
                  <button
                    onClick={(event) => console.log(cart)}
                    className="btn btn-primary"
                    data-id="Сосиски"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-6 col-md-4">
            <div className="row cardShop">
              <div className=" pic"></div>
              <div className="">
                <div className="name">Хлеб</div>
              </div>
              <div className="">
                <div>
                  <button
                    className="btn btn-primary"
                    data-id="Хлеб"
                    onClick={(event) =>
                      dispatch(
                        addcart({ count: 1, value: event.target.dataset.id })
                      )
                    }
                  >
                    в корзину{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

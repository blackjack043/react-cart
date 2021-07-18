import { StrictMode } from "react";
import { Counter } from "./features/counter/counter";
import ReactDOM from "react-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Counter2 from "../src/features/counter/counter";
import App3 from "./App3";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Counter2 />
      <App3 />
    </Provider>
  </StrictMode>,
  rootElement
);

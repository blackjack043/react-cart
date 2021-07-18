import "./styles.css";
import React from "react";
import { Counter } from "./features/counter/counter";

export default function App() {
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
        <input
          type="text"
          className="form-control"
          ref={this.myRef}
          defaultValue=""
        />

        <TodoList items={this.state.items} />
        <button className="btn btn-primary " onClick={this.Add}>
          {" "}
          Add
        </button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.items.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <Counter />
      </div>
    );
  }
}

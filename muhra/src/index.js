import React from "react";
import ReactDOM from "react-dom";
//import "./TodoList.css";
import TodoList from "./TodoList";

var destination = document.getElementById("container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
)
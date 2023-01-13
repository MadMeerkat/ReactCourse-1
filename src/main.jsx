import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { CallbackHook } from "./memorizes/CallbackHook";
// import { MemoHook } from "./memorizes/MemoHook";
// import { Memorizes } from "./memorizes/Memorizes";
import { Padre } from "./tarea-memo/Padre";
import "./useReducer/intro-reducer";
import { TodoApp } from "./useReducer/TodoApp";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TodoApp />
	</React.StrictMode>
);

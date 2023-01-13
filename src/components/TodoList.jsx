import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], removeOnClick, onToggleTodo }) => {
	return (
		<>
			<ul className='list-group'>
				{todos.map((todo) => (
					<TodoItem
						todo={todo}
						key={todo.id}
						removeOnClick={removeOnClick}
						onToggleTodo={onToggleTodo}
					/>
				))}
			</ul>
		</>
	);
};

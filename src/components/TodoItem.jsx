import React from "react";

export const TodoItem = ({ todo = {}, removeOnClick, onToggleTodo }) => {
	const { id, description, done } = todo;
	return (
		<li key={id} className='list-group-item d-flex justify-content-between'>
			<span
				className={`align-self-center ${
					done ? "text-decoration-line-through" : ""
				} `}
				onClick={() => onToggleTodo(id)}
			>
				{description}
			</span>
			<span className='align-self-center'>
				{done ? "Hecho" : "Por Hacer"}
			</span>
			<button className='btn btn-danger' onClick={() => removeOnClick(id)}>
				Borrar
			</button>
		</li>
	);
};

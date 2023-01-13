import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addOnClick }) => {
	const { description, onInputChange, handleResetForm } = useForm({
		description: "",
	});

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		addOnClick(newTodo);
		handleResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='form-control'
				placeholder='Add new task'
				name='description'
				value={description}
				onChange={onInputChange}
			></input>
			<button type='submit' className='btn btn-primary mt-2'>
				Add To do
			</button>
		</form>
	);
};

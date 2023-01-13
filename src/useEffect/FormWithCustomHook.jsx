import { useState, useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
	const defaultForm = {
		username: "",
		email: "",
		password: "",
	};

	const { onInputChange, username, email, password, handleResetForm } =
		useForm(defaultForm);

	return (
		<>
			<h1>Form with custom hook</h1>
			<hr></hr>
			<input
				type='text'
				name='username'
				placeholder='Username'
				className='form-control'
				value={username}
				onChange={onInputChange}
			/>
			<input
				type='email'
				name='email'
				placeholder='Email'
				className='form-control mt-2'
				value={email}
				onChange={onInputChange}
			/>

			<input
				type='password'
				name='password'
				placeholder='Password'
				className='form-control mt-2'
				value={password}
				onChange={onInputChange}
			/>

			<button
				className='btn btn-primary mt-2'
				onClick={() => handleResetForm(defaultForm)}
			>
				Reset
			</button>

			{username === "suricata2" && <Message />}
		</>
	);
};

import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "suricata",
		email: "suricata@email.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<h1>SimpleForm</h1>
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

			{username === "suricata2" && <Message />}
		</>
	);
};

import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import { useState } from "react";

export const Memorizes = () => {
	const { counter, handleAdd } = useCounter(1);
	const [show, setShow] = useState(true);

	return (
		<>
			<h1>
				Counter: <Small value={counter}></Small>
			</h1>
			<hr></hr>

			<button className='btn btn-primary' onClick={() => handleAdd()}>
				+1
			</button>

			<button className='btn btn-secondary' onClick={() => setShow(!show)}>
				Show {JSON.stringify(show)}
			</button>
		</>
	);
};

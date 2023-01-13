import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useState, useMemo } from "react";

const heavyStuff = (iterationNumber = 100) => {
	for (let index = 0; index < iterationNumber; index++) {
		console.log("...");
	}

	return `${iterationNumber} iteraciones hechas`;
};

export const MemoHook = () => {
	const { counter, handleAdd } = useCounter(2000);
	const [show, setShow] = useState(true);

	const memoValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>
			<hr></hr>

			<h4>{memoValue}</h4>

			<button className='btn btn-primary' onClick={() => handleAdd()}>
				+1
			</button>

			<button className='btn btn-secondary' onClick={() => setShow(!show)}>
				Show {JSON.stringify(show)}
			</button>
		</>
	);
};

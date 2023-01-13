import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
	const [counter, setCounter] = useState(10);

	const incrementFather = useCallback((value = 1) => {
		setCounter((c) => c + value);
	}, []);

	return (
		<>
			<h1>useCallback hook: {counter}</h1>
			<ShowIncrement increment={incrementFather} />
		</>
	);
};

import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { useState } from "react";
import { LoadingQuote } from "../components/LoadingQuote";
import { Quote } from "../components/Quote";

export const MultipleCustomHooks = () => {
	const { isLoading, data, hasError } = useFetch(
		"https://type.fit/api/quotes"
	);

	const [pos, setPos] = useState(0);

	const { counter, handleAdd } = useCounter(1);

	const handleNextQuote = () => {
		handleAdd();

		setPos(counter);
	};

	const { author, text } = !!data && data[pos]; // doble negacion para conseguir un true y asi conseguir la data!

	return (
		<>
			<h1>BreakingBad Quotes</h1>
			<hr />
			{isLoading ? <LoadingQuote /> : <Quote author={author} text={text} />}

			<button
				className='btn btn-primary'
				onClick={handleNextQuote}
				disabled={isLoading}
			>
				Next Quote
			</button>
		</>
	);
};

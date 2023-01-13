import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
	const { counter, handleAdd, handleRemove, handleReset } = useCounter();
	return (
		<>
			<h1>CounterWithCustomHook: {counter}</h1>
			<hr></hr>
			<button className='btn btn-primary' onClick={() => handleAdd(2)}>
				+1
			</button>
			<button className='btn btn-primary' onClick={() => handleReset()}>
				reset
			</button>
			<button className='btn btn-primary' onClick={() => handleRemove(2)}>
				-1
			</button>
		</>
	);
};

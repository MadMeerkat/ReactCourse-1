import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
	console.log("me genere");
	return (
		<button
			className=' btn btn-primary'
			onClick={() => {
				increment(5);
			}}
		>
			Add
		</button>
	);
});

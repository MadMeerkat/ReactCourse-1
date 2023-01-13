import { memo } from "react";

export const Small = memo(({ value = "" }) => {
	console.log("dibujo :c");

	return <small> {value} </small>;
});

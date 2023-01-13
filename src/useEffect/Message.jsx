import { useEffect, useState } from "react";
export const Message = () => {
	const [coords, setCoords] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = ({ x, y }) => {
			setCoords({ x, y });
		};
		window.addEventListener("mousemove", onMouseMove);

		return () => {
			removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<>
			<h3>Usuario Existe</h3>
			<p>Mouse Coord: {JSON.stringify(coords)}</p>
		</>
	);
};

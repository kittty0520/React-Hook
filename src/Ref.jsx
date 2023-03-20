import React, { useRef, useState } from 'react';

export default function Ref() {
	const [renderer, setRenderer] = useState(0);
	const countRef = useRef(0);
	let countVar = 0;

	console.log('렌더링됨');

	const doRendering = () => {
		setRenderer(renderer + 1);
	};

	const increaseCountVar = () => {
		countVar = countVar + 1;
		console.log('Var:', countVar);
	};
	const increaseCountRef = () => {
		countRef.current = countRef.current + 1;
		console.log('Ref:', countRef.current);
	};

	return (
		<div>
			<p>Var: {countVar}</p>
			<p>Ref: {countRef}</p>
			<button onClick={doRendering}>Rerendering</button>
			<button onClick={increaseCountVar}>State Up</button>
			<button onClick={increaseCountRef}>Ref Up</button>
		</div>
	);
}

import React, { useRef, useState } from 'react';

export default function Ref() {
	const [count, setCount] = useState(0);
	const countRef = useRef(0);

	console.log('렌더링됨');

	const increaseCountState = () => {
		setCount(count + 1);
	};
	const increaseCountRef = () => {
		countRef.current = countRef.current + 1;
		console.log('Ref:', countRef.current);
	};
	return (
		<div>
			<p>State: {count}</p>
			<p>Ref: {countRef}</p>
			<button onClick={increaseCountState}>State Up</button>
			<button onClick={increaseCountRef}>Ref Up</button>
		</div>
	);
}

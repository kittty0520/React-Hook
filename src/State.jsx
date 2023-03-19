import React, { useState } from 'react';

const heavyWork = () => {
	return ['홍길동', '김민수'];
};
export default function State() {
	const [names, setNames] = useState(() => heavyWork());
	const [input, setInput] = useState('');
	const handleInputChange = (e) => {
		setInput(e.target.value);
	};
	const handleUpload = (prevState) => {
		setNames((prevState) => {
			console.log('이전 state:', prevState);
			return [input, ...prevState];
		});
	};
	return (
		<div>
			<input type='text' value={input} onChange={handleInputChange} />
			<button onClick={handleUpload}>Upload</button>
			{names &&
				names.map((name, index) => {
					return <p key={index}>{name}</p>;
				})}
		</div>
	);
}

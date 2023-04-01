import React from 'react';
import { useInput } from './hook/useInput';

function displayMessage(message) {
	alert(message);
}

export default function Input() {
	const { inputValue, handleChange, handleSubmit } = useInput(
		'',
		displayMessage
	);
	const { inputValue2, handleChange2 } = useInput('안녕2');

	return (
		<div>
			<h1>useInput 커스텀 훅 : 첫번째 실습</h1>
			<input type='text' value={inputValue} onChange={handleChange} />
			<input type='text' value={inputValue2} onChange={handleChange2} />
			<button onClick={handleSubmit}>확인</button>
		</div>
	);
}

import React, { useReducer, useState } from 'react';

//reducer - state를 업데이트하는 역할
//dispatch - state의 업데이트를 요구
//action - 요구의 내용
const ACTION_TYPES = {
	deposit: 'deposit',
	withdraw: 'withdraw',
};
const reducer = (state, action) => {
	console.log('reducer working!', state, action);
	switch (action.type) {
		case ACTION_TYPES.deposit:
			return state + action.payload;
		case ACTION_TYPES.withdraw:
			return state - action.payload;
		default:
			return state;
	}
};

export default function Reducer() {
	const [number, setNumber] = useState(0);
	const [money, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<h2>useReducer bank</h2>
			<p>잔고 : {money}원</p>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
				step='1000'
			/>
			<button
				onClick={() => {
					//dispatch({action})
					dispatch({ type: 'deposit', payload: number });
				}}
			>
				예금
			</button>
			<button
				onClick={() => {
					//dispatch({action})
					dispatch({ type: 'withdraw', payload: number });
				}}
			>
				출금
			</button>
		</div>
	);
}

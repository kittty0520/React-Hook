import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
	console.log('어려운 계산중...');
	for (let i = 0; i < 999999999; i++) {} //계산하는 시간...
	return number + 10000;
};
const easyCalculate = (number) => {
	console.log('쉬운 계산');
	return number + 1;
};

export default function Memo() {
	const [hardNumber, setHardNumber] = useState(1);
	const [easyNumber, setEasyNumber] = useState(1);

	//렌더링될때마다 실행되기 때문에 easySum의 값도 늦게 반환된다.
	//const hardSum = hardCalculate(hardNumber);

	//hardNumber값이 바뀔때만 호출된다.
	const hardSum = useMemo(() => {
		return hardCalculate(hardNumber);
	}, [hardNumber]);

	const easySum = easyCalculate(easyNumber);

	return (
		<div>
			<h3>어려운 계싼기</h3>
			<input
				type='text'
				value={hardNumber}
				onChange={(e) => {
					setHardNumber(parseInt(e.target.value));
				}}
			/>
			<span> + 10000 = {hardSum}</span>
			<h3>쉬운 계싼기</h3>
			<input
				type='text'
				value={easyNumber}
				onChange={(e) => {
					setEasyNumber(parseInt(e.target.value));
				}}
			/>
			<span> + 10000 = {easySum}</span>
		</div>
	);
}

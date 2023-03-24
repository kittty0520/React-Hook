import React, { useCallback, useEffect, useState } from 'react';

export default function Callback() {
	const [number, setNumber] = useState(0);
	const [toggle, setToggle] = useState(true);
	//렌더링될때마다 함수 객체를 가리키는 주소가 다른 메모리 공간에 저장된다.
	// const someFunction = () => {
	// 	console.log(`someFunction : number ${number}`);
	// 	return;
	// };

	//number값은 memorization할 때의 값으로 고정됨=>의존성 배열에 number추가
	const someFunction = useCallback(() => {
		console.log(`someFunction : number ${number}`);
		return;
	}, [number]);

	useEffect(() => {
		console.log('someFunction 이 변경되었습니다');
	}, [someFunction]);
	return (
		<div>
			<input
				type='number'
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<button onClick={someFunction}>Call someFunction</button>

			{/* useEffect가 렌더링되는지 확인하기 위한 버튼 */}
			<button onClick={() => setToggle(!toggle)}>{toggle.tostring()}</button>
		</div>
	);
}

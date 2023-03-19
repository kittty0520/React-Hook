import React, { useEffect } from 'react';

export default function Timer() {
	useEffect(() => {
		//timer 컴포넌트가 Mount될떄 실행
		const timer = setInterval(() => {
			console.log('타이버 돌아가는중...');
		}, 1000);

		//useEffect을 정리함, timer 컴포넌트가  Unmount가 될 때 실행됨
		return () => {
			clearInterval(timer);
		};
	}, []);
	return (
		<div>
			<span>타이머를 시작합니다. 콘솔에서 확인하세요</span>
		</div>
	);
}

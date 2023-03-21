import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Content() {
	const { isDark } = useContext(ThemeContext);
	const user = useContext(UserContext);
	return (
		<div
			className='content'
			style={{
				background: isDark ? 'black' : 'white',
				color: isDark ? 'white' : 'black',
			}}
		>
			<p>{user}님, 좋은 하루 되세요</p>
		</div>
	);
}

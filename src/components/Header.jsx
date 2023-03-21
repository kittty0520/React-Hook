import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

export default function Header() {
	const { isDark } = useContext(ThemeContext);
	const user = useContext(UserContext);
	return (
		<header
			className='header'
			style={{
				background: isDark ? 'black' : 'lightgray',
				color: isDark ? 'white' : 'black',
			}}
		>
			welcome {user}!
		</header>
	);
}

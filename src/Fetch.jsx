import React from 'react';
import { useFetch } from './hook/useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function Fetch() {
	// const {data, fetchUrl} = useFetch(baseUrl, 'users')
	const { data: userData } = useFetch(baseUrl, 'users');
	const { data: postData } = useFetch(baseUrl, 'posts');
	return (
		<div>
			<h1>useFetch 커스텀 훅 : 2번째 실습</h1>
			{/* <button
				onClick={() => {
					fetchUrl('users');
				}}
			>
				Users
			</button>
			<button
				onClick={() => {
					fetchUrl('todos');
				}}
			>
				Todos
			</button>
			<button
				onClick={() => {
					fetchUrl('posts');
				}}
			>
				Posts
			</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
			JSON.stringify(value, replacer, space) */}

			<h2>User</h2>
			<pre>{userData && JSON.stringify(userData[0], null, 2)}</pre>
			<h2>Posts</h2>
			<pre>{postData && JSON.stringify(postData[0], null, 2)}</pre>
		</div>
	);
}

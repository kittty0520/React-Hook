import { useEffect, useState } from 'react';

export function useFetch(baseUrl, initialType) {
	const [data, setData] = useState(null);
	const fetchUrl = (type) => {
		fetch(baseUrl + '/' + type)
			.then((res) => res.json())
			.then((data) => setData(data));
	};
	useEffect(() => {
		fetchUrl(initialType);
	}, []);

	return {
		data,
		fetchUrl,
	};
}

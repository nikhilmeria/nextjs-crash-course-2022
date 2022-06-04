import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
	const [data, setData] = useState(null);

	async function getDataFn() {
		const resp = await fetch('/api');
		const output = await resp.json();

		setData(output);
	}

	return (
		<div>
			<h1>My Website</h1>

			<Link href={'/news'}>
				<a>
					<h3>Today's News</h3>
				</a>
			</Link>
			<button onClick={getDataFn}>Data</button>
			<h4>{data ? data.name : 'no data'}</h4>
		</div>
	);
}

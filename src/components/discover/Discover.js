import React, { Suspense } from 'react';
import { useFetch } from 'react-hooks-fetch';
import { MovieCase } from '../movie-case/MovieCase';

export const Discover = () => (
	<div>
		<Suspense fallback={<span>Loading...</span>}>
			<DisplayRemoteData />
			<MovieCase />
		</Suspense>
	</div>
);

const Err = ({ error }) => <span>Error:{error.message}</span>;

const breakObject = (data) => {
	return Object.entries(data).map(([key, value]) => {
		const newValue = typeof value === 'object' ? breakObject(value) : value;
		return (
			<div>
				<div>{key + ' :'}</div>
				<div>{newValue}</div>
			</div>
		);
	});
};

const DisplayRemoteData = () => {
	const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ad356298';
	const { error, data } = useFetch(url);
	if (error) return <Err error={error} />;
	if (!data) return null;

	return <div>RemoteData:{breakObject(data)}</div>;
};

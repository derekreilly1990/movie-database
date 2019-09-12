import React, { Suspense, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { MovieCase } from '../movie-case/MovieCase';
import { useFetch } from 'react-hooks-fetch';
import { MovieDetails } from '../movie-details/MovieDetails';
import { SearchPanel } from '../search-panel/SearchPanel';
import { apiConstants } from '../../api/apiConstants';
import { sortBy } from '../../api/criteria/sortBy';
import { Spin } from 'antd';

const useStyles = makeStyles({
	container: {
		//height: '350px',
		paddingLeft: '5em',
		paddingRight: '5em',
		overflow: 'hidden',
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

const Err = ({ error }) => <span>Oops Something Went Wrong:{error.message}</span>;

export const Discover = () => {
	const classes = useStyles();
	const [activeMovie, setActiveMovie] = useState(undefined);
	const [searchString, setSearchString] = useState(
		apiConstants.movieDiscoverBaseUrl + apiConstants.urlApiKey + sortBy.popularityDesc
	);

	const handleMovieClicked = (movie) => {
		console.log('Movie clicked', movie);
		if (activeMovie === movie) {
			setActiveMovie(undefined);
		} else {
			setActiveMovie(movie);
		}
	};

	return (
		<>
			<div className={classes.container}>
				<SearchPanel setSearchString={setSearchString} />
				<div>
					{activeMovie && <MovieDetails movie={activeMovie} />}
					<Suspense fallback={<Spin size="large" />}>
						<ItemCollection url={searchString} onMovieClick={handleMovieClicked} />
					</Suspense>
				</div>
			</div>
		</>
	);
};

const ItemCollection = (props) => {
	const url = props.url;
	console.log(url);
	const { error, data } = useFetch(url);
	const classes = useStyles();
	if (error) return <Err error={error} />;
	if (!data) return null;
	if (!data.results && !data.results.length) return null;

	return (
		<div className={classes.cardContainer}>
			{data.results.map((movie, index) => (
				<MovieCase key={index} index={index} movie={movie} onClick={props.onMovieClick} />
			))}
		</div>
	);
};

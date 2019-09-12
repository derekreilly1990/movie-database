import React, { Suspense, useState, useLayoutEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { MovieCase } from '../movie-case/MovieCase';
import { useFetch } from 'react-hooks-fetch';
import { MovieDetails } from '../movie-details/MovieDetails';
import { SearchPanel } from '../search-panel/SearchPanel';
import { apiConstants } from '../../api/apiConstants';
import { sortBy } from '../../api/criteria/sortBy';
import { Input, Spin } from 'antd';

const { Search } = Input;

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
		justifyContent: 'space-around',
	},
});

const Err = ({ error }) => <span>Oops Something Went Wrong:{error.message}</span>;

export const Discover = () => {
	const classes = useStyles();
	const [activeMovie, setActiveMovie] = useState(undefined);
	const [activeMovieIndex, setActiveMovieIndex] = useState(undefined);
	const [detailsAfterMovieIndex, setDetailsAfterMovieIndex] = useState(undefined);

	const [searchString, setSearchString] = useState(
		apiConstants.movieDiscoverBaseUrl + apiConstants.urlApiKey + sortBy.popularityDesc
	);

	const movieRef = useRef(null);

	useLayoutEffect(() => {
		if (activeMovie && movieRef.current) {
			let nextMovie = movieRef.current;
			let nextLine = -1;
			while (nextMovie) {
				if (nextMovie.offsetTop > movieRef.current.offsetTop) {
					break;
				}
				nextMovie = nextMovie.nextSibling;
				nextLine++;
			}
			setDetailsAfterMovieIndex(activeMovieIndex + nextLine);
		}
	}, [activeMovie, activeMovieIndex]);

	const handleMovieClicked = (movie, index) => {
		if (activeMovie === movie) {
			setActiveMovie(undefined);
		} else {
			setActiveMovie(movie);
			setActiveMovieIndex(index);
		}
	};

	return (
		<>
			<div>
				<Search
					placeholder="input search text"
					enterButton="Search"
					size="large"
					onSearch={(value) =>
						setSearchString(apiConstants.searcMovieBaseUrl + apiConstants.urlApiKey + '&query=' + value)
					}
				/>
			</div>
			<div className={classes.container}>
				<SearchPanel setSearchString={setSearchString} />
				<div>
					{/*activeMovie && <MovieDetails movie={activeMovie} />*/}
					<Suspense fallback={<Spin size="large" />}>
						<ItemCollection
							url={searchString}
							onMovieClick={handleMovieClicked}
							activeMovie={activeMovie}
							activeMovieIndex={activeMovieIndex}
							detailsAfterMovieIndex={detailsAfterMovieIndex}
							movieRef={movieRef}
						/>
					</Suspense>
				</div>
			</div>
		</>
	);
};

const ItemCollection = (props) => {
	const url = props.url;
	const { error, data } = useFetch(url);
	const classes = useStyles();
	if (error) return <Err error={error} />;
	if (!data) return null;
	if (!data.results && !data.results.length) return null;

	return (
		<div className={classes.cardContainer}>
			{data.results.map((movie, index) => (
				<>
					<MovieCase
						key={index}
						index={index}
						movie={movie}
						onClick={props.onMovieClick}
						ref={index === props.activeMovieIndex ? props.movieRef : undefined}
					/>
					{index === props.detailsAfterMovieIndex && props.activeMovie && <MovieDetails movie={props.activeMovie} />}
				</>
			))}
		</div>
	);
};

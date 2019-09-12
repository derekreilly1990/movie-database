import React, { Suspense, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Slider from 'react-slick';
import { MovieCase } from '../movie-case/MovieCase';
import { useFetch } from 'react-hooks-fetch';
import { MovieDetails } from '../movie-details/MovieDetails';
import { Spin } from 'antd';

const useStyles = makeStyles({
	container: {
		//height: '350px',
		paddingLeft: '5em',
		paddingRight: '5em',
		overflow: 'hidden',
	},
	heading: {
		color: 'white',
	},
});

const Err = ({ error }) => <span>Oops Something Went Wrong:{error.message}</span>;

export const MovieRoll = (props) => {
	const classes = useStyles();
	const [activeMovie, setActiveMovie] = useState(undefined);

	const handleMovieClicked = (movie) => {
		if (activeMovie === movie) {
			setActiveMovie(undefined);
		} else {
			setActiveMovie(movie);
		}
	};

	return (
		<>
			<div className={classes.container}>
				<h2 className={classes.heading}> {props.title}</h2>
				<Suspense fallback={<Spin size="large" />}>
					<SliderThing {...props} onMovieClick={handleMovieClicked} />
				</Suspense>
			</div>
			{activeMovie && <MovieDetails movie={activeMovie} isSeries={props.isSeries} />}
		</>
	);
};

const SliderThing = (props) => {
	const url = props.url;
	const { error, data } = useFetch(url);
	if (error) return <Err error={error} />;
	if (!data) return null;
	if (!data.results && !data.results.length) return null;
	const settings = {
		infinite: true,
		speed: 500,
		//slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
	};
	return (
		<Slider {...settings}>
			{data.results.map((movie, index) => (
				<MovieCase key={index} index={index} movie={movie} onClick={props.onMovieClick} />
			))}
		</Slider>
	);
};

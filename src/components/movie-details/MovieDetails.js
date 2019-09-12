import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/styles';
import { apiConstants } from '../../api/apiConstants';
import { useFetch } from 'react-hooks-fetch';
import { language } from '../../api/criteria/language';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiCurrencyUsd, mdiVoteOutline, mdiWeb } from '@mdi/js';
import { Spin } from 'antd';

const useStyles = makeStyles({
	container: {
		minHeight: '350px',
		margin: '5em',
		borderRadius: '20px',
		border: '2px Solid white',
		background: 'black ',
		padding: '2em',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	metrics: {
		display: 'flex',
		flexWrap: 'wrap',
		borderRadius: '10px',
		border: '1px solid white',
		justifyContent: 'space-evenly',
		fill: 'white',
	},
	metSpan: {
		display: 'flex',
		alignItems: 'center',
	},
	color: {
		color: 'white',
	},
});
export const MovieDetails = (props) => {
	const classes = useStyles(props);
	console.log('details', props.movie);

	return (
		<>
			<div className={classes.container}>
				<h2 className={classes.color}>{props.movie.title || props.movie.original_name}</h2>
				<h3 className={classes.color}>{props.movie.release_date || props.movie.first_air_date}</h3>
				<p>{props.movie.overview}</p>
				<Suspense fallback={<Spin size="large" />}>
					<DetailsPane {...props} />
				</Suspense>
			</div>
		</>
	);
};

const DetailsPane = (props) => {
	const classes = useStyles(props);
	const movieDetailUrl =
		(props.isSeries ? apiConstants.tvBaseUrl : apiConstants.movieBaseUrl) +
		props.movie.id +
		apiConstants.urlApiKey +
		language.en;
	//https://api.themoviedb.org/3/movie/3840181d4403ab00da4975659f1d2dc8d6e841&language=en-US
	console.log(movieDetailUrl);
	const { error, data } = useFetch(movieDetailUrl);

	if (!data || error) return null;
	console.log('Details', data);
	return (
		<>
			{data.last_episode_to_air && (
				<p>Last Episode: {data.last_episode_to_air.name + ' (' + data.last_air_date + ')'}</p>
			)}
			<div className={classes.metrics}>
				<div className={classes.metSpan}>
					<Icon path={mdiCurrencyUsd} size={'1.5rem'} />
					{data.revenue}
				</div>
				<div className={classes.metSpan}>
					<Icon path={mdiClockOutline} size={'1.5rem'} />
					{data.runtime || data.episode_run_time}mins
				</div>
				<div className={classes.metSpan}>
					<Icon path={mdiVoteOutline} size={'1.5rem'} />
					{data.vote_average}/10
				</div>
				<div className={classes.metSpan}>
					<Icon path={mdiWeb} size={'1.5rem'} />
					<a href={data.homepage}>{data.homepage}</a>
				</div>
			</div>
		</>
	);
};

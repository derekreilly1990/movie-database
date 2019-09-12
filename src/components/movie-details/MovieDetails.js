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
		borderRadius: '3px',
		border: '1px solid white',
		background: 'black ',
		padding: '2em',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	topContainer: {
		display: 'flex',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
	},
	metrics: {
		display: 'flex',
		flexWrap: 'wrap',
		marginTop: '1em',
		padding: '1em',
		borderRadius: '10px',
		border: '1px solid white',
		justifyContent: 'space-between',
		fill: 'white',
	},
	metSpan: {
		display: 'flex',
		alignItems: 'center',
	},
	color: {
		color: 'white',
	},
	imageContainer: {
		flex: 2,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	image: {
		alignSelf: 'flex-end',
	},
});
export const MovieDetails = (props) => {
	const classes = useStyles(props);
	const imgUrl = apiConstants.baseImageUrl500 + props.movie.backdrop_path;

	return (
		<>
			<div className={classes.container}>
				<div className={classes.topContainer}>
					<div className={classes.titleContainer}>
						<h2 className={classes.color}>{props.movie.title || props.movie.original_name}</h2>
						<h3 className={classes.color}>{props.movie.release_date || props.movie.first_air_date}</h3>
						<p>{props.movie.overview}</p>
					</div>
					<div className={classes.imageContainer}>
						<img alt={props.movie.title || props.movie.original_name} src={imgUrl} className={classes.image} />
					</div>
				</div>
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
	const { error, data } = useFetch(movieDetailUrl);

	if (!data || error) return null;
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

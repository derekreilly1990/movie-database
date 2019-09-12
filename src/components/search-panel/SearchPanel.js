import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { apiConstants } from '../../api/apiConstants';
import { MediaPicker } from './media-picker/MediaPicker';
import { movieGenre } from '../../api/criteria/movieGenre';
import { tvGenre } from '../../api/criteria/tvGenre';
import { sortBy } from '../../api/criteria/sortBy';
import { Picker } from './picker/Picker';
import { Button } from '../button';
import { mdiDatabaseSearch } from '@mdi/js';

const useStyles = makeStyles({
	container: {
		margin: '10px',

		borderRadius: '20px',
		border: '2px Solid white',
		background: '#606060 ',
		padding: '2em',
		overflow: 'hidden',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
	},
	label: {
		width: '90px',
	},
});
function range(start, end) {
	if (start === end) return [start];
	return [end, ...range(start, end - 1)];
}

export const SearchPanel = (props) => {
	const buildString = (base, genre, sortBy, year) => {
		return base + apiConstants.urlApiKey + genre.join() + sortBy + year.join();
	};
	const yearOpts = {};
	const yearArray = [...range(1900, 2019)];
	yearArray.forEach((num) => (yearOpts[num] = '&year=' + num));

	const classes = useStyles();
	const [mediaType, setMediaType] = useState(apiConstants.movieDiscoverBaseUrl);
	const genreOpts = mediaType === apiConstants.movieDiscoverBaseUrl ? movieGenre : tvGenre;
	const [genre, setGenre] = useState([]);
	const [sortByVal, setSortByVal] = useState(sortBy.popularityDesc);
	const [year, setYear] = useState([]);

	const onClick = () => {
		props.setSearchString(buildString(mediaType, genre, sortByVal, year));
	};

	return (
		<div className={classes.container}>
			<div className={classes.item}>
				<div>Media type :</div>
				<MediaPicker mediaType={mediaType} onChange={setMediaType} />
			</div>
			<div className={classes.item}>
				<div className={classes.label}>Genre :</div>
				<Picker genre={genre} onChange={setGenre} opts={genreOpts} placeHolder={'Select Genre'} isMulti />
			</div>
			<div className={classes.item}>
				<div className={classes.label}>Sort By :</div>
				<Picker
					genre={sortByVal}
					onChange={setSortByVal}
					default={sortBy.popularityDesc}
					opts={sortBy}
					placeHolder={'Select Sort'}
				/>
			</div>
			<div className={classes.item}>
				<div className={classes.label}>Year :</div>
				<Picker genre={year} onChange={setYear} opts={yearOpts} placeHolder={'Select year'} isMulti />
			</div>
			<Button label={'Search'} onClick={onClick} icon={mdiDatabaseSearch} />
		</div>
	);
};

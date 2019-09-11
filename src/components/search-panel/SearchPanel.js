import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
});
export const SearchPanel = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<GenrePicker></GenrePicker>
		</div>
	);
};

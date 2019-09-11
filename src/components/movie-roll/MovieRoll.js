import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	constainer: {
		display: 'flex',
	},
	container: {
		display: 'flex',
		width: '200px',
	},
	turnCase: {
		transform: 'rotateY( 50deg )',
		boxShadow: '-10px 10px 10px 2px rgba(0,0,0,.2), -2px 0px 0px 0px #888',
		transition: 'all 0.5s',
		transitionDelay: '0.05s',
	},
});
export const MovieRoll = () => {
	const classes = useStyles();
	return <div className={classes.container} />;
};

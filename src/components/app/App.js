import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from '../header';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'darkGrey',
		color: 'white',
	},
	main: {
		flex: 1,
	},
});

export const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header>{'More stuff here'}</Header>
			<div className={classes.main} />
		</div>
	);
};

export default App;

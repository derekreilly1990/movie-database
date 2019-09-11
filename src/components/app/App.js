import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Header } from '../header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Footer } from '../footer/Footer';
import { routes } from '../../utils/routes';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		height: '100%',
		overflowY: 'scroll',
	},
	main: {
		flex: 1,
		alignItems: 'stretch',
		display: 'flex',
		flexDirection: 'column',
		overflowY: 'visible',
		backgroundColor: 'black' /* For browsers that do not support gradients */,
		backgroundImage: 'linear-gradient(black, grey)' /* Standard syntax (must be last) */,
	},
});

export const App = () => {
	const classes = useStyles();

	const calls = {
		trendingThisWeek: '',
	};

	return (
		<Router>
			<div className={classes.root}>
				<Header routes={routes} />
				<div className={classes.main}>
					{routes.map((route) => {
						return <Route key={route.label} path={route.path} component={route.component} />;
					})}
				</div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;

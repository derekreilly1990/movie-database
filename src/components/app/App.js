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
		backgroundColor: 'darkGrey',
		color: 'white',
		height: '100%',
	},
	main: {
		flex: 1,
		alignItems: 'stretch',
		display: 'flex',
	},
});

export const App = () => {
	const classes = useStyles();
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

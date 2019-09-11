import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Button } from '../../button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	link: {
		color: 'transparent',
		display: 'flex',
		alignContent: 'center',
	},
});
export const HeaderButton = (props) => {
	const classes = useStyles();
	return (
		<Route
			path={props.to}
			exact={props.activeOnlyWhenExact}
			children={({ match }) => {
				return (
					<NavLink to={props.to} className={classes.link}>
						<Button isActive={match} label={props.label} icon={props.icon} />
					</NavLink>
				);
			}}
		/>
	);
};

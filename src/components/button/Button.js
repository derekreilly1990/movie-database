import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const useStyles = makeStyles({
	button: {
		display: 'flex',
		border: 'none',
		margin: 0,
		alignItems: 'center',
		textDecoration: 'none',
		background: 'transparent',
		color: 'black',
		fill: 'black',
		fontFamily: 'sans-serif',
		fontSize: '1rem',
		cursor: 'pointer',
		textAlign: 'center',
		transition: 'color 250ms ease-out, fill 250ms ease-ou ',
		'-webkit-appearance': 'none',
		'-moz-appearance': 'none',
		'&:hover': {
			outline: 'white',
			color: 'white',
			transition: 'color 250ms ease-in, fill 250ms ease-in ',
			fill: 'white',
		},
		'&:active': {
			outline: 'white',
			color: 'white',
			fill: 'white',
			border: '1px solid white',
		},
		'&:focus': {
			outline: 'white',
		},
	},
});
export const Button = (props) => {
	const classes = useStyles();
	return (
		<button className={classes.button}>
			<Icon path={mdiAccount} size={'2rem'} title={props.label} />
			{props.label}
		</button>
	);
};

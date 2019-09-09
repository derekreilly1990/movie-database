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
		background: '#0069ed',
		color: '#ffffff',
		fontFamily: 'sans-serif',
		fontSize: '1rem',
		cursor: 'pointer',
		textAlign: 'center',
		transition: 'background 250ms ease-in-out transform 150ms ease',
		'-webkit-appearance': 'none',
		'-moz-appearance': 'none',
		'&:hover': {
			background: '#0053ba',
		},
		'&:active': {
			background: '#0053ba',
		},
		'&:focus': {
			outline: '1px solid #fff',
			outlineOffset: '-4px',
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

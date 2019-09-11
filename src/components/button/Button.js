import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Icon from '@mdi/react';
import classNames from 'classnames';

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
		transition: 'color 200ms ease-in, fill 200ms ease-in ',
		'-webkit-appearance': 'none',
		'-moz-appearance': 'none',
		'&:active': {
			color: 'white',
			fill: 'white',
			outline: 'none',
			transition: 'color 200ms ease-in, fill 200ms ease-in ',
		},
		'&:hover': {
			color: 'lightGrey',
			transition: 'color 200ms ease-in, fill 200ms ease-in ',
			fill: 'lightGrey',
		},
		'&:focus': {
			outline: 'none',
			transition: 'color 200ms ease-in, fill 200ms ease-in ',
		},
	},
	active: {
		outline: 'none',
		color: 'white',
		fill: 'white',
		transition: 'color 200ms ease-in, fill 200ms ease-in ',
	},
});
export const Button = (props) => {
	const classes = useStyles();
	const buttonClassNames = classNames({
		[classes.button]: true,
		[classes.active]: props.isActive,
	});

	return (
		<button className={buttonClassNames} onClick={props.onClick}>
			<Icon path={props.icon} size={'2rem'} title={props.label} />
			{props.label}
		</button>
	);
};

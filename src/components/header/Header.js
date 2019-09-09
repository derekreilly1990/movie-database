import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/styles';
import { Button } from '../button';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const useStyles = makeStyles({
	headerRoot: {
		display: 'flex',
		alignItems: 'stretch',
		height: '50px',
		backgroundColor: '#606060',
		color: 'black',
		fill: 'black',
	},
});
export const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.headerRoot}>
			<Icon path={mdiAccount} title={'Home'} size={'50px'} />
			<Button label={'Discover'} />
			<Button label={'Movies'} />
			<Button label={'Series'} />
		</header>
	);
};

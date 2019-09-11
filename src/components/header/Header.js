import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/styles';
import Icon from '@mdi/react';
import { HeaderButton } from './header-button/HeaderButton';
import { mdiHome } from '@mdi/js';
import { routes } from '../../utils/routes';

const useStyles = makeStyles({
	headerRoot: {
		display: 'flex',
		flex: '0 1 50px',
		alignItems: 'stretch',
		backgroundColor: '#606060',
		color: 'black',
		fill: 'black',
	},
});
export const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.headerRoot}>
			<Icon path={mdiHome} title={'Home'} size={'50px'} />
			{routes.map((route, index) => {
				return <HeaderButton key={route.label} to={route.path} label={route.label} icon={route.icon} index={index} />;
			})}
		</header>
	);
};

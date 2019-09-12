import React from 'react';
import './Header.css';
import { makeStyles } from '@material-ui/styles';
import { HeaderButton } from './header-button/HeaderButton';
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
	img: {
		height: '50px',
		marginRight: '10px',
	},
});
export const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.headerRoot}>
			<img
				alt={'the movie db'}
				src={
					'https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg'
				}
				className={classes.img}
			/>
			{routes.map((route, index) => {
				return <HeaderButton key={route.label} to={route.path} label={route.label} icon={route.icon} index={index} />;
			})}
		</header>
	);
};

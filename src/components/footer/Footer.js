import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
	footer: {
		display: 'flex',
		flex: '0 1 50px',
		alignItems: 'stretch',
		backgroundColor: '#606060',
		color: 'black',
		fill: 'black',
	},
	img: {
		height: '50px',
	},
});
export const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<img
				alt={'the movie db'}
				src={
					'https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-blue-61ce76f69ce1e4f68a6031d975df16cc184d5f04fa7f9f58ae6412646f2481c1.svg'
				}
				className={classes.img}
			/>
		</div>
	);
};

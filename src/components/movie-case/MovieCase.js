import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
	headerRoot: {
		display: 'flex',
		flex: '0 1 50px',
		alignItems: 'stretch',
		backgroundColor: '#606060',
		color: 'black',
		fill: 'black',
	},
	container: {
		display: 'flex',
		width: '200px',
	},
	turnCase: {
		transform: 'rotateY( 50deg )',
		boxShadow: '-10px 10px 10px 2px rgba(0,0,0,.2), -2px 0px 0px 0px #888',
		transition: 'all 0.5s',
		transitionDelay: '0.05s',
	},
});
export const MovieCase = () => {
	const classes = useStyles();
	const [turned, setTurned] = useState(false);
	return (
		<div className={classes.container}>
			<img
				alt={'image'}
				src={
					'https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg'
				}
				onClick={() => setTurned(!turned)}
				className={classNames(turned ? classes.turnCase : undefined)}
			/>
		</div>
	);
};

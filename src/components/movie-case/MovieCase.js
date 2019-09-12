import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import { apiConstants } from '../../api/apiConstants';

const useStyles = makeStyles({
	case: {
		width: '220px',
		height: '330px',
	},
	turned: {
		transform: 'rotateY( 50deg )',
		boxShadow: '-10px 10px 10px 2px rgba(0,0,0,.2), -2px 0px 0px 0px #888',
		transition: 'all 0.5s',
		transitionDelay: '0.05s',
	},
	caseWrap: {
		padding: '10px',
	},
});
export const MovieCase = (props) => {
	const classes = useStyles();
	const [turned, setTurned] = useState(false);
	const imageUrl = apiConstants.baseImageUrl500 + props.movie.poster_path;

	return (
		<div className={classes.caseWrap}>
			<img
				alt={props.movie.title}
				src={imageUrl}
				onClick={() => {
					setTurned(!turned);
					props.onClick(props.movie);
				}}
				className={classNames(classes.case)}
			/>
		</div>
	);
};

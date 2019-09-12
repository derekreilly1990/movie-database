import React from 'react';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import { apiConstants } from '../../api/apiConstants';

const useStyles = makeStyles({
	case: {
		width: '220px',
		height: '330px',
		cursor: 'pointer',
	},
	caseWrap: {
		padding: '10px',
	},
});
export const MovieCase = React.forwardRef((props, ref) => {
	const classes = useStyles();
	const imageUrl = apiConstants.baseImageUrl500 + props.movie.poster_path;

	return (
		<div className={classes.caseWrap} ref={ref}>
			<img
				alt={props.movie.title}
				src={imageUrl}
				onClick={() => {
					props.onClick(props.movie, props.index);
				}}
				className={classNames(classes.case)}
			/>
		</div>
	);
});

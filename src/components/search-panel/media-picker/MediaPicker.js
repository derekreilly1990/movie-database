import React from 'react';
import { apiConstants } from '../../../api/apiConstants';
import { Radio } from 'antd';

export const MediaPicker = (props) => {
	const radioStyle = {
		display: 'block',
		height: '30px',
		lineHeight: '30px',
	};
	const onChange = (e) => {
		props.onChange(e.target.value);
	};
	return (
		<Radio.Group onChange={onChange} value={props.mediaType}>
			<Radio style={radioStyle} value={apiConstants.movieDiscoverBaseUrl}>
				Movie
			</Radio>
			<Radio style={radioStyle} value={apiConstants.tvDiscoverBaseUrl}>
				TV
			</Radio>
		</Radio.Group>
	);
};

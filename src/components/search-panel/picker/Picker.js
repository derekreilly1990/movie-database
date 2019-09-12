import React from 'react';
import { Select } from 'antd';

export const Picker = (props) => {
	const { Option } = Select;
	const children = Object.entries(props.opts).map(([key, value]) => <Option key={value}>{key}</Option>);

	function handleChange(value) {
		props.onChange(value);
	}
	return (
		<Select
			showSearch
			mode={props.isMulti ? 'multiple' : 'single'}
			style={{ minWidth: '140px' }}
			placeholder={props.placeholder}
			onChange={handleChange}
			filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
		>
			{children}
		</Select>
	);
};

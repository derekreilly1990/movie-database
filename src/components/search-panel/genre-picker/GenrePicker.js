import React from 'react'
import {Select} from "antd";
const { Option } = Select;
export const GenrePicker = (props) => {

    <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
    >
        {children}
    </Select>,
}
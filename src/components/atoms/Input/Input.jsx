import React from 'react';
import { StyledInput } from './style';

export default function Input({ type, id, placeholder = '', value, width, required, borderWidth }) {
	return (
		<StyledInput
			type={type}
			id={id}
			placeholder={placeholder}
			value={value}
			width={width}
			borderWidth={borderWidth}
			required={required}
		/>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import defaultTheme from '../../../commons/style/themes/default';

const ButtonDiv = styled.div`
	display: flex;
	justify-content: center;
`;

const ButtonCustom = styled(Button)`
	// background-color: ${defaultTheme.palette.gray};
	color: black;
	// border: 1px black solid ${defaultTheme.palette.black};
	margin: 15px 10px;
`;

export default function ButtonGroupMy() {
	return (
		<ButtonDiv>
			<Link to="/modifyprofile">
				<ButtonCustom size="medium" children="프로필 수정" borderColor="gray" />
			</Link>
			<Link to="/AddProduct">
				<ButtonCustom size="medium" children="상품등록" borderColor="gray" />
			</Link>
		</ButtonDiv>
	);
}

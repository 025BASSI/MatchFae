import styled from "styled-components";
import { primaryColor } from "../utils/Tema";

export const Label = styled.Text`
	font-size: 40px;
	padding: 10px;
`;
export const Input = styled.TextInput`
	margin-top: 10px;
	padding: 10px;
	${({ width }) => (width ? `width: ${width}px;` : "")}
	background-color: #fff;
	font-size: 16px;
	font-weight: bold;
	border-radius: 10px;
`;
export const Button = styled.TouchableOpacity`
	${({ width }) => (width ? `width: ${width}px;` : "")}
	height: 42px;
	background-color: ${(props) => props.bgcolor ?? primaryColor};
	margin-top: 10px;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
`;
export const ButtonText = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
`;

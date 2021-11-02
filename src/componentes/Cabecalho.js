import React from "react";
import styled from "styled-components";
import Icone from "./Icone";
import { primaryColor, primaryText } from "../utils/Tema";
import { useNavigation } from "@react-navigation/core";

export default ({ temIcones }) => {
	let navigator = useNavigation();

	return (
		<Cabecalho>
			<Button onPress={() => navigator.navigate("Menu")}>
				{temIcones && <Icone name="bars" size={35} color={primaryText} />}
			</Button>
			<Logo>MatchFAE</Logo>
			<Button>
				{temIcones && <Icone name="search" size={35} color={primaryText} />}
			</Button>
		</Cabecalho>
	);
};

const Cabecalho = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	background-color: ${primaryColor};
`;

const Logo = styled.Text`
	font-size: 40px;
	color: ${primaryText};
`;

const Button = styled.TouchableOpacity`
	background-color: ${(props) => props.color ?? primaryColor};
	justify-content: center;
	align-items: center;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 10px;
`;

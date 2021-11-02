import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { Container } from "../componentes/Container";
import Pagina from "../componentes/Pagina";
import { lightGray } from "../utils/Tema";

export default (props) => {
	const navigateTo = (pageName) => {
		if (pageName == "back") {
			props.navigation.goBack();
		} else {
			props.navigation.navigate(pageName);
		}
	};

	return (
		<Pagina temCabecalho={false} statusBarColorida={false}>
			<Container>
				<Modal>
					<Text>Tem certeza?</Text>
					<ButtonGroup>
						<Button bgcolor="#666" onPress={() => navigateTo("back")}>
							<ButtonText>Não</ButtonText>
						</Button>
						<Button bgcolor="#30adaf" onPress={() => navigateTo("Login")}>
							<ButtonText>Sair</ButtonText>
						</Button>
					</ButtonGroup>
				</Modal>
			</Container>
		</Pagina>
	);
};

const Modal = styled.View`
	width: ${Dimensions.get("window").width - 40}px;
	padding: 15px;
	border-radius: 10px;
	background-color: ${lightGray};
	elevation: 8;
`;
const Text = styled.Text`
	font-size: 30px;
	font-weight: bold;
	text-align: center;
`;
const ButtonGroup = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
`;
const Button = styled.TouchableOpacity`
	background-color: ${(props) => props.bgcolor};
	padding: 5px;
	justify-content: center;
	align-content: center;
	border-radius: 5px;
	width: 100px;
`;
const ButtonText = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #fefefe;
	text-align: center;
`;

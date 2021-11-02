import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Titulo } from "../componentes/Container";
import Pagina from "../componentes/Pagina";

export default (props) => {
	const navigateTo = (pageName) => {
		props.navigation.navigate(pageName);
	};

	return (
		<Pagina temIcones={false}>
			<Container>
				<View>
					<Titulo>Menu</Titulo>

					<Item onPress={() => navigateTo("Home")}>
						<Texto>Home</Texto>
					</Item>
					<Item onPress={() => navigateTo("CriarEvento")}>
						<Texto>Criar novo evento</Texto>
					</Item>
				</View>

				<View>
					<Item>
						<Texto>Configuração</Texto>
					</Item>
					<Item onPress={() => navigateTo("Sair")}>
						<Texto>Sair</Texto>
					</Item>
				</View>
			</Container>
		</Pagina>
	);
};

let Container = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: #fefefe;
	padding: 5px 20px;
`;
let Item = styled.TouchableOpacity`
	padding: 10px;
`;
let Texto = styled.Text`
	font-size: 20px;
	text-align: center;
	font-weight: bold;
`;

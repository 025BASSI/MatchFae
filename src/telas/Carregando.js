import React from "react";
import styled from "styled-components/native";
import Pagina from "../componentes/Pagina";

export default (props) => {
	let navigation = props.navigation;

	setTimeout(() => {
		navigation.navigate("Home");
	}, 2000);

	return (
		<Pagina temCabecalho={false}>
			<Container>
				<Brand>MatchFAE</Brand>
				<Div>
					<Text>Carregando...</Text>
				</Div>
			</Container>
		</Pagina>
	);
};

const Container = styled.View`
	background-color: #30adaf;
	flex: 1;
	align-items: center;
`;
const Brand = styled.Text`
	color: #fefefe;
	font-size: 50px;
	font-weight: bold;
`;
const Div = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
const Text = styled.Text`
	color: #fefefe;
	font-size: 30px;
`;

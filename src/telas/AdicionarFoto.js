import React from "react";
import Pagina from "../componentes/Pagina";
import { Container, Titulo } from "../componentes/Container";
import { Picture, Image } from "../Styles";
import { Button, ButtonText } from "../componentes/Form";
import { secondaryColor } from "../utils/Tema";
import styled from "styled-components";

export default (props) => {
	let navigation = props.navigation;

	return (
		<Pagina temIcones={false}>
			<Container>
				<Titulo>Adicionar foto de perfil</Titulo>

				<Picture>
					<Image
						style={{ borderRadius: 15 }}
						source={require("../assets/profile.png")}
						width={300}
						height={300}
					/>
				</Picture>

				<Button width={300} bgcolor={secondaryColor}>
					<ButtonText>Escolher a foto</ButtonText>
				</Button>

				<ButtonGroup>
					<Button
						width={125}
						bgcolor={secondaryColor}
						onPress={navigation.goBack}
					>
						<ButtonText>Voltar</ButtonText>
					</Button>

					<Button width={125} onPress={() => navigation.navigate("Home")}>
						<ButtonText>Feito</ButtonText>
					</Button>
				</ButtonGroup>
			</Container>
		</Pagina>
	);
};

const ButtonGroup = styled.View`
	margin-top: 16px;
	width: 300px;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
`;

import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { Scroll, Titulo } from "../componentes/Container";
import { Button, ButtonText, Input } from "../componentes/Form";
import Pagina from "../componentes/Pagina";
import { secondaryColor } from "../utils/Tema";

export default () => {
	return (
		<Pagina>
			<Scroll>
				<Titulo>Criar novo evento</Titulo>

				<Input placeholder="Nome do evento" />
				<Input placeholder="Organizador do evento" />
				<Input placeholder="Endereço" />
				<Input placeholder="Número" />

				<InputGroup>
					<Label>Data do começo:</Label>
					<Input placeholder="DD/MM/AAAA" />
				</InputGroup>
				<InputGroup>
					<Label>Hora do começo:</Label>
					<Input placeholder="HH:MM" />
				</InputGroup>
				<InputGroup>
					<Label>Data do término:</Label>
					<Input placeholder="DD/MM/AAAA" />
				</InputGroup>
				<InputGroup>
					<Label>Hora do começo:</Label>
					<Input placeholder="HH:MM" />
				</InputGroup>

				<Picture>
					<Image
						style={{ borderRadius: 15 }}
						source={require("../assets/eventos.png")}
						width={300}
						height={300}
					/>
				</Picture>

				<Button bgcolor={secondaryColor}>
					<ButtonText>Adicionar foto do evento</ButtonText>
				</Button>
				<Button style={{ marginBottom: 32 }}>
					<ButtonText>Publicar</ButtonText>
				</Button>
			</Scroll>
		</Pagina>
	);
};

const InputGroup = styled.View`
	flex-direction: row;
	align-items: center;
`;
const Label = styled.Text`
	padding: 5px;
	font-size: 20px;
`;
const Picture = styled.View`
	align-items: center;
	margin-top: 16px;
	margin-bottom: 16px;
`;
const Image = styled.Image`
	width: ${({ width }) => width ?? Dimensions.get("window").width}px;
	height: ${({ height }) => height ?? Dimensions.get("window").width}px;
`;

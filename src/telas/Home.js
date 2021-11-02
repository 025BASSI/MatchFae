import React from "react";
import Pagina from "../componentes/Pagina";
import { Container } from "../componentes/Container";
import { Picture, Image } from "../Styles";
import styled, { css } from "styled-components";
import Icone from "../componentes/Icone";
import { lightGray, primaryColor, primaryText } from "../utils/Tema";
import { View } from "react-native";

export default () => {
	return (
		<Pagina>
			<Container style={{ paddingHorizontal: 8 }}>
				<Modal>
					<Picture>
						<Image
							style={{ borderRadius: 15 }}
							source={require("../assets/profile.png")}
							width={300}
							height={300}
						/>
					</Picture>

					<View>
						<Nome>Nome, 21</Nome>
						<Text>
							Breve descrição sobre o ser humaninho full aleatório que, cá entre
							nós, ninguém vai ler.
						</Text>
						<More>
							<Text style={{ fontWeight: "bold" }}>MAIS INFORMAÇÕES</Text>
						</More>

						<ButtonGroup>
							<Button bgcolor="#AD3030" style={{ marginRight: 32 }}>
								<Icone name="times" size={32} color={primaryText} />
							</Button>
							<Button bgcolor={primaryColor}>
								<Icone name="check" size={32} color={primaryText} />
							</Button>
						</ButtonGroup>
					</View>
				</Modal>
			</Container>
		</Pagina>
	);
};

const Modal = styled.View`
	padding: 10px;
	border-radius: 10px;
	background-color: ${lightGray};
	elevation: 8;
`;
const Nome = styled.Text`
	font-size: 32px;
	font-weight: bold;
`;
const Text = styled.Text`
	font-size: 16px;
`;
const More = styled.TouchableOpacity`
	padding: 8px 0;
	align-items: center;
`;
const ButtonGroup = styled.View`
	margin-top: 16px;
	flex-direction: row;
	justify-content: center;
`;
const Button = styled.TouchableOpacity`
	height: 64px;
	width: 64px;
	border-radius: 32px;
	justify-content: center;
	align-items: center;
	background-color: ${({ bgcolor }) => bgcolor};
`;

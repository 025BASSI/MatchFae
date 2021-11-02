import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Label, Input, Button, ButtonText } from "../componentes/Form";
import Pagina from "../componentes/Pagina";
import { Container, LogoImage } from "../componentes/Container";

export default () => {
	const navigator = useNavigation();

	return (
		<Pagina temCabecalho={false} statusBarColorida={false}>
			<Container>
				<LogoImage />

				<Label>Login</Label>
				<Input placeholder="Email" width={300} />
				<Input placeholder="Senha" width={300} />

				<Button width={300} onPress={() => navigator.navigate("Carregando")}>
					<ButtonText>Entrar</ButtonText>
				</Button>
				<Button width={300} onPress={() => navigator.navigate("Cadastro")}>
					<ButtonText>Criar uma nova conta</ButtonText>
				</Button>
			</Container>
		</Pagina>
	);
};

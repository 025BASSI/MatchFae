import React from "react";
import { Button, ButtonText, Input, Label } from "../componentes/Form";
import { Container, LogoImage } from "../componentes/Container";
import Pagina from "../componentes/Pagina";
import { useNavigation } from "@react-navigation/core";
import { secondaryColor } from "../utils/Tema";

export default () => {
	let navigator = useNavigation();

	return (
		<Pagina temCabecalho={false} statusBarColorida={false}>
			<Container>
				<LogoImage />

				<Label>Criar uma nova conta</Label>
				<Input placeholder="Nome" width={300} />
				<Input placeholder="Idade" width={300} />
				<Input placeholder="Email" width={300} />
				<Input placeholder="Senha" width={300} />
				<Input placeholder="Celular" width={300} />

				<Button width={300} onPress={() => navigator.navigate("AdicionarFoto")}>
					<ButtonText>Cadastrar</ButtonText>
				</Button>
				<Button width={300} bgcolor={secondaryColor} onPress={navigator.goBack}>
					<ButtonText>Voltar</ButtonText>
				</Button>
			</Container>
		</Pagina>
	);
};

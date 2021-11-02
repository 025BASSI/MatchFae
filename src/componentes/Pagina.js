import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { gray, primaryColor } from "../utils/Tema";
import Cabecalho from "./Cabecalho";

export default ({
	children,
	temCabecalho = true,
	temIcones = true,
	statusBarColorida = true,
}) => {
	return (
		<>
			<StatusBar
				backgroundColor={statusBarColorida ? primaryColor : gray}
				style="light"
				translucent={false}
			/>
			<Pagina>
				{temCabecalho && <Cabecalho temIcones={temIcones} />}
				{children}
			</Pagina>
		</>
	);
};

const Pagina = styled.View`
	height: ${Dimensions.get("window").height}px;
	background-color: ${gray};
`;

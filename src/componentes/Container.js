import React from "react";
import styled from "styled-components";

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Scroll = styled.ScrollView`
	flex: 1;
	padding: 10px 20px;
`;

export const Titulo = styled.Text`
	font-size: 40px;
	font-weight: bold;
	text-align: center;
`;

export const LogoImage = () => {
	const Image = styled.Image`
		width: 150px;
		height: 150px;
		border-radius: 100px;
	`;

	return <Image source={require("../assets/logo.png")} />;
};

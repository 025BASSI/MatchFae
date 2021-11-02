import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import Login from "./src/telas/Login";
import Cadastro from "./src/telas/Cadastro";
import AdicionarFoto from "./src/telas/AdicionarFoto";
import Carregando from "./src/telas/Carregando";
import Menu from "./src/telas/Menu";
import Exit from "./src/telas/Exit";
import CriarEvento from "./src/telas/CriarEvento";
import Home from "./src/telas/Home";

import DescricaoEvento from "./src/DescricaoEvento";

export default function App() {
	let Stack = createStackNavigator();
	let Navigator = Stack.Navigator;
	let Screen = Stack.Screen;
	let options = {
		headerShown: false,
		gestureEnabled: true,
		gestureDirection: "horizontal",
		...TransitionPresets.SlideFromRightIOS,
	};

	return (
		<NavigationContainer>
			<Navigator initialRouteName="Login" screenOptions={options}>
				<Screen name="Login" component={Login} />
				<Screen name="Cadastro" component={Cadastro} />
				<Screen name="AdicionarFoto" component={AdicionarFoto} />

				<Screen name="Carregando" component={Carregando} />
				<Screen name="Menu" component={Menu} />
				<Screen name="Sair" component={Exit} />
				<Screen name="Home" component={Home} />
				<Screen name="CriarEvento" component={CriarEvento} />

				<Screen name="DescricaoEvento" component={DescricaoEvento} />
			</Navigator>
		</NavigationContainer>
	);
}

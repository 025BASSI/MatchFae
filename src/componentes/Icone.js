import React from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";

export default (props) => {
	let CustomIcon;

	switch (props.type) {
		case "AntDesign":
			CustomIcon = AntDesign;
			break;
		case "FontAwesome5":
		default:
			CustomIcon = FontAwesome5;
			break;
	}

	return <CustomIcon name={props.name} size={props.size} color={props.color} />;
};

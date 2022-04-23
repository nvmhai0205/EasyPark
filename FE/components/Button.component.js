import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = (props) => {

    const { style, title, onPress } = props;

    return (
        <TouchableOpacity style={style.TouchableOpacity} onPress={onPress}>
            <Text style={style.Text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
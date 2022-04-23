import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Link = (props) => {
    const { style, title, onPress } = props; 
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={style}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Link;

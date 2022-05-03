import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Themes from "../config/theme";

const Button = (props) => {
    const { style, title, onPress, icon, size } = props;

    return (
        <TouchableOpacity style={[style.TouchableOpacity]} onPress={onPress}>
            {icon ? (
                <View style={{
                    marginRight: 5,
                }}>
                    <Icon name={icon} size={size} color={Themes.color.light} />
                </View>
            ) : null}
            <Text style={style.Text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

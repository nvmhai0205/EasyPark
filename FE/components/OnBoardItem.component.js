import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
} from "react-native";
import React from "react";

import Themes from "../config/theme";

const OnBoardItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={Themes.container}>
            <Image
                source={item.image}
                style={[styles.image, { width, resizeMode: "contain" }]}
            />
            <View style={{ alignItems: "center" }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={{ height: 150 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300,
        justifyContent: "center",
    },
    title: {
        color: Themes.color.primary,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
    },
    description: {
        color: Themes.color.gray,
        fontSize: 16,
        marginBottom: 10,
        width: 400,
        textAlign: "center",
    },
});

export default OnBoardItem;

import { View, Image, StyleSheet, Animated, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import car from "./../assets/images/car.png";

const Loadding = () => {
    const [runAnim, setRunAnim] = useState(new Animated.Value(0));
    const runAnimation = () => {
        Animated.timing(runAnim, {
            toValue: 500,
            duration: 4000,
            useNativeDriver: false,
        }).start();
    }

    useEffect(() => {
        runAnimation();
    }, [])

    return (
        <View style={style.container}>
            <Image source={logo} style={style.image}/>
            <View style={style.loadding}>
                <Animated.View style={{
                    marginLeft: runAnim,
                    width: 35,
                    height: 35,
                }}>
                    <Image source={car} style={style.car}/>
                </Animated.View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 3000,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        elevation: 1000,
    },
    image: {
        width: 200,
        height: 120,
    },
    loadding: {
        width: "100%",
        height: 30,
        borderBottomColor: "#1266F1",
        borderBottomWidth: 2,     
    },
    car: {
        height: 35,
        width: 35,
    }
})

export default Loadding;

import { View, Text, Alert, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Themes from "../../config/theme";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";
import server from "./../../link";
import axios from "axios";

import Loadding from "../../components/Loadding.component";

import { useDispatch } from "react-redux";
import { initEmail } from "../../redux/verify";

const ForgotIndex = ({navigation}) => {
    const [load, setLoad] = React.useState(false);

    const [userInput, setUserInput] = React.useState({
        "email": "",
    });

    const dispatch = useDispatch();

    const handleChange = (e, name) => {
        setUserInput({ ...userInput, [name]: e.nativeEvent.text });
    };

    const requestResetPassword = async () => {
        try {
            setLoad(true)
            const result = await axios.post(
                `${server}/reset-password`,
                userInput
            )
            dispatch(initEmail(userInput.email));
            setLoad(false);
        } catch(error) {
            setLoad(false);
            console.log(error);
        }
    }

    return (
        <View style={Themes.container}>
            {load ? <Loadding /> : <></>}

            <View style={{
                width: "100%",
                position: "absolute",
                top: 0,
            }}>
                <Button
                    title="Back"
                    style={Themes.buttonOutlineGray}
                    onPress={() => {
                        navigation.navigate("SignIn")
                    }}
                >

                </Button>
            </View>

            <Text style={Themes.headding}>Reset Password</Text>
            <Text
                style={{
                    color: Themes.color.gray,
                    width: 320,
                    marginBottom: 30,
                    textAlign: "center",
                }}
            ></Text>
            <Text
                style={{
                    color: Themes.color.gray,
                    width: 320,
                    marginBottom: 10,
                    textAlign: "center",
                }}
            >
                * We will send you a message to set or reset your new password
            </Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    textContentType="emailAddress"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => handleChange(e, "email")}
                />
                <View style={Themes.icon}>
                    <MIcon
                        name="email"
                        size={16}
                        color={Themes.color.primary}
                    />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <Button
                title="Send Code"
                style={Themes.button}
                onPress={() => {
                    if (userInput.email !== "") {
                        requestResetPassword();
                        navigation.navigate("Verify");
                    }
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    checkboxcontainer: {
        height: 30,
        width: 320,
        marginBottom: 10,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    checkbox: {
        width: 30,
    },
});

export default ForgotIndex;

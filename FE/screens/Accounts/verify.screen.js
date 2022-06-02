import { View, Text, Alert, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Themes from "../../config/theme";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";
import server from "./../../link";
import axios from "axios";

import Loadding from "../../components/Loadding.component";
import { useSelector, useDispatch } from "react-redux";
import { initCode } from "../../redux/verify";

const VerifyAccount = ({navigation}) => {
    const [load, setLoad] = React.useState(false);

    const emailVerify = useSelector((state) => state.Verify.email);

    const [userInput, setUserInput] = React.useState({
        "email": emailVerify,
        "token": ""
    });

    

    const handleChange = (e, name) => {
        setUserInput({ ...userInput, [name]: e.nativeEvent.text });
    };

    const dispatch = useDispatch();

    const verifyCode = async () => {
        try {
            setLoad(true);
            const result = await axios.post(
                `${server}/verify`,
                userInput
            )
            dispatch(initCode(userInput.token));
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
                Code has been sent to your email
            </Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    name="code"
                    placeholder="Enter your code"
                    onChange={(e) => handleChange(e, "code")}
                />
                
            </View>
            <Text style={Themes.validate}></Text>

            <Button
                title="Check code"
                style={Themes.button}
                onPress={() => {
                    verifyCode();
                    navigation.navigate("ResetPassword");
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

export default VerifyAccount;
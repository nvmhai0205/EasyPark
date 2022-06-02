import { View, Text, Alert, TextInput, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Themes from "../../config/theme";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";
import server from "./../../link";
import axios from "axios";
import AIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Loadding from "../../components/Loadding.component";
import { useSelector } from "react-redux";

const ResetPassword = ({ navigation }) => {
    const [load, setLoad] = React.useState(false);
    const [successVisible, setSuccessVisible] = React.useState(false);
    const emailVerify = useSelector((state) => state.Verify.email);
    const codeVerify = useSelector((state) => state.Verify.code);
    const [userInput, setUserInput] = React.useState({
        "email": emailVerify,
        "token": codeVerify,
        "password": "",
        "confirmpassword": "",
    });

    const handleChange = (e, name) => {
        setUserInput({ ...userInput, [name]: e.nativeEvent.text });
    };

    const resetPassword = async () => {
        try {
            setLoad(true);
            if (userInput.password === userInput.confirmpassword) {
                
                const data = {
                    "email": userInput.email,
                    "token": userInput.token,
                    "password": userInput.password
                }
                
                const result = await axios.post(
                    `${server}/new-password`,
                    data
                );
                console.log(result.data);
            } else {
                Alert.alert("Password Incorrect");
            }
            setLoad(false);
        } catch (error) {
            setLoad(false);
        }
    };

    return (
        <View style={Themes.container}>
            {load ? <Loadding /> : <></>}

            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    top: 0,
                }}
            >
                <Button
                    title="Back"
                    style={Themes.buttonOutlineGray}
                    onPress={() => {
                        navigation.navigate("SignIn");
                    }}
                ></Button>
            </View>

            <Text style={Themes.headding}>Reset Password</Text>
            <Text
                style={{
                    color: Themes.color.gray,
                    width: 320,
                    marginBottom: 0,
                    textAlign: "center",
                }}
            ></Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    name="password"
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Enter new password"
                    onChange={(e) => handleChange(e, "password")}
                />
            </View>
            <Text style={Themes.validate}></Text>

            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    secureTextEntry={true}
                    textContentType="password"
                    name="confirmpassword"
                    placeholder="Confirm password"
                    onChange={(e) => handleChange(e, "confirmpassword")}
                />
            </View>
            <Text style={Themes.validate}></Text>

            <Button
                title="Save password"
                style={Themes.button}
                onPress={() => {
                    resetPassword();
                    setSuccessVisible(!successVisible);
                    navigation.navigate("SignIn");
                }}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={successVisible}
                onRequestClose={() => {
                    setSuccessVisible(!successVisible);
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#dddddddd",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            height: 320,
                            width: 320,
                            alignItems: "center",
                            elevation: 100,
                            paddingHorizontal: 10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 300,
                                alignItems: "flex-end",
                                justifyContent: "center",
                                marginTop: 10,
                                position: "absolute",
                                top: 0,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                onPress={() => {
                                    setSuccessVisible(!successVisible);
                                }}
                            >
                                <Icon
                                    name="close"
                                    size={25}
                                    color={Themes.color.danger}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <AIcon
                                name="checkcircle"
                                size={70}
                                color={Themes.color.success + "dd"}
                            />
                        </View>

                        <View>
                            <Text
                                style={{
                                    color: Themes.color.primary,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    marginTop: 15,
                                }}
                            >
                                Saving Successfully
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>
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

export default ResetPassword;

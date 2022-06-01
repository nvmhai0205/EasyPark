import { View, Text, Alert, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Themes from "../../config/theme";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";
import server from "./../../link";
import axios from "axios";

import Loadding from "../../components/Loadding.component";

const RegisterPage = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const changeSelected = () => {
        setSelection(!isSelected);
    };

    const [userInput, setUserInput] = React.useState({
        email: "",
        password: "",
        confirmPass: "",
    });

    const handleChange = (e, name) => {
        setUserInput({ ...userInput, [name]: e.nativeEvent.text });
    };

    const [load, setLoad] = React.useState(false);

    const handleRegister = () => {
        if (!isSelected) {
            Alert.alert("Bạn chưa đồng ý điều khoản");
        } else if (userInput.password !== userInput.confirmPass) {
            Alert.alert("Mật khẩu không khớp");
        } else {
            Register();
        }
    };

    const Register = async () => {
        try {
            setLoad(true);
            const data = {
                "email": userInput.email,
                "password": userInput.password,
                "repeat_password": userInput.confirmPass,
            };
            const result = await axios.post(`${server}/users`, data);
            setLoad(false);
            Alert.alert("Successful account registration");
        } catch (error) {
            setLoad(false);
            Alert.alert("Account registration failed");
        }
    };

    return (
        <View style={Themes.container}>

            {
                load ? <Loadding/> : <></>
            }

            <Text style={Themes.headding}>Create Account</Text>

            <Text style={Themes.label}>Email</Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    textContentType="emailAddress"
                    name="email"
                    placeholder="e.g example@gmail.com"
                    onChange={(e) => handleChange(e, 'email')}
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

            <Text style={Themes.label}>Password</Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    placeholder="e.g Examp!e98"
                    secureTextEntry={true}
                    textContentType="password"
                    name="password"
                    onChange={(e) => handleChange(e, 'password')}
                />
                <View style={Themes.icon}>
                    <MIcon name="lock" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <Text style={Themes.label}>Confirm Password</Text>
            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    textContentType="password"
                    name="confirmPass"
                    onChange={(e) => handleChange(e, 'confirmPass')}
                />
                <View style={Themes.icon}>
                    <MIcon name="lock" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <View style={style.checkboxcontainer}>
                <View style={style.checkbox}>
                    {isSelected ? (
                        <MIcon
                            onPress={changeSelected}
                            name="checkbox-intermediate"
                            size={20}
                            color={Themes.color.primary}
                        />
                    ) : (
                        <MIcon
                            onPress={changeSelected}
                            name="checkbox-blank-outline"
                            size={20}
                            color={Themes.color.primary}
                        />
                    )}
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text>I agree to the </Text>
                    <Link
                        title="Terms"
                        onPress={() => {}}
                        style={Themes.link}
                    />
                    <Text> and </Text>
                    <Link
                        title="Privacy policy"
                        onPress={() => {}}
                        style={Themes.link}
                    />
                </View>
            </View>

            <Button
                title="Create Account"
                style={Themes.button}
                onPress={handleRegister}
            />
            <Button
                title="Sign Up With Google"
                onPress={() => {}}
                style={Themes.button}
                icon="google"
                size={20}
            />

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text>Already have an account ? </Text>
                <Link
                    title="Sign In"
                    onPress={() => {
                        navigation.navigate("SignIn");
                    }}
                    style={Themes.link}
                />
            </View>
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

export default RegisterPage;

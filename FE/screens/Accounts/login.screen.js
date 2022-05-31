import { View, Text, Image, Alert, TextInput } from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Login from "./../../assets/images/login.png";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";
import axios from "axios";
import server from "./../../link";

import { storeItem, getItem } from "./../../store/index";

const LoginPage = ({ navigation }) => {
    const [userInput, setUserInput] = React.useState({
        "email": "",
        "password": "",
    });

    const handleChange = (e, name) => {
        setUserInput({ ...userInput, [name]: e.nativeEvent.text });
    };

    const getAsyncStorage = async () => {
        const value = await getItem("user");
        if (value === null) {
        } else {
            navigation.navigate("Home");
        }
    };

    const handleLogin = async (e) => {
        try {
            const result = await axios.post(`${server}/users/login`, userInput);
            if (result.data) {
                Alert.alert("Đăng nhập thành công");
                navigation.navigate("Home");
                storeItem("user", result.data);
            } else {
                Alert.alert("Sai tài khoản hoặc mật khẩu");
            }
        } catch (error) {
            Alert.alert("Sai tài khoản hoặc mật khẩu");
        }
    };

    React.useEffect(() => {
        getAsyncStorage();
    }, []);

    return (
        <View style={Themes.container}>
            <Image source={Login} style={{ width: 350, height: 250 }} />
            <Text style={Themes.headding}>Sign In</Text>

            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    placeholder="Enter Email"
                    textContentType="emailAddress"
                    name="email"
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

            <View style={Themes.inputIcon}>
                <TextInput
                    style={Themes.input}
                    placeholder="Enter Password"
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

            <Button
                title="Log In"
                onPress={handleLogin}
                style={Themes.button}
            />

            <Link
                style={Themes.link}
                title="Forgot password ?"
                onPress={() => {}}
            />

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text>Don't have an account ? </Text>
                <Link
                    title="Create an account"
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                    style={Themes.link}
                />
            </View>
        </View>
    );
};

export default LoginPage;

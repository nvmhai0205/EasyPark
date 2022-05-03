import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Login from "./../../assets/images/login.png";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";


const LoginPage = () => {
    return (
        <View style={Themes.container}>
            <Image source={Login} style={{ width: 350, height: 250 }} />
            <Text style={Themes.headding}>Sign In</Text>

            <View style={Themes.inputIcon}>
                <TextInput style={Themes.input} placeholder="Enter Email" />
                <View style={Themes.icon}>
                    <MIcon name="email" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <View style={Themes.inputIcon}>
                <TextInput style={Themes.input} placeholder="Enter Password" secureTextEntry={true} />
                <View style={Themes.icon}>
                    <MIcon name="lock" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <Button title="Log In" onPress={() => {}} style={Themes.button} />

            <Link style={Themes.link} title="Forgot password ?" onPress={() => {}} />

            <View style={{flexDirection: "row", marginTop: 10,}}>
                <Text>Don't have an account ? </Text>
                <Link title="Create an account" onPress={() => {}} style={Themes.link} />
            </View>
        </View>
    );
};

export default LoginPage;

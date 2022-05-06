import { View, Text,  Image, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Themes from "../../config/theme";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Link from "../../components/Link.component";
import Button from "../../components/Button.component";

const RegisterPage = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const changeSelected = () => {
        setSelection(!isSelected);
    };

    return (
        <View style={Themes.container}>
            <Text style={Themes.headding}>Create Account</Text>

            <Text style={Themes.label}>Email</Text>
            <View style={Themes.inputIcon}>
                <TextInput style={Themes.input} placeholder="e.g example@gmail.com" />
                <View style={Themes.icon}>
                    <MIcon name="email" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <Text style={Themes.label}>Password</Text>
            <View style={Themes.inputIcon}>
                <TextInput style={Themes.input} placeholder="e.g Examp!e98" secureTextEntry={true} />
                <View style={Themes.icon}>
                    <MIcon name="lock" size={16} color={Themes.color.primary} />
                </View>
            </View>
            <Text style={Themes.validate}></Text>

            <Text style={Themes.label}>Confirm Password</Text>
            <View style={Themes.inputIcon}>
                <TextInput style={Themes.input} placeholder="Enter Password" secureTextEntry={true} />
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
                <View style={{flexDirection: "row"}}>
                    <Text>I agree to the </Text>
                    <Link title="Terms" onPress={() => {}} style={Themes.link} />
                    <Text> and </Text>
                    <Link title="Privacy policy" onPress={() => {}} style={Themes.link} />
                </View>
            </View>

            <Button title="Create Account" onPress={() => {}} style={Themes.button} />
            <Button title="Sign Up With Google" onPress={() => {}} style={Themes.button} icon="google" size={20} />

            <View style={{flexDirection: "row", marginTop: 10,}}>
                <Text>Already have an account ? </Text>
                <Link title="Sign In" onPress={() => {navigation.navigate("SignIn")}} style={Themes.link} />
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
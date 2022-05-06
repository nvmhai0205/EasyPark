import { View, Text, Image } from "react-native";
import React from "react";
import Themes from "../../config/theme";

import Logo from "./../../assets/images/logo.png";
import Banner from "./../../assets/images/onboard1.png";
import Button from "./../../components/Button.component";
import Link from "./../../components/Link.component";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={[Themes.container, {backgroundColor: "#fff"}]}>
            <View style={{
                position: "absolute",
                width: 100,
                top: 20,
                right: 0,
            }}>
                <Button title="Skip" onPress={() => {
                    navigation.navigate("SignIn");
                }} style={Themes.buttonOutlineSuccess} />
            </View>
            <View>
                <Image style={Themes.logo} source={Logo} />
            </View>
            <Text
                style={{
                    color: Themes.color.gray,
                    fontSize: 16,
                    fontWeight: "bold",
                    marginBottom: 20,
                }}
            >
                Your best friend on every journey
            </Text>
            <View>
                <Image style={Themes.banner} source={Banner} />
            </View>
            <View
                style={{
                    position: "absolute",
                    bottom: 50,
                    height: 100,
                    alignItems: "center",
                }}
            >
                <Button
                    title="Sign Up Now"
                    onPress={() => {
                        navigation.navigate("SignUp");
                    }}
                    style={Themes.button}
                />

                {/* <View style={{
                    flexDirection: "row",
                    marginTop: 10,
                }}>
                    <Text>Don't have an account yet ? </Text>
                    <Link style={Themes.link} title="Create an account" onPress={() => {}}/>
                </View> */}
            </View>
        </View>
    );
};

export default SplashScreen;

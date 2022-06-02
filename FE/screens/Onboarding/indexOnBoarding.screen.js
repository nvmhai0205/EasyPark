import { View, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Themes from "../../config/theme";
import Loadding from "./../../components/Loadding.component";

import Logo from "./../../assets/images/logo.png";
import Banner from "./../../assets/images/onboard1.png";
import Button from "./../../components/Button.component";

import { storeItem, getItem, deleteItem } from "./../../store/index";

const IndexOnBoarding = ({ navigation }) => {
    const [load, setLoad] = useState(true);

    const [pageOnboard, setPageOnboard] = React.useState(true);

    useEffect(async () => {
        
        const value = await getItem("onboard25");

        if (value === null) {
            storeItem("onboard25", {onboard: true})
            setTimeout(() => {
                setLoad(false);
            }, 4000);
        }
        else {
            setTimeout(() => {
                setLoad(false);
                navigation.navigate("SignIn");
            }, 4000);
        }
    }, []);

    return (
        <View style={[Themes.container, {backgroundColor: "#fff"}]}>
            {load ? (
                <Loadding />
            ) : (
                <View style={Themes.container}>
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
                        }}
                    >
                        <Button
                            title="Getting Started"
                            onPress={() => {navigation.navigate('OnBoard')}}
                            style={Themes.button}
                        />
                    </View>
                    <View style={{height: 100}}></View>
                </View>
            )}
        </View>
    );
};

export default IndexOnBoarding;

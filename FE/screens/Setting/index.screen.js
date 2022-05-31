import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Themes from "../../config/theme";
import Setting from "./setting.screen";
import AccountScreen from "./account.screen";
import Premium from "./premium.screen";
import Policy from "./policy.screen";
import Terms from "./termsofuse.screen";

const Stack = createNativeStackNavigator();



const IndexSetting = () => {
    

    return (
        <Stack.Navigator
            initialRouteName="index"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: Themes.color.transparent,
                    elevation: 0,
                    height: 60,
                },
            }}
        >
            <Stack.Screen name="index" component={Setting} />
            <Stack.Screen name="account" component={AccountScreen} />
            <Stack.Screen name="premium" component={Premium} />
            <Stack.Screen name="terms" component={Terms} />
            <Stack.Screen name="policy" component={Policy} />
        </Stack.Navigator>
    );
};

export default IndexSetting;

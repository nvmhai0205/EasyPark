import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Themes from "../config/theme";
import {
    createBottomTabNavigator,
    BottomTabBar,
} from "@react-navigation/bottom-tabs";

import HomePage from "../screens/Home/index.screen";
import IndexSetting from "../screens/Setting/index.screen";
import History from "../screens/History/history.screen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialIcons";
import AIcon from "react-native-vector-icons/AntDesign";

import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = (props) => {
    const { accessibilityState, children, onPress } = props;

    if (accessibilityState.selected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View
                    style={{
                        flexDirection: "row",
                        position: "absolute",
                        top: 0,
                    }}
                >
                    <View
                        style={{ flex: 1, backgroundColor: Themes.color.light }}
                    ></View>
                    <Svg width={70} height={61} viewBox="0 0 75 61">
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={Themes.color.light}
                        />
                    </Svg>
                    <View
                        style={{ flex: 1, backgroundColor: Themes.color.light }}
                    ></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: "center",
                        alignItems: "center",
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: Themes.color.primary,
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: Themes.color.light,
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        );
    }
};

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
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
            <Tab.Screen
                name="HistoryScreen"
                component={History}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AIcon
                                name="piechart"
                                size={35}
                                color={
                                    focused
                                        ? Themes.color.light
                                        : Themes.color.gray
                                }
                            />
                        );
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="HomeScreen"
                component={HomePage}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MIcon
                                name="compass"
                                size={40}
                                color={
                                    focused
                                        ? Themes.color.light
                                        : Themes.color.gray
                                }
                            />
                        );
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="SettingScreen"
                component={IndexSetting}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Icon
                                name="settings"
                                size={40}
                                color={
                                    focused
                                        ? Themes.color.light
                                        : Themes.color.gray
                                }
                            />
                        );
                    },
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;

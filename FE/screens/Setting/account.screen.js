import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
    ScrollView
} from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";
import Poster from "./../../assets/images/poster.jpg";

const AccountScreen = ({ navigation }) => {
    return (
        <View style={[Themes.container, { backgroundColor: "#eee" }]}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    height: 70,
                    backgroundColor: Themes.color.primary + "aa",
                    opacity: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    alignItems: "center",
                    elevation: 1000,
                }}
            >
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View style={{ width: "20%" }}>
                        <Button
                            title=""
                            style={[Themes.buttonTransparent, { height: 30 }]}
                            onPress={() => {
                                navigation.navigate("index");
                            }}
                            icon="chevron-circle-left"
                            size={30}
                        />
                    </View>
                    <View
                        style={{
                            width: "60%",
                            height: 50,
                        }}
                    >
                        <Text
                            style={{
                                color: Themes.color.light,
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Account
                        </Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                </View>
            </View>

            <ScrollView
                style={{
                    height: "100%",
                    width: "100%",
                    paddingHorizontal: 10,
                    position: "absolute",
                    top: 85,
                }}
            >
                <View
                    style={{
                        height: 250,
                        width: "100%",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        overflow: "hidden",
                        position: "relative",
                    }}
                >
                    <View
                        style={{
                            height: 190,
                            width: "100%",
                            borderColor: Themes.color.light,
                            borderWidth: 1,
                        }}
                    >
                        <Image
                            source={Poster}
                            style={{
                                height: 190,
                                width: "100%",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            position: "absolute",
                            bottom: 0,
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <View
                            style={{
                                height: 120,
                                width: 120,
                                borderColor: "#eee",
                                borderWidth: 5,
                                borderRadius: 60,
                                overflow: "hidden",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                source={Avatar}
                                style={{
                                    height: 140,
                                    width: 140,
                                    resizeMode: "cover",
                                }}
                            ></Image>
                        </View>
                    </View>
                </View>
                <View style={{}}>
                    <Text
                        style={{
                            color: Themes.color.primary,
                            textAlign: "center",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        Nguyen Van Minh Hai
                    </Text>
                    <View>
                        
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;

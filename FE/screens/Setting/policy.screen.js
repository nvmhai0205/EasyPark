import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
} from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";

const Policy = ({ navigation }) => {
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
                            Privacy Policy
                        </Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                    {/* <View
                        style={{
                            height: 60,
                            position: "absolute",
                            top: 0,
                            right: -10,
                        }}
                    >
                        <TouchableOpacity>
                            <Image
                                source={Avatar}
                                style={{
                                    height: 70,
                                    width: 70,
                                }}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default Policy;

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Modal,
    ScrollView,
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

import axios from "axios";
import server from "./../../link";
import { getItem, deleteItem } from "./../../store/index";

const AccountScreen = ({ navigation }) => {
    const [profile, setProfile] = React.useState({
        user: {
            _id: "",
            email: "",
            email: "",
            history: [],
            type_account: "free",
        },
    });

    const getProfile = async () => {
        try {
            const userInfo = await getItem("user");
            const result = await axios.get(
                `${server}/users/${userInfo.user._id}`,
                {
                    headers: {
                        Authorization: "Bearer " + userInfo.token,
                    },
                }
            );
            setProfile(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getProfile();
    }, []);

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
                        {profile.user.email}
                    </Text>
                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                textTransform: "capitalize",
                                color: Themes.color.light,
                                backgroundColor: Themes.color.success,
                                fontSize: 16,
                                width: 120,
                                textAlign: "center",
                                borderRadius: 13,
                                height: 25,
                                marginTop: 10,
                            }}
                        >
                            {profile.user.type_account} Account
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 350,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 30,
                            }}
                        >
                            <View style={styles.tabItem}>
                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                    }}
                                    onPress={() => {
                                        navigation.navigate("SettingScreen", {
                                            screen: "terms",
                                        });
                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 30,
                                        }}
                                    >
                                        <MIcon
                                            name="help-rhombus"
                                            size={25}
                                            color={Themes.color.info}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            color: Themes.color.info,
                                            marginLeft: 10,
                                        }}
                                    >
                                        Help
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.tabItem}>
                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                    }}
                                    onPress={() => {
                                        navigation.navigate("SettingScreen", {
                                            screen: "policy",
                                        });
                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 30,
                                        }}
                                    >
                                        <IconM
                                            name="local-police"
                                            size={25}
                                            color={Themes.color.info}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            color: Themes.color.info,
                                            marginLeft: 10,
                                        }}
                                    >
                                        Privacy policy
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.tabItem}>
                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                    }}
                                    onPress={() => {
                                        navigation.navigate("SettingScreen", {
                                            screen: "premium",
                                        });
                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 30,
                                        }}
                                    >
                                        <F5Icon
                                            name="medal"
                                            size={25}
                                            color={Themes.color.info}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            color: Themes.color.info,
                                            marginLeft: 10,
                                        }}
                                    >
                                        Premium
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.tabItem}>
                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                    }}
                                    onPress={() => {
                                        navigation.navigate("SettingScreen", {
                                            screen: "index",
                                        });
                                        
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 30,
                                        }}
                                    >
                                        <IconM
                                            name="settings"
                                            size={30}
                                            color={Themes.color.info}
                                        />
                                    </View>
                                    <Text
                                        style={{
                                            color: Themes.color.info,
                                            marginLeft: 10,
                                        }}
                                    >
                                        Setting
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        height: 50,
        width: 300,
        borderColor: Themes.color.info,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
    },
});

export default AccountScreen;

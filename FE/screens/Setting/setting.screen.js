import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
} from "react-native";
import React , { useState, useEffect } from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";

import axios from "axios";
import server from "./../../link";
import { getItem, deleteItem } from "./../../store/index";

const Setting = ({ navigation }) => {

    const [profile, setProfile] = useState({
        user: {
            _id: "",
            email: "",
            email: "",
            history: [],
            type_account: "free",
        },
    });

    const logout = async () => {
        await deleteItem("user");
        setNavtabVisible(!navtabVisible);
        navigation.navigate("SignIn");
    };

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

    useEffect(() => {
        getProfile();
    },[])

    const [navtabVisible, setNavtabVisible] = React.useState(false);
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
                        // height: 70,
                    }}
                >
                    <View style={{ width: "20%" }}>
                        <Button
                            title=""
                            style={[Themes.buttonTransparent, { height: 30 }]}
                            onPress={() => {
                                setNavtabVisible(!navtabVisible);
                            }}
                            icon="navicon"
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
                            Setting
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

            <View
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        height: 400,
                        width: 400,
                    }}
                >
                    <View
                        style={{
                            height: 180,
                            width: 400,
                            flexDirection: "row",
                            marginBottom: 20,
                        }}
                    >
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.touch} onPress={() => {navigation.navigate("account")}}>
                                <View style={styles.iconbox}>
                                    <FIcon
                                        name="user"
                                        size={30}
                                        color={Themes.color.light}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text}>Account</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.touch} onPress={() => {navigation.navigate("premium")}}>
                                <View style={styles.iconbox}>
                                    <F5Icon
                                        name="medal"
                                        size={30}
                                        color={Themes.color.light}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text}>Remove ads</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 200,
                            width: 400,
                            flexDirection: "row",
                        }}
                    >
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.touch} onPress={() => {navigation.navigate("policy")}}>
                                <View style={styles.iconbox}>
                                    <IconM
                                        name="local-police"
                                        size={30}
                                        color={Themes.color.light}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text}>
                                        Privacy Policy
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.box}>
                            <TouchableOpacity style={styles.touch} onPress={() => {navigation.navigate("terms")}}>
                                <View style={styles.iconbox}>
                                    <FIcon
                                        name="question-circle"
                                        size={30}
                                        color={Themes.color.light}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.text}>
                                        Terms of use
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={navtabVisible}
                onRequestClose={() => {
                    setNavtabVisible(!navtabVisible);
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: "100%",
                        width: "100%",
                        backgroundColor: "#dddddddd",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            height: "100%",
                            width: 320,
                            alignItems: "center",
                            elevation: 100,
                            paddingHorizontal: 10,
                        }}
                    >
                        <View
                            style={{
                                width: 300,
                                alignItems: "flex-end",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                onPress={() => {
                                    setNavtabVisible(!navtabVisible);
                                }}
                            >
                                <MIcon
                                    name="close"
                                    size={25}
                                    color={Themes.color.danger}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: 300,
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <Image
                                source={Avatar}
                                style={{
                                    height: 80,
                                    width: 80,
                                }}
                            />
                            <View
                                style={{
                                    width: 220,
                                    height: 80,
                                    paddingHorizontal: 10,
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: Themes.color.primary,
                                        fontWeight: "bold",
                                        fontSize: 16,
                                    }}
                                >
                                    { profile.user.email }
                                </Text>
                                <Text style={{
                                    textTransform: "capitalize",
                                    color: Themes.color.success
                                }}>{profile.user.type_account} account</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: 300,
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
                                        navigation.navigate("SettingScreen", {screen: "account"});
                                    }}
                                >
                                    <View
                                        style={{
                                            width: 30,
                                        }}
                                    >
                                        <FIcon
                                            name="user"
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
                                        My profile
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
                                        navigation.navigate("SettingScreen", {screen: "terms"});
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
                                        navigation.navigate("SettingScreen", {screen: "policy"});
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
                                        navigation.navigate("SettingScreen", {screen: "premium"});
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
                                        navigation.navigate("SettingScreen", {screen: "index"});
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

                        <View
                            style={{
                                // position: "absolute",
                                // bottom: 100,
                                // width: 250,
                                marginTop: 30,
                            }}
                        >
                            <Button
                                title="Log out"
                                style={{
                                    TouchableOpacity: {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 150,
                                        height: 50,
                                        borderRadius: 10,
                                        backgroundColor: Themes.color.primary,
                                        marginBottom: 10,
                                        flexDirection: "row",
                                    },
                                    Text: Themes.button.Text,
                                }}
                                onPress={() => {
                                    logout();
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: 180,
        height: 180,
        backgroundColor: "white",
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    touch: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    iconbox: {
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Themes.color.primary,
        borderRadius: 60,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: Themes.color.primary,
        marginTop: 10,
    },
    tabItem: {
        height: 50,
        width: 250,
        borderColor: Themes.color.info,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
    },
});

export default Setting;

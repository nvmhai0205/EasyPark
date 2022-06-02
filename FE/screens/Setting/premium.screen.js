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
import AIcon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import axios from "axios";
import server from "./../../link";
import { getItem, deleteItem } from "./../../store/index";

const Premium = ({ navigation }) => {
    const [successVisible, setSuccessVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [profile, setProfile] = React.useState({
        user: {
            _id: "",
            email: "",
            email: "",
            history: [],
            type_account: "free",
        },
    });

    const [positionInfo, setPositionInfo] = React.useState({
        sector: "",
        row: "",
        position: "",
        pos_id: "",
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
                            Get Premium
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
                        <Text
                            style={{
                                fontSize: 24,
                                textAlign: "center",
                                marginTop: 40,
                                color: Themes.color.gray,
                            }}
                        >
                            Get premium account to remove all advertisements
                            permanently
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: "center",
                                color: Themes.color.warning,
                                fontWeight: "bold",
                            }}
                        >
                            Total: 199.000 VND
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                width: 200,
                                height: 50,
                                backgroundColor: Themes.color.primary,
                                borderRadius: 25,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: 20,
                            }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.light,
                                    fontSize: 20,
                                    fontWeight: "bold",
                                }}
                            >
                                Purchare now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={successVisible}
                onRequestClose={() => {
                    setSuccessVisible(!successVisible);
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#dddddddd",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            height: 320,
                            width: 320,
                            alignItems: "center",
                            elevation: 100,
                            paddingHorizontal: 10,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 300,
                                alignItems: "flex-end",
                                justifyContent: "center",
                                marginTop: 10,
                                position: "absolute",
                                top: 0,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                onPress={() => {
                                    setSuccessVisible(!successVisible);
                                }}
                            >
                                <Icon
                                    name="close"
                                    size={25}
                                    color={Themes.color.danger}
                                />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <AIcon
                                name="checkcircle"
                                size={70}
                                color={Themes.color.success + "dd"}
                            />
                        </View>

                        <View>
                            <Text
                                style={{
                                    color: Themes.color.primary,
                                    fontSize: 20,
                                    fontWeight: "600",
                                    marginTop: 15,
                                }}
                            >
                                Saving Successfully
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#dddddddd",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            height: 400,
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
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Icon
                                    name="close"
                                    size={25}
                                    color={Themes.color.danger}
                                />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                marginBottom: 20,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.primary,
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Do you want to pay now?
                            </Text>
                        </View>
                        <View
                            style={{
                                height: 50,
                                width: "90%",
                                borderColor: Themes.color.info,
                                borderWidth: 1,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Themes.color.info,
                                    fontWeight: "bold",
                                }}
                            >
                                Premium Account
                            </Text>
                        </View>

                        <View
                            style={{
                                height: 50,
                                width: "90%",
                                borderColor: Themes.color.info,
                                borderWidth: 1,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Themes.color.info,
                                    fontWeight: "bold",
                                }}
                            >
                                Payment method: MOMO
                            </Text>
                        </View>

                        <View
                            style={{
                                height: 50,
                                width: "90%",
                                borderColor: Themes.color.info,
                                borderWidth: 1,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Themes.color.info,
                                    fontWeight: "bold",
                                }}
                            >
                                Total: 199.000 VND
                            </Text>
                        </View>

                        <View
                            style={{
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 200,
                                    height: 50,
                                    backgroundColor: Themes.color.primary,
                                    borderRadius: 25,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 10,
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setSuccessVisible(!successVisible);
                                }}
                            >
                                <Text
                                    style={{
                                        color: Themes.color.light,
                                        fontSize: 20,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Payment
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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

export default Premium;

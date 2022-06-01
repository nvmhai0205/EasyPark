import {
    View,
    Text,
    Modal,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
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

import Loadding from "../../components/Loadding.component";

import { useDispatch, useSelector } from "react-redux";
import { initHistory } from "../../redux/history";
import { removeHistory } from "../../redux/history";

const History = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [dataModal, setDataModal] = React.useState({
        _id: "",
        parking: "",
        pos: "",
        row: "",
        sector: "",
        time: "",
    });

    const dispatch = useDispatch();
    const history = useSelector((state) => state.History.history);

    const [navtabVisible, setNavtabVisible] = React.useState(false);

    const formatPrice = (res) => {
        return res + " VND";
    };

    const [load, setLoad] = React.useState(false);

    const getHistory = async () => {
        try {
            const userInfo = await getItem("user");
            const result = await axios.get(
                `${server}/users/${userInfo.user._id}/history`,
                {
                    headers: {
                        Authorization: "Bearer " + userInfo.token,
                    },
                }
            );
            dispatch(initHistory(result.data));
        } catch (error) {
            console.log(error);
        }
    };

    const [IdDelete, setIdDelete] = React.useState("");

    const deleteHistory = async () => {
        try {
            setLoad(true);
            const userInfo = await getItem("user");
            const result = await axios.delete(
                `${server}/users/${userInfo.user._id}/history/${IdDelete}`,
                {
                    headers: {
                        Authorization: "Bearer " + userInfo.token,
                    },
                }
            );
            dispatch(removeHistory(IdDelete));
            setLoad(false);
        } catch (error) {
            console.log(error);
            setLoad(false);
        }
    };

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
        navigation.navigate("SignIn");
        setNavtabVisible(!navtabVisible);
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
        getHistory();
    }, []);

    return (
        <View style={[Themes.container, { backgroundColor: "#eee" }]}>
            {load ? <Loadding /> : <></>}
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
                            History Location
                        </Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                </View>
            </View>

            <View
                style={{
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 50,
                }}
            >
                <View
                    style={{
                        height: 600,
                        width: 400,
                        paddingHorizontal: 15,
                        alignItems: "center",
                        // justifyContent: "center",
                    }}
                >
                    {history.length > 0 ? (
                        <ScrollView
                            style={{
                                height: 450,
                                width: "100%",
                                borderRadius: 10,
                            }}
                            showsVerticalScrollIndicator={false}
                        >
                            {history.map((item, idx) => {
                                return (
                                    <View
                                        key={idx}
                                        style={{
                                            height: 105,
                                            width: "100%",
                                            marginBottom: 15,
                                            borderRadius: 10,
                                            borderColor: "#ccc",
                                            borderWidth: 1,
                                            padding: 10,
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                            }}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                                setDataModal(item);
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: Themes.color.primary,
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {item.parking.length > 40
                                                    ? item.parking.slice(
                                                          0,
                                                          40
                                                      ) + "..."
                                                    : item.parking}
                                            </Text>

                                            <Text
                                                style={{
                                                    width: "90%",
                                                    color: Themes.color.dark,
                                                    fontSize: 14,
                                                    marginVertical: 5,
                                                }}
                                            >
                                                Sector {item.sector} - Row{" "}
                                                {item.row} - Position {item.pos}
                                            </Text>
                                            <View
                                                style={{
                                                    width: "100%",
                                                    flexDirection: "row",
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        width: "90%",
                                                        color: Themes.color
                                                            .gray,
                                                    }}
                                                >
                                                    {item.time.slice(0, 10)} -{" "}
                                                    {item.time.slice(11, 19)}
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setIdDelete(item._id);
                                                        deleteHistory();
                                                    }}
                                                >
                                                    <MIcon
                                                        name="close-circle-outline"
                                                        size={30}
                                                        color={
                                                            Themes.color.danger
                                                        }
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </ScrollView>
                    ) : (
                        <Text style={{
                            textTransform: "capitalize",
                            fontSize: 20,
                            marginTop: 200,
                            color: Themes.color.gray
                        }}>
                            Parking history is empty
                        </Text>
                    )}
                </View>
            </View>

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
                        height: "100%",
                        width: "100%",
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
                                <MIcon
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
                                {dataModal.parking}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    textAlign: "center",
                                }}
                            >
                                Sector {dataModal.sector} - Row {dataModal.row}{" "}
                                - Position {dataModal.position}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    textAlign: "center",
                                }}
                            >
                                {dataModal.time.slice(0, 10)}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    textAlign: "center",
                                }}
                            >
                                {formatPrice(5000)}
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>

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
                                    {profile.user.email}
                                </Text>
                                <Text
                                    style={{
                                        textTransform: "capitalize",
                                        color: Themes.color.success,
                                    }}
                                >
                                    {profile.user.type_account} account
                                </Text>
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
                                        navigation.navigate("SettingScreen", {
                                            screen: "account",
                                        });
                                        setNavtabVisible(!navtabVisible);
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
                                        navigation.navigate("SettingScreen", {
                                            screen: "terms",
                                        });
                                        setNavtabVisible(!navtabVisible);
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
                                        setNavtabVisible(!navtabVisible);
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
                                        setNavtabVisible(!navtabVisible);
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
                                        setNavtabVisible(!navtabVisible);
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
    tabItem: {
        height: 50,
        width: 250,
        borderColor: Themes.color.info,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 10,
    },
});

export default History;

import {
    View,
    Text,
    Modal,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";
import HistoriList from "./../../config/Historys";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";

const History = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [dataModal, setDataModal] = React.useState({
        id: 0,
        name: "",
        sector: "",
        row: "",
        position: "",
        time: "",
        price: 0,
    });

    const [navtabVisible, setNavtabVisible] = React.useState(false);

    const formatPrice = (res) => {
        return res + " VND";
    };
    return (
        <View style={[Themes.container, { backgroundColor: "#eee" }]}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    height: 100,
                    backgroundColor: Themes.color.primary + "aa",
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    opacity: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
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
                    marginTop: 70,
                }}
            >
                <View
                    style={{
                        height: 550,
                        width: 400,
                        paddingHorizontal: 15,
                    }}
                >
                    <ScrollView
                        style={{
                            height: 450,
                            width: "100%",
                            borderRadius: 10,
                        }}
                        showsVerticalScrollIndicator={false}
                    >
                        {HistoriList.map((item, idx) => {
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
                                            {item.name.length > 40
                                                ? item.name.slice(0, 40) + "..."
                                                : item.name}
                                        </Text>

                                        <Text
                                            style={{
                                                width: "90%",
                                                color: Themes.color.dark,
                                                fontSize: 14,
                                                marginVertical: 5,
                                            }}
                                        >
                                            {item.sector} - {item.row} -{" "}
                                            {item.position}
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
                                                    color: Themes.color.gray,
                                                }}
                                            >
                                                {item.time}
                                            </Text>
                                            <TouchableOpacity>
                                                <MIcon
                                                    name="close-circle-outline"
                                                    size={30}
                                                    color={Themes.color.danger}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>
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
                                {dataModal.name}
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
                                {dataModal.sector} - {dataModal.row} -{" "}
                                {dataModal.position}
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
                                {dataModal.time}
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
                                {formatPrice(dataModal.price)}
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
                                    Marvis Ighedosa
                                </Text>
                                <Text>marvisighedosa@gmail.com</Text>
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
                                        navigation.navigate("account");
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
                                        navigation.navigate("terms");
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
                                        navigation.navigate("policy");
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
                                        navigation.navigate("premium");
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
                                        navigation.navigate("index");
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
                                    navigation.navigate("SignIn");
                                    setNavtabVisible(!navtabVisible);
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

import {
    View,
    Text,
    TextInput,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import { Animated } from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Avatar from "./../../assets/images/avatar.png";
import FIcon from "react-native-vector-icons/FontAwesome";
import F5Icon from "react-native-vector-icons/FontAwesome5";
import IconM from "react-native-vector-icons/MaterialIcons";

import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";

import { Makers } from "../../config/Makers";
import { API_KEY } from "./../../config/GoogleAPI";

const HomePage = ({ navigation }) => {
    const MarkerAnim = useRef(new Animated.Value(0)).current;
    const [navtabVisible, setNavtabVisible] = React.useState(false);

    // const [lines, setLines] = React.useState(getLines);

    // const getLines = () => {
    //     const res = Makers.map((item, index) => {
    //         return {
    //             latitude: item.coordinate.latitude,
    //             longitude: item.coordinate.longitude,
    //         };
    //     }, []);
    //     return res;
    // };

    const [indexParkSelect, setIndexParkSelect] = React.useState(-1);

    const [locationVisible, setLocationVisible] = React.useState(false);

    const [pin, setPin] = React.useState({
        latitude: 10.878370824746762,
        longitude: 106.80629059716131,
    });

    const [searchVisible, setSearchVisible] = React.useState(false);

    const [modalVisible, setModalVisible] = React.useState(false);

    const [dataModal, setDataModal] = React.useState({
        id: 0,
        name: "",
        coordinate: {
            latitude: 0,
            longitude: 0,
        },
        total: 0,
        use: 0,
        timestart: 0,
        timeend: 0,
    });

    const MarkerAnimOut = () => {
        Animated.loop(
            Animated.timing(MarkerAnim, {
                toValue: 10,
                duration: 1000,
                useNativeDriver: false,
            })
        ).start();
    };

    const formatPrice = (res) => {
        return res + " VND";
    };

    useEffect(() => {
        MarkerAnimOut();
    }, []);

    const getLocation = async () => {
        try {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("PERMISSIONS NOT GRANTED!");
            }
            const location = await Location.getCurrentPositionAsync();
            setPin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        } catch (error) {
            console.log("ERROR");
        }
    };

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                marginTop: 30,
            }}
        >
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
                            Home
                        </Text>
                    </View>
                    <View style={{ width: "20%", alignItems: "flex-end" }}>
                        <Button
                            title=""
                            style={[Themes.buttonTransparent, { height: 30 }]}
                            onPress={() => {
                                setSearchVisible(!searchVisible);
                            }}
                            icon="search"
                            size={30}
                        />
                    </View>
                </View>

                {searchVisible ? (
                    <View
                        style={[
                            Themes.inputIcon,
                            {
                                width: "100%",
                                height: 60,
                                backgroundColor: "#fff",
                            },
                        ]}
                    >
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                height: 60,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <TextInput
                                style={[
                                    Themes.input,
                                    {
                                        height: 60,
                                        paddingHorizontal: 10,
                                        fontSize: 16,
                                        width: "95%",
                                    },
                                ]}
                                placeholder="Where do you want to go ?"
                            />
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                                onPress={() => {
                                    setSearchVisible(!searchVisible);
                                }}
                            >
                                <MIcon
                                    name="close"
                                    size={25}
                                    color={Themes.color.danger}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <></>
                )}
            </View>

            {/* Map */}
            <View
                style={{
                    height: "100%",
                    width: "100%",
                    marginTop: 90,
                }}
            >
                <MapView
                    style={{
                        width: "100%",
                        height: "100%",
                        opacity: 1,
                        elevation: 0,
                    }}
                    initialRegion={{
                        latitude: pin.latitude,
                        longitude: pin.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    {locationVisible ? (
                        <Marker
                            coordinate={pin}
                            draggable={true}
                            onDragStart={(e) => {
                                console.log("Drag start: ", pin);
                            }}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude:
                                        e.nativeEvent.coordinate.longitude,
                                });
                            }}
                            showsUserLocation={true}
                        >
                            <Animated.View
                                style={{
                                    height: 40,
                                    width: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 50,
                                    borderWidth: MarkerAnim,
                                    borderColor: Themes.color.info,
                                    opacity: 0.75,
                                }}
                            >
                                <View
                                    style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 20,
                                        backgroundColor: Themes.color.primary,
                                    }}
                                ></View>
                            </Animated.View>
                        </Marker>
                    ) : (
                        <></>
                    )}

                    {/* List marker */}
                    {Makers.map((maker, index) => {
                        return (
                            <Marker key={index} coordinate={maker.coordinate}>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        elevation: 100,
                                        zIndex: 100,
                                    }}
                                >
                                    <Button
                                        title="P"
                                        style={
                                            indexParkSelect === maker.id
                                                ? Themes.buttonMarksSelect
                                                : Themes.buttonMarks
                                        }
                                        onPress={() => {}}
                                    />
                                </View>
                                <Callout
                                    style={{
                                        width: 100,
                                        height: 50,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10,
                                    }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        setDataModal(maker);
                                    }}
                                >
                                    <View
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            backgroundColor: Themes.color.info,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: Themes.color.light,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            View More
                                        </Text>
                                    </View>
                                </Callout>
                            </Marker>
                        );
                    })}

                    {/* <MapViewDirections
                        origin={pin}
                        destination={Makers[0].coordinate}
                        apikey={API_KEY}
                    /> */}
                </MapView>
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
                    }}
                >
                    <View
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            height: 380,
                            width: 320,
                            alignItems: "center",
                            elevation: 100,
                            paddingHorizontal: 10,
                            // backgroundColor: Themes.color.primary,
                            // borderWidth: 2,
                            // borderColor: Themes.color.info,
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
                                flexDirection: "row",
                                flexWrap: "wrap",
                                // backgroundColor: "red",
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    width: 60,
                                }}
                            >
                                SLOT{" "}
                            </Text>
                            <Text
                                style={{
                                    color: Themes.color.info,
                                    width: 100,
                                    fontWeight: "bold",
                                }}
                            >
                                {dataModal.use} / {dataModal.total}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                flexDirection: "row",
                                flexWrap: "wrap",
                                // backgroundColor: "red",
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    width: 60,
                                }}
                            >
                                PRICE{" "}
                            </Text>
                            <Text
                                style={{
                                    color: Themes.color.info,
                                    width: 100,
                                    fontWeight: "bold",
                                }}
                            >
                                {formatPrice(dataModal.price)}
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "100%",
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                flexDirection: "row",
                                flexWrap: "wrap",
                                // backgroundColor: "red",
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: Themes.color.info,
                                marginTop: 10,
                                // marginBottom: 30,
                            }}
                        >
                            <Text
                                style={{
                                    color: Themes.color.dark,
                                    width: 60,
                                }}
                            >
                                TIME{" "}
                            </Text>
                            <Text
                                style={{
                                    color: Themes.color.info,
                                    width: 100,
                                    fontWeight: "bold",
                                }}
                            >
                                {dataModal.timestart}H - {dataModal.timeend}H
                            </Text>
                        </View>

                        <View
                            style={{
                                bottom: 20,
                                position: "absolute",
                                flexDirection: "row",
                                flexWrap: "wrap",
                            }}
                        >
                            <Button
                                title={
                                    indexParkSelect === dataModal.id
                                        ? "Unselect"
                                        : "Select"
                                }
                                style={{
                                    TouchableOpacity: {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 120,
                                        height: 40,
                                        borderRadius: 25,
                                        backgroundColor:
                                            indexParkSelect === dataModal.id
                                                ? Themes.color.danger
                                                : Themes.color.success,
                                        marginVertical: 10,
                                        marginHorizontal: 10,
                                    },
                                    Text: Themes.buttonSuccess.Text,
                                }}
                                onPress={() => {
                                    if (indexParkSelect === dataModal.id) {
                                        setIndexParkSelect(0);
                                    } else {
                                        setIndexParkSelect(dataModal.id);
                                    }
                                }}
                            />

                            {indexParkSelect === dataModal.id ? (
                                <Button
                                    title="View Detail"
                                    style={{
                                        TouchableOpacity: {
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: 120,
                                            height: 40,
                                            borderRadius: 25,
                                            backgroundColor:
                                                Themes.color.success,
                                            marginVertical: 10,
                                            marginHorizontal: 10,
                                        },
                                        Text: Themes.buttonSuccess.Text,
                                    }}
                                    onPress={() => {}}
                                />
                            ) : (
                                <></>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>

            <View
                style={{
                    height: 40,
                    width: 40,
                    position: "absolute",
                    bottom: 150,
                    right: 15,
                    backgroundColor: Themes.color.light,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#ddd",
                    borderWidth: 1,
                    borderRadius: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 4,

                    elevation: 1,
                }}
            >
                <TouchableOpacity
                    onPress={async () => {
                        await getLocation();
                        setLocationVisible(true);
                    }}
                >
                    <MIcon
                        name="crosshairs-gps"
                        size={30}
                        color={
                            locationVisible
                                ? Themes.color.success
                                : Themes.color.gray
                        }
                    />
                </TouchableOpacity>
            </View>

            {indexParkSelect === dataModal.id && modalVisible === false ? (
                <View
                    style={{
                        height: 50,
                        width: 120,
                        position: "absolute",
                        top: 150,
                        right: 15,
                    }}
                >
                    <Button
                        title="View Detail"
                        style={{
                            TouchableOpacity: {
                                alignItems: "center",
                                justifyContent: "center",
                                width: 120,
                                height: 40,
                                borderRadius: 25,
                                backgroundColor: Themes.color.success,
                                marginVertical: 10,
                                marginHorizontal: 5,
                            },
                            Text: Themes.buttonSuccess.Text,
                        }}
                        onPress={() => {}}
                    />

                    <Button
                        title="Unselect"
                        style={{
                            TouchableOpacity: {
                                alignItems: "center",
                                justifyContent: "center",
                                width: 120,
                                height: 40,
                                borderRadius: 25,
                                backgroundColor: Themes.color.danger,
                                marginVertical: 5,
                                marginHorizontal: 5,
                            },
                            Text: Themes.buttonSuccess.Text,
                        }}
                        onPress={() => {
                            if (indexParkSelect === dataModal.id) {
                                setIndexParkSelect(0);
                            }
                        }}
                    />
                </View>
            ) : (
                <></>
            )}

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

export default HomePage;

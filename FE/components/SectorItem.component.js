import {
    View,
    Text,
    Modal,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Themes from "../config/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Button from "./Button.component";
import AIcon from "react-native-vector-icons/AntDesign";

const SectorItem = (props) => {
    const { item } = props;

    const [positionInfo, setPositionInfo] = React.useState({
        sector: "",
        row: "",
        position: "",
    });

    const [modalVisible, setModalVisible] = React.useState(false);

    const [successVisible, setSuccessVisible] = React.useState(false);

    return (
        <View
            style={{
                height: 480,
                width: useWindowDimensions().width,
                paddingHorizontal: 20,
                borderRadius: 10,
            }}
        >
            <ScrollView
                style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: Themes.color.light,
                    borderRadius: 10,
                    borderColor: Themes.color.gray,
                    borderWidth: 1,
                }}
                showsVerticalScrollIndicator={false}
            >
                {item.rows.map((row, index) => {
                    return (
                        <View
                            style={{
                                height: 480 / 6,
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 10,
                                padding: 10,
                            }}
                            key={index}
                        >
                            <View
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: Themes.color.info + "aa",
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                }}
                            >
                                {row.positions.map((pos, i) => {
                                    if (pos.status === false) {
                                        return (
                                            <View
                                                key={i}
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                    backgroundColor:
                                                        Themes.color.light,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: 10,
                                                }}
                                            >
                                                <Icon
                                                    name="car"
                                                    size={30}
                                                    color={Themes.color.primary}
                                                />
                                            </View>
                                        );
                                    } else {
                                        return (
                                            <View
                                                key={i}
                                                style={{
                                                    height: 40,
                                                    width: 40,
                                                    backgroundColor:
                                                        Themes.color.light,
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: 10,
                                                }}
                                            >
                                                <TouchableOpacity
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                        backgroundColor:
                                                            Themes.color
                                                                .success,
                                                        borderRadius: 10,
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                    onPress={() => {
                                                        setPositionInfo({
                                                            sector: item.name,
                                                            row: row.name,
                                                            position: pos.name,
                                                        });
                                                        setModalVisible(
                                                            !modalVisible
                                                        );
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            color: Themes.color
                                                                .light,
                                                            fontSize: 18,
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        {
                                                            pos.name[
                                                                pos.name
                                                                    .length - 1
                                                            ]
                                                        }
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }
                                })}
                            </View>
                        </View>
                    );
                })}
            </ScrollView>

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
                                Do you want to save current location ?
                            </Text>
                        </View>

                        <View
                            style={{
                                height: 50,
                                width: "85%",
                                borderColor: Themes.color.info,
                                borderWidth: 1,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                marginVertical: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: Themes.color.info,
                                    fontWeight: "bold",
                                }}
                            >
                                {positionInfo.sector} - {positionInfo.row} -{" "}
                                {positionInfo.position}
                            </Text>
                        </View>

                        <View
                            style={{
                                marginTop: 20,
                            }}
                        >
                            <Button
                                title="Save"
                                style={Themes.buttonSuccess}
                                onPress={() => {
                                    setSuccessVisible(!successVisible);
                                    setModalVisible(!modalVisible);
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

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
        </View>
    );
};

export default SectorItem;

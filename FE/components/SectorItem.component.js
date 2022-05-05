import {
    View,
    Text,
    useWindowDimensions,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Themes from "../config/theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const SectorItem = (props) => {
    const { item } = props;
    return (
        <View
            style={{
                height: 520,
                width: useWindowDimensions().width,
                padding: 20,
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
                                    backgroundColor:
                                        Themes.color.primary + "aa",
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
                                                    color={Themes.color.info}
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
                                                <TouchableOpacity style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    backgroundColor: Themes.color.success,
                                                    borderRadius: 10,
                                                }}>

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
        </View>
    );
};

export default SectorItem;

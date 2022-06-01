import {
    View,
    Text,
    FlatList,
    Animated,
    ScrollView,
    useWindowDimensions,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import SectorItem from "../../components/SectorItem.component";

import { getItem } from "./../../store/index";

const SelectSector = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const [parking, setParking] = React.useState({
        location: {
            type: "Point",
            coordinates: [],
        },
        _id: "",
        name: "",
        address: "",
        price: "",
        time_start: "",
        time_end: "",
        total_slot: 0,
        free_slot: 0,
        sectors: [],
    })

    const getParkingInfo = async () => {
        try {
            const value = await getItem("parkingSelect")
            setParking(value);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getParkingInfo();
    },[]);

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return (
        <View style={Themes.container}>
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
                                navigation.navigate("Home");
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
                            Parking Detail
                        </Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                </View>

                <View
                    style={{
                        borderColor: Themes.color.primary,
                        height: 60,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: Themes.color.light,
                    }}
                >
                    <Text
                        style={{
                            color: Themes.color.primary,
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        {
                            parking.name
                        }
                    </Text>
                </View>
            </View>

            <View style={[Themes.container, { marginTop: 140 }]}>
                <View
                    style={{
                        height: 60,
                        flexDirection: "row",
                        borderBottomColor: Themes.color.gray,
                        borderBottomWidth: 1,
                        marginBottom: 10,
                    }}
                >
                    <ScrollView
                        style={{
                            height: 50,
                            width: useWindowDimensions().width,
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {parking.sectors.map((sector, idx) => {
                            if (idx !== currentIndex) {
                                return (
                                    <Button
                                        key={idx}
                                        title={sector.name}
                                        style={Themes.buttonOutlineGray}
                                        onPress={() => {
                                            if (slidesRef.current) {
                                                slidesRef.current.scrollToIndex(
                                                    {
                                                        animated: false,
                                                        index: idx,
                                                    }
                                                );
                                            }

                                            setCurrentIndex(idx);
                                        }}
                                    />
                                );
                            } else {
                                return (
                                    <Button
                                        key={idx}
                                        title={sector.name}
                                        style={Themes.buttonSuccess}
                                        onPress={() => {
                                            if (slidesRef.current) {
                                                slidesRef.current.scrollToIndex(
                                                    {
                                                        animated: false,
                                                        index: idx,
                                                    }
                                                );
                                            }
                                            setCurrentIndex(idx);
                                        }}
                                    />
                                );
                            }
                        })}
                    </ScrollView>
                </View>
                <FlatList
                    data={parking.sectors}
                    renderItem={({ item }) => <SectorItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    removeClippedSubviews={true}
                    bounces={false}
                    keyExtractor={(item) => item.name}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    scrollEventThrottle={30}
                    onViewableItemsChanged={viewableItemChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
        </View>
    );
};

export default SelectSector;

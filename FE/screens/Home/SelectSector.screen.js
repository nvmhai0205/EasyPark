import { View, Text, FlatList, Animated } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";

import Sectors from "./../../config/Sectors";
import SectorItem from "../../components/SectorItem.component";

const SelectSector = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return (
        <View style={Themes.container}>
            <View
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    height: 140,
                    // backgroundColor: Themes.color.transparent,
                    paddingHorizontal: 20,
                    paddingVertical: 0,
                    alignItems: "center",
                    elevation: 1000,
                    borderBottomColor: Themes.color.primary,
                    borderBottomWidth: 1,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: Themes.color.primary + "aa",
                }}
            >
                <View
                    style={{
                        width: "100%",
                    }}
                >
                    <Button
                        title="Back"
                        style={{
                            TouchableOpacity: {
                                alignItems: "center",
                                justifyContent: "center",
                                width: 60,
                                height: 40,
                                borderRadius: 25,
                                backgroundColor: Themes.color.primary,
                                marginVertical: 10,
                            },
                            Text: {
                                color: Themes.color.light,
                            },
                        }}
                        onPress={() => {}}
                        size={30}
                    />
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
                        The Student's Cultural House
                    </Text>
                </View>
            </View>

            <View style={[Themes.container, {marginTop: 150,}]}>
                <View style={{
                    height: 50,
                }}>

                </View>
                <FlatList
                    data={Sectors}
                    renderItem={({ item }) => <SectorItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
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

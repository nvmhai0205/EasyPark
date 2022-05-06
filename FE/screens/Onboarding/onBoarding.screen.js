import { View, FlatList, Animated, Text } from "react-native";
import React, { useState, useRef } from "react";
import Themes from "../../config/theme";
import OnBoardList from "./../../config/onBoardSlides";
import OnBoardItem from "../../components/OnBoardItem.component";
import Button from "../../components/Button.component";

const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={[Themes.container]}>
            <FlatList
                data={OnBoardList}
                renderItem={({ item }) => <OnBoardItem item={item} />}
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

            <View
                style={[
                    Themes.flex,
                    { height: 40, position: "absolute", bottom: 50 },
                ]}
            >
                <Button
                    title="Back"
                    onPress={() => {
                        if (currentIndex === 0) {
                            return;
                        }

                        if (slidesRef.current) {
                            slidesRef.current.scrollToIndex({
                                animated: true,
                                index: currentIndex - 1,
                            });
                        }

                        setCurrentIndex(currentIndex - 1);
                        
                    }}
                    style={(currentIndex !== 0) ? Themes.buttonOutlinePrimary : Themes.buttonOutlineGray}
                />
                <View
                    style={{
                        width: 100,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {OnBoardList.map((item, index) => {
                        const color =
                            index === currentIndex
                                ? Themes.color.gray
                                : "#dddddddd";
                        return (
                            <View
                                style={{
                                    height: 10,
                                    width: 10,
                                    backgroundColor: color,
                                    borderRadius: 5,
                                    margin: 5,
                                }}
                                key={index}
                            >
                                <Text></Text>
                            </View>
                        );
                    })}
                </View>
                <Button
                    title={(currentIndex !== OnBoardList.length - 1) ? "Next" : "Done"}
                    onPress={() => {
                        if (currentIndex === OnBoardList.length - 1) {
                            navigation.navigate("SplashScreen");
                            return;
                        }
                        if (slidesRef.current) {
                            slidesRef.current.scrollToIndex({
                                animated: true,
                                index: currentIndex + 1,
                            });
                        }
                        setCurrentIndex(currentIndex + 1);
                    }}
                    style={(currentIndex !== OnBoardList.length - 1) ? Themes.buttonOutlinePrimary : Themes.buttonOutlineSuccess}
                />
            </View>
        </View>
    );
};

export default OnBoarding;

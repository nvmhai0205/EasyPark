import { View, Text, TextInput } from "react-native";
import React from "react";
import Themes from "../../config/theme";
import Button from "../../components/Button.component";
import MapView, { Marker } from "react-native-maps";

const HomePage = () => {
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
                    height: 140,
                    backgroundColor: Themes.color.primary + "aa",
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    opacity: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    alignItems: "center",
                    elevation: 100,
                }}
            >
                <View
                    style={{
                        width: "100%",
                    }}
                >
                    <Button
                        title=""
                        style={[Themes.buttonTransparent, { height: 30 }]}
                        onPress={() => {}}
                        icon="navicon"
                        size={30}
                    />
                </View>

                <View
                    style={[
                        Themes.inputIcon,
                        {
                            width: "100%",
                            height: 60,
                            backgroundColor: "#fff",
                            elevation: 100,
                            zIndex: 100,
                        },
                    ]}
                >
                    <TextInput
                        style={[
                            Themes.input,
                            {
                                height: 60,
                                paddingHorizontal: 20,
                                fontSize: 16,
                                width: "95%",
                                elevation: 100,
                            },
                        ]}
                        placeholder="Where do you want to go ?"
                        
                    />
                </View>
            </View>

            {/* Map */}
            <MapView
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    bottom: 0,
                    opacity: 1,
                    elevation: 0,
                }}
                initialRegion={{
                    latitude: 30,
                    longitude: -120,
                    latitudeDelta: 0.9,
                    longitudeDelta: 0.5,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 30,
                        longitude: -120,
                    }}
                >
                    
                </Marker>
            </MapView>
        </View>
    );
};

export default HomePage;

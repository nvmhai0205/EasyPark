import { View, TextInput, Text, Alert } from "react-native";
import Button from "../../components/Button.component";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import Link from "../../components/Link.component";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Loadding from "../../components/Loadding.component";

const IndexOnBoarding = () => {
    const Theme = useTheme();
    const [show, setShow] = useState(false);
    
    return (
        <View style={Theme.container}>
            <Text style={Theme.headding}>Create Account</Text>
            <Text style={Theme.label}>Email</Text>
            <View style={Theme.inputIconWarning}>
                <TextInput style={Theme.input} placeholder="Email ID" />
                <View style={Theme.icon}>
                    <MIcon name="email" size={16} color={Theme.color.danger} />
                </View>
            </View>

            <Text style={Theme.validate}>Invalid Email</Text>

            <Link
                style={Theme.link}
                onPress={() => {}}
                title="Create an account"
            />

            <Button title="Getting Started" style={Theme.button} />

            <View style={Theme.flex}>
                <Button title="Cancel" style={Theme.buttonOutlinePrimary} />
                <Button title="Next" style={Theme.buttonOutlineSuccess} />
            </View>

            <View style={Theme.flex}>
                <Button title="Cancel" style={Theme.buttonGray} />
                <Button title="Next" style={Theme.buttonSuccess} />
            </View>

            <View style={Theme.flex}>
                <Button title="SKIP" style={Theme.buttonTransparent} />
                <Button title="Next" style={Theme.buttonTransparent} />
            </View>

            <Button
                title="Loadding"
                onPress={() => {
                    setShow(true);
                }}
                style={Theme.button}
            />

            
            {(show) ? <Loadding /> : <Text></Text>}
            
            
        </View>
    );
};

export default IndexOnBoarding;

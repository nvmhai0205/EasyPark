import React from 'react';
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Themes from './config/theme';

import IndexOnBoarding from './screens/Onboarding/indexOnBoarding.screen';

export default function App() {
    return (
        <NavigationContainer theme={Themes}>
            <IndexOnBoarding/>
        </NavigationContainer>
    );
}

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import IndexOnBoarding from './screens/Onboarding/indexOnBoarding.screen';
import OnBoarding from './screens/Onboarding/onBoarding.screen';
import SplashScreen from './screens/Onboarding/Splash.screen';

export default function App() {
    return (
        <NavigationContainer>
            <SplashScreen />
        </NavigationContainer>
    );
}

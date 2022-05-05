import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import IndexOnBoarding from './screens/Onboarding/indexOnBoarding.screen';
import OnBoarding from './screens/Onboarding/onBoarding.screen';
import SplashScreen from './screens/Onboarding/Splash.screen';
import LoginPage from './screens/Accounts/login.screen';
import RegisterPage from './screens/Accounts/resgister.screen';
import HomePage from './screens/Home/index.screen';
import SelectSector from './screens/Home/SelectSector.screen';

export default function App() {
    return (
        <NavigationContainer>
            <SelectSector />
        </NavigationContainer>
    );
}

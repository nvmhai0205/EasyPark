import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexOnBoarding from './screens/Onboarding/indexOnBoarding.screen';
import OnBoarding from './screens/Onboarding/onBoarding.screen';
import SplashScreen from './screens/Onboarding/Splash.screen';
import LoginPage from './screens/Accounts/login.screen';
import RegisterPage from './screens/Accounts/resgister.screen';
import HomePage from './screens/Home/index.screen';
import SelectSector from './screens/Home/SelectSector.screen';
import Tabs from './navigation/Tabs';
import Setting from './screens/Setting/setting.screen';
import History from './screens/History/history.screen';

const Stack = createNativeStackNavigator();

import { storeItem, getItem } from "./store/index";


export default function App({ navigation }) {

    const [pageOnboard, setPageOnboard] = React.useState(true)

    const getAsyncStorage = async () => {
        const value = await getItem("Onboarding");
        if (value === null) {
            storeItem("Onboarding", false)
            console.log("Hello");
        } else {
            setPageOnboard(false)
        }
    };

    useEffect(() => {
        getAsyncStorage();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={(pageOnboard === true) ? "IndexOnBoarding" : "SignIn"}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="IndexOnBoarding" component={IndexOnBoarding} />
                <Stack.Screen name='OnBoard' component={OnBoarding} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignUp" component={RegisterPage} />
                <Stack.Screen name="SignIn" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

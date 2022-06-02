import React, { } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexOnBoarding from "./screens/Onboarding/indexOnBoarding.screen";
import OnBoarding from "./screens/Onboarding/onBoarding.screen";
import SplashScreen from "./screens/Onboarding/Splash.screen";
import LoginPage from "./screens/Accounts/login.screen";
import RegisterPage from "./screens/Accounts/resgister.screen";
import SelectSector from "./screens/Home/SelectSector.screen";
import Tabs from "./navigation/Tabs";

const Stack = createNativeStackNavigator();

import { Provider } from "react-redux";
import { store } from "./stores";
import ForgotIndex from "./screens/Accounts/forgot.screen";
import VerifyAccount from "./screens/Accounts/verify.screen";
import ResetPassword from "./screens/Accounts/reset";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={"IndexOnBoarding"}
                >
                    <Stack.Screen name="Home" component={Tabs} />
                    <Stack.Screen
                        name="IndexOnBoarding"
                        component={IndexOnBoarding}
                    />
                    <Stack.Screen name="OnBoard" component={OnBoarding} />
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                    />
                    <Stack.Screen name="SignUp" component={RegisterPage} />
                    <Stack.Screen name="SignIn" component={LoginPage} />
                    <Stack.Screen name="ForgotIndex" component={ForgotIndex} />
                    <Stack.Screen name="Verify" component={VerifyAccount} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} />
                    <Stack.Screen
                        name="SelectSector"
                        component={SelectSector}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

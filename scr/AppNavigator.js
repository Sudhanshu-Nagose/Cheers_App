import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./screens/Home";
import One from "./screens/One";
import Location from "./screens/Location";
import Pincode from "./screens/Pincode";
import CurrentLocation from "./screens/CurrentLocation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="One"
                    component={One}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Location"
                    component={Location}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Pincode"
                    component={Pincode}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                name="CurrentLocation"
                component={CurrentLocation}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

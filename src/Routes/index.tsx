import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import AppDetailScreen from "../screens/Detail";
import AppHomeScreen from "../screens/Home";

export type RootStackParamList = {
  AppDetailScreen: undefined;
  AppHomeScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AppHomeScreen"
        component={AppHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="AppDetailScreen" component={AppDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppRoutes;

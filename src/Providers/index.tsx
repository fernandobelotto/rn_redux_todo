import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "react-redux";
import AppRoutes from "../Routes";
import store from "../store";

const AppProviders = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <AppRoutes />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default AppProviders;

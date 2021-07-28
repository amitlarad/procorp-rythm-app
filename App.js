import { StatusBar } from 'expo-status-bar';
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Database, { DatabaseContext } from "./src/Provider";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/Configs/ThemeConfig";
import EmailLogin from './src/Screens/Auth/EmailLogin';
import MainApplicationNavigationComponent from './src/SysNavigations/MainApplicationNavigationComponent';
import DrawerNavigationStack from './src/SysNavigations/DrawerNavigationStack';

export default (props) => {
  let [fontsLoaded] = useFonts({
    Heading: require("./assets/fonts/Heading.ttf"),
    SubHeading: require("./assets/fonts/SubHeading.ttf"),
    Regular: require("./assets/fonts/Regular.ttf"),
    Thin: require("./assets/fonts/Thin.ttf"),
    Logo: require("./assets/fonts/Logo.ttf"),
    Logo2: require("./assets/fonts/Logo2.otf"),
    LogoShape: require("./assets/fonts/Logo2.ttf"),
    TriangleThin: require("./assets/fonts/TriangleThin.otf"),
    TriThick: require("./assets/fonts/TriThick.otf"),
    Handwriting: require("./assets/fonts/Handwriting.otf"),
    Handwriting2: require("./assets/fonts/HandWriting2.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <DatabaseContext.Provider value={new Database()}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <MainApplicationNavigationComponent/>
            {/* <DrawerNavigationStack/> */}
          </NavigationContainer>
        </PaperProvider>
      </DatabaseContext.Provider>
    );
  }
};
import React from "react";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { logoTextUpper } from "../Configs/StyleConstants";
import theme from "../Configs/ThemeConfig";

const AppbarComponent = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Appbar.Header style={{ backgroundColor:theme.colors.background, elevation:5 }}>
        {/* <Appbar.Action icon="menu" onPress={() => {navigation.toggleDrawer();}} /> */}
        {/* <Appbar.Action icon="menu" onPress={() => {}} /> */}
        <Appbar.Content title={logoTextUpper} subtitle="Complete HRMS Solution" />
        <Appbar.Action icon="account-outline" onPress={() => {}} />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default AppbarComponent;

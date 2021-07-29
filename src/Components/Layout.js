import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { fullFlexColumn, VERTICAL_LIST_SIZE } from "../Configs/StyleConstants";
import theme from "../Configs/ThemeConfig";

const Layout = (props) => {
  return (
    <View style={{ ...fullFlexColumn, backgroundColor:theme.colors.background, paddingTop:((VERTICAL_LIST_SIZE > 3) ? 60 : 0) }}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});

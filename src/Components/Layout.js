import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { fullFlexColumn } from "../Configs/StyleConstants";
import theme from "../Configs/ThemeConfig";

const Layout = (props) => {
  return (
    <View style={{ ...fullFlexColumn, backgroundColor:theme.colors.background }}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});

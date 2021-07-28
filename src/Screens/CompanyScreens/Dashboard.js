import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import { mainTopContainer } from "../../Configs/StyleConstants";
import { Grid, Row, Column } from "react-native-easy-grid";
import Layout from "../../Components/Layout";

const Dashboard = (props) => {
  return (
    <Layout shopAppbar={true} {...props}>
      <View style={{ ...mainTopContainer }}>
        <Text>Dashboard</Text>
      </View>
    </Layout>
  );
};

export default withDatabase(withTheme(Dashboard));

const styles = StyleSheet.create({});

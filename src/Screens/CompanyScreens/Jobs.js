import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import { mainTopContainer } from "../../Configs/StyleConstants";
import { Grid, Row, Column } from "react-native-easy-grid";
import Layout from "../../Components/Layout";

const Jobs = (props) => {
  return (
    <Layout showAppbar={true}>
      <View style={{ ...mainTopContainer }}>
        <Text>Jobs</Text>
      </View>
    </Layout>
  );
};

export default withDatabase(withTheme(Jobs));

const styles = StyleSheet.create({});

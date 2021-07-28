import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import { mainTopContainer } from "../../Configs/StyleConstants";
import { Grid, Row, Column } from "react-native-easy-grid";
import Layout from "../../Components/Layout";

const CompanyConfig = (props) => {
  return (
    <Layout showAppbar={true}>
      <View style={{ ...mainTopContainer }}>
        <Text>CompanyConfig</Text>
      </View>
    </Layout>
  );
};

export default withDatabase(withTheme(CompanyConfig));

const styles = StyleSheet.create({});

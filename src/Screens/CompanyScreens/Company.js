import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withDatabase } from "../../Provider";
import { Button, withTheme } from "react-native-paper";
import { mainTopContainer } from "../../Configs/StyleConstants";
import { Grid, Row, Column } from "react-native-easy-grid";
import Layout from "../../Components/Layout";

const Company = (props) => {
  return (
    <Layout showAppbar={true}>
      <View style={{ ...mainTopContainer }}>
        <Text>Company</Text>
        <Button
          onPress={() => props.navigation.navigate("CompanyProfile")}
          mode="outlined"
          icon="eye"
          contentStyle={{ flexDirection: "row-reverse", marginVertical: 10 }}
        >
          Profile
        </Button>
      </View>
    </Layout>
  );
};

export default withDatabase(withTheme(Company));

const styles = StyleSheet.create({});

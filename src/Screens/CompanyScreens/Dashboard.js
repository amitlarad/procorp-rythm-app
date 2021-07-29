import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withDatabase } from "../../Provider";
import { Title, withTheme } from "react-native-paper";
import Layout from "../../Components/Layout";
import {
  alignSelfCenter,
  viewCol,
  viewColFull,
  elevated2,
  lightGrayBgBox,
  marginVertical5,
  width95,
  elevated3,
  marginVertical10,
  VERTICAL_LIST_SIZE,
  themeAccentColor,
  AreaChartExample,
  PieChartExample,
  RecruitmentProcessTable,
} from "../../Configs/StyleConstants";
import ItemsGrid from "../../Components/ItemsGrid";
import theme from "../../Configs/ThemeConfig";

const Dashboard = (props) => {
  const colType = VERTICAL_LIST_SIZE <= 2 ? viewColFull : viewCol;
  return (
    <Layout shopAppbar={true} {...props}>
      <ItemsGrid cls={{ ...width95, ...alignSelfCenter }}>
        <View
          style={{
            ...colType,
            ...elevated3,
            ...lightGrayBgBox,
            ...marginVertical5,
          }}
        >
          <Title style={{ color: theme.colors.accent, ...alignSelfCenter }}>
            Employees Performance
          </Title>
          <AreaChartExample />
        </View>
        <View
          style={{
            ...colType,
            ...elevated3,
            ...lightGrayBgBox,
            ...marginVertical5,
          }}
        >
          <Title style={{ color: theme.colors.accent, ...alignSelfCenter }}>
            Today's Attendence
          </Title>
          <PieChartExample />
        </View>
      </ItemsGrid>
      <ItemsGrid cls={{ marginBottom:60, ...width95, ...alignSelfCenter}}>
        <View
          style={{
            ...viewColFull,
            ...elevated3,
            ...lightGrayBgBox,
            ...marginVertical5,
          }}
        >
          <Title style={{ color: theme.colors.accent, ...alignSelfCenter }}>
            Rectruitments Today
          </Title>
          <RecruitmentProcessTable />
        </View>
      </ItemsGrid>
    </Layout>
  );
};

export default withDatabase(withTheme(Dashboard));

const styles = StyleSheet.create({});

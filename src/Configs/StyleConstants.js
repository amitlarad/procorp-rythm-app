import React, { useState, useEffect } from "react";
import { Dimensions, Platform, Text } from "react-native";
import theme from "./ThemeConfig";
import { AreaChart, Grid, PieChart } from "react-native-svg-charts";
import { DataTable } from "react-native-paper";
import * as shape from "d3-shape";

export const logoTextUpper = "RYTHM";
export const themeTextColor = theme.colors.text;
export const themePrimaryColor = theme.colors.primary;
export const themeAccentColor = theme.colors.accent;
export const themeBackgroundColor = theme.colors.background;
export const themeDisabledColor = theme.colors.disabled;
export const themeErrorColor = theme.colors.error;
export const themeNotificationColor = theme.colors.notification;
export const themeOnSurfaceColor = theme.colors.onSurface;
export const themePlaceholderColor = theme.colors.placeholder;
export const themeSurfaceColor = theme.colors.surface;

export const CURRENCY_SYMBOL = "$";
export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;
export const PLATFORM_IS_TV = Platform.isTV;
export const PLATFORM_IS_IPAD = Platform.isPad;
export const PLATFORM_OS = Platform.OS;
export const PLATFORM_IS_IOS = PLATFORM_OS == "ios";
export const PLATFORM_IS_ANDROID = PLATFORM_OS == "android";
export const PLATFORM_IS_WEB = PLATFORM_OS != "android" && PLATFORM_OS != "ios";
export const VERTICAL_LIST_SIZE = PLATFORM_IS_IPAD
  ? 3
  : PLATFORM_IS_WEB
  ? 6
  : PLATFORM_IS_TV
  ? 6
  : 2;

export const width95 = {
  width: DEVICE_WIDTH / 1.05,
};

export const lightGrayBgBox = {
  backgroundColor: "#f9f9f9",
  borderColor: "#fdfdfd",
  borderWidth: 1,
  borderRadius: 10,
  padding: 5,
};

export const elevated1 = {
  elevation: 1,
};

export const elevated2 = {
  elevation: 2,
};

export const elevated3 = {
  elevation: 3,
};

export const elevated4 = {
  elevation: 4,
};

export const elevated5 = {
  elevation: 5,
};

export const panelView = {
  paddingHorizontal: 0,
  paddingVertical: 10,
  overflow: "hidden",
  width: DEVICE_WIDTH,
};

export const viewRow = {
  flex: 1,
  flexWrap: "wrap",
  flexDirection: "row",
  padding: 5,
};

export const viewCol = {
  width: Math.floor(100 / (VERTICAL_LIST_SIZE + 0.1)) + "%",
  marginVertical: 5,
  marginHorizontal: 5,
  padding: 10,
  alignSelf: "center",
};

export const viewColFull = {
  width: Math.floor(100 / 1) + "%",
  alignSelf: "center",
};

export const alignSelfStart = {
  alignSelf: "flex-start",
};

export const alignSelfCenter = {
  alignSelf: "center",
};

export const offsetCenterContent = {
  alignSelf: "center",
  width:
    PLATFORM_IS_WEB && DEVICE_WIDTH > 500
      ? DEVICE_WIDTH / 3
      : DEVICE_WIDTH - 20,
};

export const cardIconSize = 50;

export const alignSelfEnd = {
  alignSelf: "flex-end",
};

export const marginVertical5 = {
  marginVertical: 5,
};

export const marginVertical10 = {
  marginVertical: 10,
};

export const marginHorizontal5 = {
  marginHorizontal: 5,
};

export const marginHorizontal10 = {
  marginHorizontal: 10,
};

export const fullFlexColumn = {
  flex: 1,
};

export const fullFlexRow = {
  flex: 1,
  flexDirection: "row",
};

export const flexRow = {
  flexDirection: "row",
};
export const rowReverse = {
  flexDirection: "row-reverse",
};

export const allCenterStyle = {
  alignItems: "center",
  justifyContent: "center",
};

export const allInCenterStyle = {
  alignItems: "center",
};

export const allSpaceBetweenStyle = {
  justifyContent: "space-between",
};

export const allSpaceAroundStyle = {
  justifyContent: "space-around",
};

export const mainTopContainer = {
  flex: 1,
  backgroundColor: theme.colors.background,
  justifyContent: "center",
  paddingHorizontal: 10,
};
export const TriThick = {
  fontFamily: "TriThick",
};
export const TriangleThin = {
  fontFamily: "TriangleThin",
};
export const fontHandwriting = {
  fontFamily: "Handwriting",
};
export const font10 = {
  fontSize: 10,
};
export const font11 = {
  fontSize: 11,
};
export const font12 = {
  fontSize: 12,
};
export const font13 = {
  fontSize: 13,
};
export const font14 = {
  fontSize: 14,
};
export const font15 = {
  fontSize: 15,
};
export const font20 = {
  fontSize: 20,
};
export const font25 = {
  fontSize: 25,
};
export const font30 = {
  fontSize: 30,
};
export const font35 = {
  fontSize: 35,
};
export const font40 = {
  fontSize: 40,
};
export const font45 = {
  fontSize: 45,
};
export const font50 = {
  fontSize: 50,
};
export const fontBold = {
  fontWeight: "bold",
};
export const mainContainer = {
  minHeight: DEVICE_HEIGHT,
};

export const TxtBold = {
  fontWeight: "bold",
};
export const TxtNormal = {
  fontWeight: "normal",
};

export const BottomTopBarStyle = {
  backgroundColor: themePrimaryColor,
  paddingVertical: 0,
  paddingHorizontal: 0,
  overflow: "hidden",
  position: "absolute",
  top: 85,
  height: 55,
};

export const BottomBarStyle = {
  borderColor: themeAccentColor,
  borderBottomWidth: 0,
  borderWidth: 5,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: themePrimaryColor,
  paddingVertical: 0,
  paddingHorizontal: 0,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
};

export const BottomIconActiveTextColor = themeAccentColor;
export const BottomIconActiveColor = themeAccentColor;
export const BottomIconInactiveColor = "#909090";
export const BottomIconSize = 22;

export const panelContainerColor = "#f6f6f6";
export const panelContainerClass = {
  backgroundColor: panelContainerColor,
  padding: 10,
  marginVertical: 5,
  borderRadius: 10,
  elevation: 5,
};
export const fontHeading = {
  fontFamily: "Heading",
};
export const fontSubHeading = {
  fontFamily: "SubHeading",
};
export const fontRegular = {
  fontFamily: "Regular",
};
export const fontThin = {
  fontFamily: "Thin",
};

export const AreaChartExample = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <AreaChart
      style={{ height: 200 }}
      data={data}
      contentInset={{ top: 30, bottom: 30 }}
      curve={shape.curveNatural}
      svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
    >
      <Grid />
    </AreaChart>
  );
};

export const PieChartExample = () => {
  const data = [70, 25, 5];

  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const pieData = data
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index),
      },
      key: `pie-${index}`,
    }));

  return <PieChart style={{ height: 200 }} data={pieData} />;
};

const optionsPerPage = [2, 3, 4];

export const RecruitmentProcessTable = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);
  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Candidate</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>CST</DataTable.Title>
        <DataTable.Title>Handler</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Kiran</DataTable.Cell>
        <DataTable.Cell>HR Interview<Text>ERP Dev.</Text></DataTable.Cell>
        <DataTable.Cell>11.00 AM</DataTable.Cell>
        <DataTable.Cell>Chiradeep Ganguly</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ramaiyah</DataTable.Cell>
        <DataTable.Cell>Tech. Interview<Text>Java Dev.</Text></DataTable.Cell>
        <DataTable.Cell>10.00 AM</DataTable.Cell>
        <DataTable.Cell>Shaila</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Vijay</DataTable.Cell>
        <DataTable.Cell>Interview<Text>Devops Java</Text></DataTable.Cell>
        <DataTable.Cell>15.00 PM</DataTable.Cell>
        <DataTable.Cell>Sharath</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={"Rows per page"}
      />
    </DataTable>
  );
};

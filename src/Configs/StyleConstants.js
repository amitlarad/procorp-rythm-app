import { Dimensions, Platform } from "react-native";
import theme from "./ThemeConfig";
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

export const alignSelfStart = {
  alignSelf:'flex-start',
};

export const alignSelfCenter = {
  alignSelf:'center',
};

export const offsetCenterContent = {
  alignSelf:"center",
  width: (PLATFORM_IS_WEB && DEVICE_WIDTH > 500 ? DEVICE_WIDTH / 3 : DEVICE_WIDTH - 20)
};

export const alignSelfEnd = {
  alignSelf:'flex-end',
};


export const marginVertical5 = {
  marginVertical:5,
};

export const marginVertical10 = {
  marginVertical:10,
};

export const marginHorizontal5 = {
  marginHorizontal:5,
};

export const marginHorizontal10 = {
  marginHorizontal:10,
};

export const fullFlexColumn = {
  flex:1
};

export const fullFlexRow = {
  flex:1,
  flexDirection:'row',
};

export const flexRow = {
  flexDirection:'row',
};
export const rowReverse = {
  flexDirection:'row-reverse',
};

export const allCenterStyle = {
  alignItems:'center',
  justifyContent:'center',
};

export const allInCenterStyle = {
  alignItems:'center',
};

export const allSpaceBetweenStyle = {
  justifyContent:'space-between',
};

export const allSpaceAroundStyle = {
  justifyContent:'space-around',
};

export const mainTopContainer = {
  flex: 1,
  backgroundColor:theme.colors.background,
  justifyContent:'center',
  paddingHorizontal:10,
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
  fontWeight:"bold",
}
export const TxtNormal = {
  fontWeight:"normal",
}

export const BottomBarStyle = {
  borderColor: themePrimaryColor,
  borderWidth: 5,
  borderTopLeftRadius:25,
  borderTopRightRadius:25,
  backgroundColor: themePrimaryColor,
  paddingVertical: 0,
  paddingHorizontal: 0,
  overflow: "hidden",
  position:"absolute",
  bottom:0,
};


export const BottomIconActiveTextColor = themeAccentColor;
export const BottomIconActiveColor = themeAccentColor;
export const BottomIconInactiveColor = '#909090';
export const BottomIconSize = 22;

export const panelContainerColor = '#f6f6f6';
export const panelContainerClass = {
  backgroundColor: panelContainerColor,
  padding:10,
  marginVertical:5,
  borderRadius:10,
  elevation:5,
};
export const fontHeading = {
  fontFamily: 'Heading',
};
export const fontSubHeading = {
  fontFamily: 'SubHeading',
};
export const fontRegular = {
  fontFamily: 'Regular',
};
export const fontThin = {
  fontFamily: 'Thin',
};
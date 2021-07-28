import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {
  TxtBold,
  TxtNormal,
  themeAccentColor,
  themeTextColor,
  panelContainerClass,
  fontHeading,
  font30,
  font20,
  fontThin,
  fontBold,
  fontRegular,
  font15,
  DEVICE_WIDTH,
} from "../Configs/StyleConstants";
import Icon from "react-native-vector-icons/Ionicons";
import theme, { SITE_LOGO } from "../Configs/ThemeConfig";
import { Divider, IconButton } from "react-native-paper";

const Span = (props) => {
  return (
    <Text style={!props.cls ? null : [props.cls]}>
      {!props.content ? "Hello" : props.content}
    </Text>
  );
};

const MainTopContainer = (props) => {
  return (
    <View style={!props.cls ? null : [props.cls]}>
      {!props.children ? <Text>Content Missing</Text> : props.children}
    </View>
  );
};

const RenderIcon = (props) => {
  const sizeInc = 0;
  switch (props.icon) {
    default:
    case "AntDesign":
      if (props.color)
        return (
          <AntDesign
            name={!props.name ? "home" : props.name}
            color={!props.color ? "white" : props.color}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      else
        return (
          <AntDesign
            name={!props.name ? "home" : props.name}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );

      break;
    case "MaterialCommunityIcons":
      if (props.color)
        return (
          <MaterialCommunityIcons
            name={!props.name ? "home" : props.name}
            color={!props.color ? "white" : props.color}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      else
        return (
          <MaterialCommunityIcons
            name={!props.name ? "home" : props.name}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
          />
        );
      break;
    case "Fontisto":
      if (props.color)
        return (
          <Fontisto
            name={!props.name ? "home" : props.name}
            color={!props.color ? "white" : props.color}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      else
        return (
          <Fontisto
            name={!props.name ? "home" : props.name}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      break;
    case "SimpleLineIcons":
      if (props.color)
        return (
          <SimpleLineIcons
            name={!props.name ? "home" : props.name}
            color={!props.color ? "white" : props.color}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      else
        return (
          <SimpleLineIcons
            name={!props.name ? "home" : props.name}
            size={
              !props.size
                ? 24
                : !props.bold
                ? props.size
                : parseInt(props.size) + sizeInc
            }
            style={!props.bold ? TxtNormal : TxtBold}
          />
        );
      break;
  }
};

const NavBarComponentTop = ({navigation}) => {
  const leftIcon = () => {return(
    <Icon name={"menu-outline"} size={30} color={themeTextColor} onPress={() => navigation.navigate('MenuPage')}/>
  )};
  const rightIcon = () => {return (
    <Icon name={"search-outline"} size={30} color={themeTextColor} />
  )};
  return (
    <SafeAreaView>
      <View style={styles.mainNav}>
        <IconButton
          icon={leftIcon}
          onPress={() => {
            console.log("Menu Pressed!");
          }}
        />
        <Image style={styles.logo} source={{ uri: SITE_LOGO }} />
        <IconButton
          icon={rightIcon}
          onPress={() => {
            console.log("Search Pressed!");
          }}
        />
      </View>
    
    </SafeAreaView>
  );
};

const ContainerPanel = (props) => {
  return (
    <View style={panelContainerClass}>
      {props.heading != '' && <Text style={{ ...fontRegular, ...font15, ...fontBold, color:theme.colors.primary }}>{props.heading}</Text>}
      {props.heading && <Divider/>}
      {props.children}
    </View>
  );
};

export { Span, MainTopContainer, RenderIcon, NavBarComponentTop,ContainerPanel };

const styles = StyleSheet.create({
  mainNav: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 15,
    alignItems: "center",
    margin: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "center",
  },
});

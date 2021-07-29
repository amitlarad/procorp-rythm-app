import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
    alignSelfCenter,
  font20,
  font25,
  fontSubHeading,
  fontThin,
  panelView,
  themeAccentColor,
  viewRow,
} from "../Configs/StyleConstants";

const ItemsGrid = (props) => {
  return (
    <View style={props.cls ? [ props.cls ] : {...panelView}}>
      {props.heading && <Text style={{ ...font20, ...fontSubHeading, ...alignSelfCenter, color:themeAccentColor }}>{props.heading}</Text>}
      <View style={{  ...viewRow  }}>
        {props.children}
      </View>
    </View>
  );
};

export default ItemsGrid;

const itemsGridStyle = StyleSheet.create({});

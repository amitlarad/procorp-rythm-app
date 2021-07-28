import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Span } from "./Shared";
import { TriThick, font30, marginVertical10, font40, logoTextUpper } from "../Configs/StyleConstants";

const TextLogo = () => {
  return (
    <Span
      cls={{ ...TriThick, ...font40, ...marginVertical10, alignSelf:'center' }}
      content={logoTextUpper}
    />
  );
};

export default TextLogo;

const styles = StyleSheet.create({});

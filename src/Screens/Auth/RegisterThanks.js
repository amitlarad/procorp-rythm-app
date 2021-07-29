import React, { useState } from "react";
import { View } from "react-native";
import {
  mainTopContainer,
  offsetCenterContent,
  alignSelfCenter,
  themeAccentColor,
  logoTextUpper,
} from "../../Configs/StyleConstants";
import TextLogo from "../../Components/TextLogo";
import { MainTopContainer } from "../../Components/Shared";
import {
  Button,
  Title,
  withTheme,
  Paragraph,
  Divider,
} from "react-native-paper";
import { withDatabase } from "../../Provider";

const RegisterThanks = ({ navigation, theme, database }) => {
  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
          Registration Successful!
        </Title>
        <Paragraph>
          You have been successfully registered with {logoTextUpper}
        </Paragraph>
        <Divider />
        <Button
          style={{ marginTop: 15 }}
          icon="login"
          contentStyle={{ flexDirection: "row-reverse" }}
          mode="contained"
          onPress={() => {
            navigation.replace("EmailLogin");
          }}
        >
          Continue to Sign in
        </Button>
      </View>
      {/*  */}
    </MainTopContainer>
  );
};

export default withDatabase(withTheme(RegisterThanks));

import React, { useState } from "react";
import { View } from "react-native";
import {
  mainTopContainer,
  offsetCenterContent,
  alignSelfCenter,
  themeAccentColor,
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

const AccountRecoverThanks = ({ navigation, theme, database }) => {
  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
          Account recovery submitted!
        </Title>
        <Paragraph>
          Your account recovery instructions are sent on your email address
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

export default withDatabase(withTheme(AccountRecoverThanks));

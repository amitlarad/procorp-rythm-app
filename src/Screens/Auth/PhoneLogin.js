import React, { useState } from "react";
import { View } from "react-native";
import {
  marginVertical10,
  mainTopContainer,
  allSpaceAroundStyle,
  marginVertical5,
  flexRow,
  offsetCenterContent,
  alignSelfCenter,
  logoTextUpper,
  themeAccentColor,
  marginHorizontal5,
} from "../../Configs/StyleConstants";
import TextLogo from "../../Components/TextLogo";
import { MainTopContainer } from "../../Components/Shared";
import {
  Button,
  Title,
  withTheme,
  Paragraph,
  TextInput,
  Divider,
  Snackbar,
} from "react-native-paper";
import { withDatabase } from "../../Provider";

const PhoneLogin = ({ navigation, theme, database }) => {
  const [mobile, setMobile] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const validateMobile = () => {
      setShowSnack(true);
  };

  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color:themeAccentColor }}>
          Sign in to {logoTextUpper}!
        </Title>
        <Paragraph>
          Sign in with your mobile number and manage your company HRMS
          completly with {logoTextUpper}
        </Paragraph>
        <TextInput
          style={{ ...marginVertical5 }}
          label="Enter Mobile Number"
          mode="outlined"
          value={mobile}
          onChangeText={(mob) => {
            setMobile(mob);
          }}
          keyboardType="number-pad"
        />
        <Button
          style={{ marginTop: 15 }}
          icon="login"
          contentStyle={{ flexDirection: "row-reverse" }}
          mode="contained"
          onPress={() => {
            validateMobile()
          }}
          disabled={mobile != ""  ? false : true}
        >
          Sign in
        </Button>
        <Button
          mode="text"
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="account-plus-outline"
          onPress={() => {
            navigation.replace("Register");
          }}
        >
          Sign up
        </Button>
        <Button
          mode="text"
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="account-lock-outline"
          style={{ ...marginHorizontal5 }}
          onPress={() => {
            navigation.replace("EmailLogin");
          }}
        >
          Sign in with Email
        </Button>
      </View>
      <Snackbar
        style={{ ...alignSelfCenter }}
        visible={showSnack}
        onDismiss={() => {setShowSnack(false);navigation.navigate("VerifyLogin");}}
        action={{ label: "Verify OTP", onPress: () => {navigation.navigate("VerifyLogin");} }}
        duration={Snackbar.DURATION_SHORT}
      >
        OTP Sent
      </Snackbar>
      {/*  */}
    </MainTopContainer>
  );
};

export default withDatabase(withTheme(PhoneLogin));

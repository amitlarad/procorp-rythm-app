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

const AccountRecover = ({ navigation, theme, database }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const validateRecovery = () => {
    setShowSnack(true);
  };

  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
          Recover your account at {logoTextUpper}!
        </Title>
        <Paragraph>
          Enter your registered Email Address to recover your account.
        </Paragraph>
        <TextInput
          style={{ ...marginVertical5 }}
          label="Enter Email Address"
          mode="outlined"
          value={email}
          onChangeText={(eml) => {
            setEmail(eml);
            console.log("email", eml);
          }}
          keyboardType="email-address"
        />
        <Divider />
        <Button
          style={{ marginTop: 15 }}
          icon="send"
          contentStyle={{ flexDirection: "row-reverse" }}
          mode="contained"
          onPress={() => {
            validateRecovery();
          }}
          disabled={email != ""  ? false : true}
        >
          Submit
        </Button>
        <Button
            mode="text"
            contentStyle={{ flexDirection:'row-reverse' }}
            icon="login"
            style={{ ...marginVertical10 }}
            onPress={() => {navigation.replace('EmailLogin')}}
          >
            Sign In
          </Button>
      </View>
      <Snackbar
        style={{ ...alignSelfCenter }}
        visible={showSnack}
        onDismiss={() => {
          setShowSnack(false);
          navigation.replace("AccountRecoverThanks");
        }}
        action={{
          label: "Instruction sent on email",
          onPress: () => {
            navigation.navigate("AccountRecoverThanks");
          },
        }}
        duration={Snackbar.DURATION_MEDIUM}
      >
        Success
      </Snackbar>
      {/*  */}
    </MainTopContainer>
  );
};

export default withDatabase(withTheme(AccountRecover));

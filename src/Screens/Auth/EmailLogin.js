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
  allSpaceBetweenStyle,
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

const EmailLogin = ({ navigation, theme, database }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const validateLogin = () => {
    setShowSnack(true);
  };

  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
          Sign in to {logoTextUpper}!
        </Title>
        <Paragraph>
          Sign in with your email and password and manage your company HRMS
          completly with {logoTextUpper}
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
        <TextInput
          style={{ ...marginVertical5 }}
          label="Enter Password"
          mode="outlined"
          value={password}
          secureTextEntry={true}
          onChangeText={(pass) => {
            setPassword(pass);
            console.log("password", pass);
          }}
        />
        <Button
          style={{ marginTop: 15 }}
          icon="login"
          contentStyle={{ flexDirection: "row-reverse" }}
          mode="contained"
          onPress={() => {
            validateLogin();
          }}
          disabled={email != "" && password != "" ? false : true}
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
          icon="card-account-phone-outline"
          style={{ ...marginHorizontal5 }}
          onPress={() => {
            navigation.replace("PhoneLogin");
          }}
        >
          Sign in with Mobile
        </Button>
        <Button
          mode="text"
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="account-cog-outline"
          style={{ ...marginHorizontal5 }}
          onPress={() => {
            navigation.replace("AccountRecover");
          }}
        >
          Recover Account
        </Button>
      </View>
      <Snackbar
        style={{ ...alignSelfCenter }}
        visible={showSnack}
        onDismiss={() => {
          setShowSnack(false);
          navigation.navigate("VerifyLogin");
        }}
        action={{
          label: "Login Successful",
          onPress: () => {
            navigation.navigate("VerifyLogin");
          },
        }}
        duration={Snackbar.DURATION_SHORT}
      >
        Success
      </Snackbar>
      {/*  */}
    </MainTopContainer>
  );
};

export default withDatabase(withTheme(EmailLogin));

import React, { useState } from "react";
import { ScrollView, View } from "react-native";
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
  fullFlexColumn,
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

const Register = ({ navigation, theme, database }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const validateLogin = () => {
    setShowSnack(true);
  };

  return (
    <MainTopContainer cls={{ ...mainTopContainer, paddingTop:30 }} database={database}>
      <ScrollView>
        <TextLogo />
        <View style={{ ...offsetCenterContent }}>
          <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
            Sign up with {logoTextUpper}!
          </Title>
          <Paragraph>
            Sign up your company with {logoTextUpper} and manage your company
            HRMS operations hassle free!
          </Paragraph>
          <TextInput
            style={{ ...marginVertical5 }}
            label="Enter First Name"
            mode="outlined"
            value={firstName}
            onChangeText={(fname) => {
              setFirstName(fname);
            }}
          />
          <TextInput
            style={{ ...marginVertical5 }}
            label="Enter Last Name"
            mode="outlined"
            value={lastName}
            onChangeText={(lname) => {
              setLastName(lname);
            }}
          />
          <TextInput
            style={{ ...marginVertical5 }}
            label="Enter Company Name"
            mode="outlined"
            value={companyName}
            onChangeText={(cname) => {
              setCompanyName(cname);
            }}
          />
          <TextInput
            style={{ ...marginVertical5 }}
            label="Enter Email Address"
            mode="outlined"
            value={email}
            onChangeText={(eml) => {
              setEmail(eml);
            }}
            keyboardType="email-address"
          />
          <TextInput
            style={{ ...marginVertical5 }}
            label="Enter Mobile Number"
            mode="outlined"
            value={mobile}
            onChangeText={(mobl) => {
              setMobile(mobl);
            }}
            keyboardType="number-pad"
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
          <Divider />
          <Button
            style={{ marginTop: 15 }}
            icon="login"
            contentStyle={{ flexDirection: "row-reverse" }}
            mode="contained"
            onPress={() => {
              validateLogin();
            }}
            disabled={firstName != "" && lastName != "" && companyName != "" && mobile != "" && email != "" && password != "" ? false : true}
          >
            Sign up
          </Button>
          <View style={{ ...flexRow, ...allSpaceAroundStyle }}>
            <Button
              mode="outline"
              style={{ ...marginVertical10 }}
              onPress={() => {navigation.replace('EmailLogin')}}
            >
              Already Registered? Sign in
            </Button>
          </View>
        </View>
      </ScrollView>
      <Snackbar
        style={{ ...alignSelfCenter }}
        visible={showSnack}
        onDismiss={() => {
          setShowSnack(false);
          navigation.navigate("VerifyLogin");
        }}
        action={{
          label: "Sign up successful",
          onPress: () => {
            navigation.navigate("VerifyLogin");
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

export default withDatabase(withTheme(Register));

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

const VerifyLogin = ({ navigation, theme, database }) => {
  const [otp, setOtp] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const validateOtp = () => {
    setShowSnack(true);
  };

  return (
    <MainTopContainer cls={{ ...mainTopContainer }} database={database}>
      <View style={{ ...offsetCenterContent }}>
        <TextLogo />
        <Title style={{ ...alignSelfCenter, color: themeAccentColor }}>
          Verify Login
        </Title>
        <Paragraph>
          Enter OTP sent on your registered mobile to continue
        </Paragraph>
        <TextInput
          style={{ ...marginVertical5 }}
          label="Enter OTP"
          mode="outlined"
          value={otp}
          onChangeText={(o) => {
            setOtp(o);
          }}
          keyboardType="number-pad"
        />
        <Divider />
        <Button
          style={{ marginTop: 15 }}
          icon="lock"
          contentStyle={{ flexDirection: "row-reverse" }}
          mode="contained"
          onPress={() => {
            validateOtp();
          }}
          disabled={otp != "" ? false : true}
        >
          Validate OTP
        </Button>
        <View style={{ ...flexRow, ...allSpaceAroundStyle }}>
          <Button
            mode="text"
            style={{ ...marginVertical10 }}
            onPress={() => {
              navigation.replace("Register");
            }}
          >
            Sign up
          </Button>
          <Button
            mode="text"
            style={{ ...marginVertical10 }}
            onPress={() => {
              navigation.replace("EmailLogin");
            }}
          >
            Login
          </Button>
        </View>
      </View>
      <Snackbar
        style={{ ...alignSelfCenter }}
        visible={showSnack}
        onDismiss={() => {
          setShowSnack(false);
          navigation.replace('MainDashboardEntry');
        }}
        action={{
          label: "Login Verified",
          onPress: () => {
            navigation.replace('MainDashboardEntry');
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

export default withDatabase(withTheme(VerifyLogin));

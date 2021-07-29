import React from "react";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import TabLandingPage from "../../Components/TabLandingPage";

const CompanyConfig = (props) => {
  const pageCards = props.database.ConfigCards;
  return (
    <TabLandingPage pageCards={pageCards}/>
  );
};

export default withDatabase(withTheme(CompanyConfig));

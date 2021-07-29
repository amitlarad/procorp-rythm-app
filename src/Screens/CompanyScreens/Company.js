import React from "react";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import TabLandingPage from "../../Components/TabLandingPage";

const Company = (props) => {
  const pageCards = props.database.CompanyCards;
  return (
    <TabLandingPage pageCards={pageCards}/>
  );
};

export default withDatabase(withTheme(Company));

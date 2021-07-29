import React from "react";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import TabLandingPage from "../../Components/TabLandingPage";

const Employees = (props) => {
  const pageCards = props.database.EmployeeCards;
  return (
    <TabLandingPage pageCards={pageCards}/>
  );
};

export default withDatabase(withTheme(Employees));

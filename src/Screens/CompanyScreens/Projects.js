import React from "react";
import { withDatabase } from "../../Provider";
import { withTheme } from "react-native-paper";
import TabLandingPage from "../../Components/TabLandingPage";

const Projects = (props) => {
  const pageCards = props.database.ProjectsCards;
  return (
    <TabLandingPage pageCards={pageCards}/>
  );
};

export default withDatabase(withTheme(Projects));

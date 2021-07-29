import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DashboardNavigationStack from "./DashboardNavigationStack";
import CompanyNavigationStack from "./CompanyNavigationStack";
import EmployeesNavigationStack from "./EmployeesNavigationStack";
import ProjectsNavigationStack from "./ProjectsNavigationStack";
import CompanyConfigNavigationStack from "./CompanyConfigNavigationStack";
import {
  BottomIconActiveTextColor,
  BottomBarStyle,
  BottomTopBarStyle,
  BottomIconSize,
  BottomIconActiveColor,
  BottomIconInactiveColor,
  VERTICAL_LIST_SIZE,
} from "../Configs/StyleConstants";
import { RenderIcon } from "../Components/Shared";


const MainBottomNavigator = createMaterialBottomTabNavigator();

const MainBottomNavigationStack = (props) => {
  return (
    <MainBottomNavigator.Navigator
      screenOptions={{ headerShown: false }}
      shifting={false}
      activeColor={BottomIconActiveTextColor}
      barStyle={VERTICAL_LIST_SIZE <= 3 ?  BottomBarStyle : BottomTopBarStyle}
      shifting={false}
    >
      <MainBottomNavigator.Screen
        name="Dashboards"
        component={DashboardNavigationStack}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <RenderIcon
              icon="MaterialCommunityIcons"
              name="view-dashboard-outline"
              size={BottomIconSize}
              color={focused ? BottomIconActiveColor : BottomIconInactiveColor}
              bold={focused ? true : false}
            />
          ),
        }}
      />
      <MainBottomNavigator.Screen
        name="Company"
        component={CompanyNavigationStack}
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ focused }) => (
            <RenderIcon
              icon="MaterialCommunityIcons"
              name="office-building"
              size={BottomIconSize}
              color={focused ? BottomIconActiveColor : BottomIconInactiveColor}
              bold={focused ? true : false}
            />
          ),
        }}
      />
      <MainBottomNavigator.Screen
        name="Employees"
        component={EmployeesNavigationStack}
        options={{
          tabBarLabel: "Employees",
          tabBarIcon: ({ focused }) => (
            <RenderIcon
              icon="MaterialCommunityIcons"
              name="account-box-multiple-outline"
              size={BottomIconSize}
              color={focused ? BottomIconActiveColor : BottomIconInactiveColor}
              bold={focused ? true : false}
            />
          ),
        }}
      />
      <MainBottomNavigator.Screen
        name="Projects"
        component={ProjectsNavigationStack}
        options={{
          tabBarLabel: "Projects",
          tabBarIcon: ({ focused }) => (
            <RenderIcon
              icon="MaterialCommunityIcons"
              name="format-list-text"
              size={BottomIconSize}
              color={focused ? BottomIconActiveColor : BottomIconInactiveColor}
              bold={focused ? true : false}
            />
          ),
        }}
      />
      <MainBottomNavigator.Screen
        name="Settings"
        component={CompanyConfigNavigationStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <RenderIcon
              icon="MaterialCommunityIcons"
              name="table-cog"
              size={BottomIconSize}
              color={focused ? BottomIconActiveColor : BottomIconInactiveColor}
              bold={focused ? true : false}
            />
          ),
        }}
      />
    </MainBottomNavigator.Navigator>
  );
};

export default MainBottomNavigationStack;

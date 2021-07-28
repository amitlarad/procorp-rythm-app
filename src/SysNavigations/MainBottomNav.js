import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DashboardNavigationStack from './DashboardNavigationStack';
import CompanyNavigationStack from './CompanyNavigationStack';
import EmployeesNavigationStack from './EmployeesNavigationStack';
import ProjectsNavigationStack from './ProjectsNavigationStack';
import CompanyConfigNavigationStack from './CompanyConfigNavigationStack';
import { BottomIconActiveTextColor, BottomBarStyle } from '../Configs/StyleConstants';

const MainBottomNavigator = createMaterialBottomTabNavigator();

const MainBottomNavigationStack = (props) => {
    return (
        <MainBottomNavigator.Navigator screenOptions={{ headerShown:false }} shifting={false}
        activeColor={BottomIconActiveTextColor}
      barStyle={BottomBarStyle}
      shifting={false}
        >
            <MainBottomNavigator.Screen name="Dashboard" component={DashboardNavigationStack}/>
            <MainBottomNavigator.Screen name="Company" component={CompanyNavigationStack}/>
            <MainBottomNavigator.Screen name="Employees" component={EmployeesNavigationStack}/>
            <MainBottomNavigator.Screen name="Projects" component={ProjectsNavigationStack}/>
            <MainBottomNavigator.Screen name="Settings" component={CompanyConfigNavigationStack}/>
        </MainBottomNavigator.Navigator>
    );
};

export default MainBottomNavigationStack;
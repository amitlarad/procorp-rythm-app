import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Screens/CompanyScreens/Dashboard';
import AppbarComponent from '../Components/AppbarComponent';

const DashboardStackNavigator = createStackNavigator();

const DashboardNavigationStack = (props) => {
    return (
        <DashboardStackNavigator.Navigator screenOptions={{ headerShown:true, header: AppbarComponent}}>
            <DashboardStackNavigator.Screen name="DashboardArea" component={Dashboard}/>
        </DashboardStackNavigator.Navigator>
    );
};

export default DashboardNavigationStack;
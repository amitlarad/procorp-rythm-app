import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompanyNotifications from '../Screens/CompanyScreens/CompanyNotifications';

const CompanyNotificationsStackNavigator = createStackNavigator();

const CompanyNotificationsNavigationStack = (props) => {
    return (
        <CompanyNotificationsStackNavigator.Navigator screenOptions={{ headerShown:false }}>
            <CompanyNotificationsStackNavigator.Screen name="DashboardArea" component={CompanyNotifications}/>
        </CompanyNotificationsStackNavigator.Navigator>
    );
};

export default CompanyNotificationsNavigationStack;
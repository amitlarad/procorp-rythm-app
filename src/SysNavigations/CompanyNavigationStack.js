import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Company from '../Screens/CompanyScreens/Company';
import AppbarComponent from '../Components/AppbarComponent';
import CompanyProfile from '../Screens/CompanyScreens/Company/CompanyProfile';

const CompanyStackNavigator = createStackNavigator();

const CompanyNavigationStack = (props) => {
    return (
        <CompanyStackNavigator.Navigator screenOptions={{ headerShown:true, header: AppbarComponent}}>
            <CompanyStackNavigator.Screen name="CompanyArea" component={Company}/>
            <CompanyStackNavigator.Screen name="CompanyProfile" component={CompanyProfile}/>
        </CompanyStackNavigator.Navigator>
    );
};

export default CompanyNavigationStack;
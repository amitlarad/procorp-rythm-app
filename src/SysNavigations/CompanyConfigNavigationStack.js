import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CompanyConfig from '../Screens/CompanyScreens/CompanyConfig';
import AppbarComponent from '../Components/AppbarComponent';

const CompanyConfigStackNavigator = createStackNavigator();

const CompanyConfigNavigationStack = (props) => {
    return (
        <CompanyConfigStackNavigator.Navigator screenOptions={{ headerShown:true, header: AppbarComponent}}>
            <CompanyConfigStackNavigator.Screen name="DashboardArea" component={CompanyConfig}/>
        </CompanyConfigStackNavigator.Navigator>
    );
};

export default CompanyConfigNavigationStack;
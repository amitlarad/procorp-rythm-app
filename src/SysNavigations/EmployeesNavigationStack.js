import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Employees from '../Screens/CompanyScreens/Employees';
import AppbarComponent from '../Components/AppbarComponent';

const EmployeesStackNavigator = createStackNavigator();

const EmployeesNavigationStack = (props) => {
    return (
        <EmployeesStackNavigator.Navigator screenOptions={{ headerShown:true, header: AppbarComponent}}>
            <EmployeesStackNavigator.Screen name="DashboardArea" component={Employees}/>
        </EmployeesStackNavigator.Navigator>
    );
};

export default EmployeesNavigationStack;
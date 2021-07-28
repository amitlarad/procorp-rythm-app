import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Jobs from '../Screens/CompanyScreens/Jobs';

const JobsStackNavigator = createStackNavigator();

const JobsNavigationStack = (props) => {
    return (
        <JobsStackNavigator.Navigator screenOptions={{ headerShown:false }}>
            <JobsStackNavigator.Screen name="DashboardArea" component={Jobs}/>
        </JobsStackNavigator.Navigator>
    );
};

export default JobsNavigationStack;
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../Screens/CompanyScreens/Dashboard';
import AppbarComponent from '../Components/AppbarComponent';
import JobsNavigationStack from './JobsNavigationStack';
import EventsAndTrainingsNavigationStack from './EventsAndTrainingsNavigationStack';
import SysStartNav from './SysStartNav';
import MainBottomNavigationStack from './MainBottomNav';

const DrawerStackNavigator = createDrawerNavigator();

const DrawerNavigationStack = (props) => {
    return (
        <DrawerStackNavigator.Navigator screenOptions={{ headerShown:false}} initialRouteName="InitAppRouteEntry">
            <DrawerStackNavigator.Screen name="Jobs" component={JobsNavigationStack}/>
            <DrawerStackNavigator.Screen name="Events" component={EventsAndTrainingsNavigationStack}/>
            <DrawerStackNavigator.Screen name="InitAppRouteEntry" component={SysStartNav} options={{ headerShown: false }}/>
            <DrawerStackNavigator.Screen name="MainDashboardEntry" component={MainBottomNavigationStack} options={{ headerShown: false }}/>
        </DrawerStackNavigator.Navigator>
    );
};

export default DrawerNavigationStack;
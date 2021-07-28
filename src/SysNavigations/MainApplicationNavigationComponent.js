import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SysStartNav from './SysStartNav';
import MainBottomNavigationStack from './MainBottomNav';


const MainAppNavComponent = createStackNavigator();

const MainApplicationNavigationComponent = (props) => {
    return (
        <MainAppNavComponent.Navigator initialRouteName="MainDashboardEntry">
            <MainAppNavComponent.Screen name="InitAppRouteEntry" component={SysStartNav} options={{ headerShown: false }}/>
            <MainAppNavComponent.Screen name="MainDashboardEntry" component={MainBottomNavigationStack} options={{ headerShown: false }}/>
        </MainAppNavComponent.Navigator>
    );
};

export default MainApplicationNavigationComponent;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EventsAndTrainings from '../Screens/CompanyScreens/EventsAndTrainings';

const EventsAndTrainingsStackNavigator = createStackNavigator();

const EventsAndTrainingsNavigationStack = (props) => {
    return (
        <EventsAndTrainingsStackNavigator.Navigator screenOptions={{ headerShown:false }}>
            <EventsAndTrainingsStackNavigator.Screen name="DashboardArea" component={EventsAndTrainings}/>
        </EventsAndTrainingsStackNavigator.Navigator>
    );
};

export default EventsAndTrainingsNavigationStack;
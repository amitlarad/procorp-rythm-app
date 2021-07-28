import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Projects from '../Screens/CompanyScreens/Projects';
import AppbarComponent from '../Components/AppbarComponent';

const ProjectsStackNavigator = createStackNavigator();

const ProjectsNavigationStack = (props) => {
    return (
        <ProjectsStackNavigator.Navigator screenOptions={{ headerShown:true, header: AppbarComponent}}>
            <ProjectsStackNavigator.Screen name="DashboardArea" component={Projects}/>
        </ProjectsStackNavigator.Navigator>
    );
};

export default ProjectsNavigationStack;
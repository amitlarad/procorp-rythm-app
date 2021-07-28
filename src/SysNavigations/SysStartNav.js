import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Start from '../Screens/Init/Start';
import EmailLogin from '../Screens/Auth/EmailLogin';
import PhoneLogin from '../Screens/Auth/PhoneLogin';
import Register from '../Screens/Auth/Register';
import AccountRecover from '../Screens/Auth/AccountRecover';
import AccountRecoverThanks from '../Screens/Auth/AccountRecoverThanks';
import RegisterThanks from '../Screens/Auth/RegisterThanks';
import VerifyLogin from '../Screens/Auth/VerifyLogin';

const SysStartNavStack = createStackNavigator();

const SysStartNavigationStack = (props) => {
    return (
        <SysStartNavStack.Navigator screenOptions={{ headerShown: false }}>
            <SysStartNavStack.Screen name="Start" component={Start} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="EmailLogin" component={EmailLogin} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="PhoneLogin" component={PhoneLogin} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="VerifyLogin" component={VerifyLogin} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="Register" component={Register} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="RegisterThanks" component={RegisterThanks} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="AccountRecover" component={AccountRecover} options={{ headerShown:false }}/>
            <SysStartNavStack.Screen name="AccountRecoverThanks" component={AccountRecoverThanks} options={{ headerShown:false }}/>
        </SysStartNavStack.Navigator>
    );
};

export default SysStartNavigationStack;
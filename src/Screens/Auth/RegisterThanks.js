import React from 'react';
import { StyleSheet} from 'react-native';
import {TriThick, allCenterStyle, marginVertical10, font50, fullFlexColumn} from '../../Configs/StyleConstants';
import { Span, MainTopContainer } from '../../Components/Shared';
import { Button } from 'react-native-paper';
import { withDatabase } from '../../Provider';
import { withTheme } from 'react-native-paper';

const RegisterThanks = ({navigation, theme, database}) => {
    return (
        <MainTopContainer cls={ {...fullFlexColumn, ...allCenterStyle} } database={database}>
            <Span cls={{ ...TriThick, ...font50, ...marginVertical10 }} content="RYTHM"/>
            <Button mode="outline" onPress={() => console.log('RegisterThanks Pressed')}>RegisterThanks</Button>
        </MainTopContainer>
    )
}

export default withDatabase(withTheme(RegisterThanks));

const styles = StyleSheet.create({})

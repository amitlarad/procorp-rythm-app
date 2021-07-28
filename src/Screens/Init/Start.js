import React from 'react';
import {fullFlexColumn, allSpaceBetweenStyle, allInCenterStyle} from '../../Configs/StyleConstants';
import { MainTopContainer } from '../../Components/Shared';
import { Button } from 'react-native-paper';
import { withDatabase } from '../../Provider';
import { withTheme } from 'react-native-paper';
import TextLogo from '../../Components/TextLogo';

const Start = ({navigation, theme, database}) => {
    return (
        <MainTopContainer cls={ {...fullFlexColumn, ...allSpaceBetweenStyle, ...allInCenterStyle, paddingTop:150, paddingBottom:50, backgroundColor:theme.colors.background} } database={database}>
            <TextLogo/>
            <Button mode="contained" onPress={() => navigation.replace('EmailLogin')}>Get Started</Button>
        </MainTopContainer>
    )
}

export default withDatabase(withTheme(Start));

import {StyleSheet, View } from 'react-native'
import React from 'react'

interface Props {
    height: number;
}
const HeightSpacer: React.FC<Props> = ({height}) => {
    return (
        <View style={{height:height}}>
        </View>
    );
}

export default HeightSpacer
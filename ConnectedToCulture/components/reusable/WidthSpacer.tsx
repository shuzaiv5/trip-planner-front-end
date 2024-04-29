import { View, Text } from 'react-native'
import React from 'react'

interface Props {
    width: number;
}
const WidthSpacer : React.FC<Props> = ({width}) => {
    return (
        <View style={{width:width}}>
        </View>
    );
}

export default WidthSpacer
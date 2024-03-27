import { View, Text } from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import styles from './authentication.style';
import COLORS from '../../constants/theme';

const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;


const Welcome = () => {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={{fontWeight:'bold',color:COLORS.black,fontSize:40,letterSpacing:4}}>WELCOME</Text>
    </View>
  )
}

export default Welcome
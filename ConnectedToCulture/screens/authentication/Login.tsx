import { View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native'
import React from 'react'
import styles from './authentication.style'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme'



const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
const Login = ({navigation}: {navigation: any}) => {
  return (
    <View style={[styles.container,{paddingTop:10}]}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/logos/c2c.png')}/>
        </View>   
    
        <View>
        <View style={styles.wrapper}>
        <TouchableOpacity
        style={globalStyles.fullWidthBtnBlack} 
        onPress={()=>navigation.navigate('CreateAccount')}>
            <Text  style={[styles.buttonText,{fontSize:16}]} > CREATE NEW ACCOUNT</Text>
         </TouchableOpacity>
        </View>
        <View style={[styles.wrapper,{alignItems:'center',padding:20}]}>
            <Text style={{fontWeight:'bold',color:COLORS.black}}>OR SIGN IN AS</Text>
        </View>
        <View style={[rowWithSpace('space-between')]}>
        <TouchableOpacity
        style={styles.loginBtns}
        onPress={()=>navigation.navigate('Signin')}
        >
            <Text  style={styles.buttonText} > EXISTING</Text>
            <Text  style={styles.buttonText} > USER</Text>
         </TouchableOpacity>
        <TouchableOpacity
        style={styles.loginBtns} >
            <Text  style={styles.buttonText} > GOOGLE</Text>
         </TouchableOpacity>
         <TouchableOpacity
        style={styles.loginBtns} >
            <Text  style={styles.buttonText} > FB</Text>
         </TouchableOpacity>
         <TouchableOpacity
        style={styles.loginBtns} >
            <Text  style={styles.buttonText} > X</Text>
         </TouchableOpacity>

        </View>
        </View>
    
  </View>
  )
}

export default Login
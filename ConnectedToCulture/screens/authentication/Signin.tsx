import { View, Text, TextInput, TouchableOpacity,Image,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './authentication.style'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme';
import CheckBox from '@react-native-community/checkbox';

const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;



const Signin = ({navigation}: {navigation: any}) => {
  const [isSelected, setSelection] = useState(false);
 

 
  return (
    <View style={[styles.container,{paddingTop:70,}]}>
      
        <View style={[styles.logoContainer,{marginBottom:40}]}>
            <Image style={styles.logo} source={require('../../assets/images/logos/c2cBlack.png')}/>
        </View>  

    <View style={styles.wrapper}>
    
    <View>
    <TextInput style={styles.inputWrapper} placeholder='Username' placeholderTextColor={'#B7B7B7'}></TextInput>
    </View>
    </View>
       
    <View style={[styles.wrapper,{marginBottom:3}]}>
    <TextInput style={styles.inputWrapper} placeholder='Password' placeholderTextColor={'#B7B7B7'}></TextInput>
    </View>
    
    <View style={styles.wrapper}>
    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember Me</Text>
    </View>
    <View >
      <TouchableOpacity
       onPress={()=>navigation.navigate('Welcome')} >
          <Text  style={[styles.linkText,{marginTop:5,marginLeft:5}]} >Forget Username or Password?</Text>
       </TouchableOpacity>
    </View>
    </View>

         
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
      style={[globalStyles.fullWidthBtnBlack,{width:'50%'}]}
      onPress={()=>navigation.navigate('Welcome')} >
          <Text  style={[styles.buttonText]} >Sign In</Text>
       </TouchableOpacity>
  
  <View style={[styles.wrapper,{alignItems:'center',padding:20}]}>
            <Text style={styles.commonText}>Or Sign In As</Text>
        </View>
        <View style={[rowWithSpace('center')]}>
        
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
  <View style={styles.newAccountText}>
      <TouchableOpacity
      style={{flexDirection:'row',alignItems:'center'}}
       onPress={()=>navigation.navigate('CreateAccount')} >
        <Text style={styles.commonText}>Don't have an account?</Text>
        <Text  style={[styles.linkText,{marginTop:0,marginLeft:5}]} >Create New Account</Text>
       </TouchableOpacity>
    </View>
    
  </View>
  )
}

export default Signin
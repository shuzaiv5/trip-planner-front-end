import { View, Text, TextInput, TouchableOpacity,Image,ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './authentication.style'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme';
import CheckBox from '@react-native-community/checkbox';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginButtons } from '../../components';
import { create } from 'domain';

interface FormModel{
    userName:string,
    password:string,
}
const validationSchema=Yup.object().shape({
    userName:Yup.string()
    .min(3,"Username must be 3 chracters")
    .required('Required'),
     password:Yup.string()
    .min(8,"Password must be 8 chracters")
    .required('Required'),
        
  })

const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;



const Signin = ({navigation}: {navigation: any}) => {
  const [isSelected, setSelection] = useState(false);
 

 
  return (
    <ImageBackground
    source={require('../../assets/images/country/ghana/owen-oj-n8is7rTXrbE-unsplash.jpg')}
    style={styles.background}>
     <View style={[styles.container,styles.overlay]}>
        
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/logos/c2c.png')}/>
        </View>  
        <Formik<FormModel>
        initialValues={{
            userName:'',
            password:'',
        }}
        validationSchema={validationSchema}
        onSubmit={()=>navigation.navigate('Welcome') }>
        {({  handleChange,
              touched,
              handleSubmit,
              values,
              errors,
              setFieldTouched})=>(    
        <>
    <View style={styles.wrapper}>
    
    <View>
    <TextInput style={styles.inputWrapper} placeholder='Username' placeholderTextColor={'#79796E'}
     onFocus={()=>setFieldTouched('userName')}
     onBlur={()=>setFieldTouched('userName')}
     value={values.userName}
     onChangeText={handleChange('userName')}
     autoCapitalize='none'
     autoCorrect={false}></TextInput>
    </View>
    {touched.userName && errors.userName && (
              <Text style={styles.errorMessage}>{errors.userName}</Text>
            )}
    </View>
       
    <View style={[styles.wrapper,{marginBottom:3}]}>
   <View>
   <TextInput style={styles.inputWrapper} placeholder='Password' placeholderTextColor={'#79796E'}
    onFocus={()=>setFieldTouched('password')}
    onBlur={()=>setFieldTouched('password')}
    value={values.password}
    onChangeText={handleChange('password')}
    autoCapitalize='none'
    autoCorrect={false}></TextInput>
   </View>
   {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
    </View>
   
    
    <View style={styles.wrapper}>
    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={[styles.commonTextSignIn,{marginVertical:10}]}>Remember Me</Text>
    </View>
    <View >
      <TouchableOpacity
       onPress={()=>navigation.navigate('Welcome')} >
          <Text  style={[styles.linkText,styles.commonTextSignIn]} >Forget Username or Password?</Text>
       </TouchableOpacity>
    </View>
    </View>

         
    <View style={styles.wrapper}>
      <TouchableOpacity
      style={styles.createButton}
      onPress={()=>navigation.navigate('Welcome')} >
          <Text  style={[styles.buttonText]} >Sign In</Text>
       </TouchableOpacity>
       </View>
  <View style={[styles.wrapper,{alignItems:'center',padding:20}]}>
            <Text style={[styles.commonTextSignIn]}>Or Sign In Using</Text>
  </View>
        
  <LoginButtons/>

  <View style={[styles.wrapper,{alignItems:'center',padding:20}]}>
      <Text style={[styles.commonTextSignIn]}>Or </Text>
  </View>


 
  
    </>
    )}
  </Formik>
  </View>
  </ImageBackground>
  )
}

export default Signin

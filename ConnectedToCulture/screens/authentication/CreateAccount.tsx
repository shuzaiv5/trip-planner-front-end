import { View, Text, TextInput, TouchableOpacity,Image, Alert } from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import styles from './authentication.style';
import COLORS from '../../constants/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface FormModel{
    userName:string,
    email:string,
    password:string,
    verifyPassword:string,
}

const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

const CreateAccount = ({navigation}: {navigation: any}) => {
  return (
    <View style={[styles.container]}>
        <View style={styles.wrapper}>
            <Text style={styles.createAccountText}>Create Account</Text>
        </View>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/images/logos/c2cBlack.png')}/>
        </View>  
    <Formik <FormModel>
        initialValues={{
            userName:'',
            email:'',
            password:'',
            verifyPassword:'',

    }}
    onSubmit={(values)=>{
        console.log(JSON.stringify(values))
        
    }}>
    {({handleSubmit,values,handleChange})=>(    
        <>
        <View style={styles.wrapper}>
        
        <View>
        <TextInput style={styles.inputWrapper} placeholder='Username' placeholderTextColor={'#B7B7B7'}
        value={values.userName} onChange={handleChange}
        ></TextInput>
    
        </View>
        </View>
        <View style={styles.wrapper}>
    
        <View>
        <TextInput style={styles.inputWrapper} placeholder='Email' placeholderTextColor={'#B7B7B7'}
           value={values.email} onChange={handleChange}></TextInput>
    
        </View>
        </View>
        <View>
    
        <View style={styles.wrapper}>
        <TextInput style={styles.inputWrapper} placeholder='Password' placeholderTextColor={'#B7B7B7'}
        value={values.password} onChange={handleChange}></TextInput>
        </View>
        </View>
        <View>
    
        <View style={styles.wrapper}>
        <TextInput style={styles.inputWrapper} placeholder='Verify Password' placeholderTextColor={'#B7B7B7'}
        value={values.verifyPassword} onChange={handleChange}></TextInput>
        </View>
        </View>
        
        <View style={styles.wrapper}>
        <TouchableOpacity
        style={globalStyles.fullWidthBtnBlack}
        onPress={()=>handleSubmit} >
            <Text  style={[styles.buttonText]} >CREATE NEW ACCOUNT</Text>
        </TouchableOpacity>
    </View>
    </>
    )}
  </Formik>
  <View style={[styles.wrapper,{alignItems:'center',padding:10}]}>
            <Text style={{color:COLORS.black}}>Or Sign In As</Text>
        </View>
        <View style={[rowWithSpace('space-around')]}>
        <TouchableOpacity
        style={styles.loginBtns} 
        onPress={()=>navigation.navigate('Signin')}>
            <Text  style={styles.buttonText} > Existing</Text>
            <Text  style={styles.buttonText} > User</Text>
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
  )
}

export default CreateAccount
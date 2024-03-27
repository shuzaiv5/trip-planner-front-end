import { View, Text, TextInput, TouchableOpacity,Image, Alert } from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import styles from './authentication.style';
import COLORS from '../../constants/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikValues, FormikHelpers } from 'formik';

interface FormModel{
    userName:string,
    email:string,
    password:string,
    verifyPassword:string,
}
const validationSchema=Yup.object().shape({
    userName:Yup.string()
    .min(3,"Username must be 3 chracters")
    .required('Required'),
    email:Yup.string()
    .email('Provide a valid email')
    .required('Reuired'),
    password:Yup.string()
    .min(8,"Password must be 8 chracters")
    .required('Required'),
    verifyPassword:Yup.string()
    .oneOf([Yup.ref('password'), ""], 'Must match "password" field value')
    
  })
  
const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

const CreateAccount = ({navigation}: {navigation: any}) => {
    const handleSubmit =  (values: FormModel, { resetForm, setSubmitting }: FormikHelpers<FormModel>) => {
       
          Alert.alert('Form Submitted', JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        
      };
    
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
    validationSchema={validationSchema}
    onSubmit={handleSubmit}>
    {({  handleChange,
          touched,
          handleSubmit,
          values,
          errors,
          isValid,
          setFieldTouched})=>(    
        <>
        <View style={styles.wrapper}>
        
        <View>
        <TextInput style={styles.inputWrapper} placeholder='Username' placeholderTextColor={'#B7B7B7'}
         onFocus={()=>setFieldTouched('userName')}
         onBlur={()=>setFieldTouched('userName')}
         value={values.userName}
         onChangeText={handleChange('userName')}
         autoCapitalize='none'
         autoCorrect={false}
        ></TextInput>
    
        </View>
        {touched.userName && errors.userName && (
              <Text style={styles.errorMessage}>{errors.userName}</Text>
            )}
        </View>
        <View style={styles.wrapper}>
    
        <View>
        <TextInput style={styles.inputWrapper} placeholder='Email' placeholderTextColor={'#B7B7B7'}
            onFocus={()=>setFieldTouched('email')}
            onBlur={()=>setFieldTouched('email',true)}
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize='none'
            autoCorrect={false}></TextInput>
    
        </View>
        {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
        </View>
        <View>
    
        <View style={styles.wrapper}>
        <TextInput style={styles.inputWrapper} placeholder='Password' placeholderTextColor={'#B7B7B7'}
        onFocus={()=>setFieldTouched('password')}
        onBlur={()=>setFieldTouched('password')}
        value={values.password}
        onChangeText={handleChange('password')}
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        </View>
        {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
        </View>
        <View>
    
        <View style={styles.wrapper}>
        <TextInput style={styles.inputWrapper} placeholder='Verify Password' placeholderTextColor={'#B7B7B7'}
         onFocus={()=>setFieldTouched('verifyPassword')}
         onBlur={()=>setFieldTouched('verifyPassword')}
         value={values.verifyPassword}
         onChangeText={handleChange('verifyPassword')}
         autoCapitalize='none'></TextInput>
        </View>
        {touched.verifyPassword && errors.verifyPassword && (
              <Text style={styles.errorMessage}>{errors.verifyPassword}</Text>
            )}
        </View>
        
        <View style={styles.wrapper}>
        <TouchableOpacity
        style={globalStyles.fullWidthBtnBlack}
        onPress={handleSubmit} >
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
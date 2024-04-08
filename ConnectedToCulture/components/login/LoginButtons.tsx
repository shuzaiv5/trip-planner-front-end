import { View, StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';


// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;
const LoginButtons = () => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
  return (
    <View style={[rowWithSpace('center')]}>
        
    <TouchableOpacity
    style={styles.loginBtns} >
        <Image source={require('../../assets/images/logos/gmail.png')} style={styles.logo}/>
     </TouchableOpacity>
     <TouchableOpacity
    style={styles.loginBtns} >
         <Image source={require('../../assets/images/logos/Facebook.png')} style={styles.logo}/>
     </TouchableOpacity>
     <TouchableOpacity
    style={styles.loginBtns} >
         <Image source={require('../../assets/images/logos/Apple.png')} style={styles.logo}/>
     </TouchableOpacity>

    </View>
  )
}

export default LoginButtons;

const styles =StyleSheet.create({
    logo: {
        width: '100%', // Adjust to fill the container width
        height: '100%', // Adjust to fill the container height
        resizeMode: 'contain',
        
    },
    loginBtns: {
        width: windowHeight * 0.05,
        height: windowHeight * 0.05,
        padding: windowHeight*0.01,
        marginTop:windowHeight*0.01,
        marginLeft: 10,
        alignItems: 'center',
        backgroundColor:'white',
        borderRadius: 50,
       
    },
})
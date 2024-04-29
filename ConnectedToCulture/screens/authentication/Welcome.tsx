
import React, { useState, useEffect }  from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../constants/theme';
import styles from './authentication.style';
import { HeightSpacer } from '../../components';

const WelcomeScreen:React.FC<{ navigation: any }> = ({ navigation }) =>{
 
   
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
      
      const timer = setTimeout(() => {
        setShowWelcome(false);
        navigation.navigate('BottomNavigation');
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, []);

    return (
      <ImageBackground
        source={require('../../assets/images/country/ghana/ifeoluwa-a--CgUhaShACE-unsplash.jpg')}
        style={styles.background}>
        <View style={[styles.container,styles.overlay]}>
          
          <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require('../../assets/images/logos/c2c.png')}/>
          </View>  
          <HeightSpacer height={20}/>
          <View style={styles.greetingsContainer}>
              <Text style={styles.greetingText}>Welcome! </Text>
              <Text style={styles.commonText}>(USA, English)</Text>
          </View>
          <View style={styles.greetingsContainer}>
              <Text style={styles.greetingText}>Akwaaba!</Text>
              <Text style={styles.commonText}> (Ghana, Akan)</Text>
          </View>
          <View style={styles.greetingsContainer}>
              <Text style={styles.greetingText}>Barka da zuwa! (Nigeria, Hausa)</Text>
              <Text style={styles.commonText}> (Ghana, Akan)</Text>
          </View>
          <View style={styles.greetingsContainer}>
              <Text style={styles.greetingText}>Bienvenue! (Togo, French)</Text>
              <Text style={styles.commonText}> (Ghana, Akan)</Text>
          </View>
        </View>
      </ImageBackground>
    );
};




export default WelcomeScreen;

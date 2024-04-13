import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons/faHome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faMap} from '@fortawesome/free-solid-svg-icons';
import {faPerson} from '@fortawesome/free-solid-svg-icons';
const WelcomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ImageContiner}>
        <Image
          source={require('../../assets/images/logos/c2cTravelApp.png')} // Replace with your actual image path
          resizeMode="contain"
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.overlay}>
        <Text style={styles.brandText}>CONNECTED TO CULTURE</Text>
        <Text style={styles.appNameText}>C2C Travel App</Text>
        <View style={styles.greetingsContainer}>
          <Text style={styles.greetingText}>Welcome! (USA, English)</Text>
          <Text style={styles.greetingText}>Akwaaba! (Ghana, Akan)</Text>
          <Text style={styles.greetingText}>
            Barka da zuwa! (Nigeria, Hausa)
          </Text>
          <Text style={styles.greetingText}>Bienvenue! (Togo, French)</Text>
        </View>
      </View>
      <View style={styles.navigationBar}>
        <FontAwesomeIcon size={24} icon={faHome} />
        <FontAwesomeIcon size={24} icon={faSearch} />
        <FontAwesomeIcon size={24} icon={faMap} />
        <FontAwesomeIcon size={24} icon={faPerson} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ImageContiner: {
    marginTop: '25%',
    width: '55%',
    height: '25%',
    marginHorizontal: '28%',
  },
  backgroundImage: {
    flex: 1,
    width: '80%',
    height: '80%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent overlay
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  appNameText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  greetingsContainer: {
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
});

export default WelcomeScreen;

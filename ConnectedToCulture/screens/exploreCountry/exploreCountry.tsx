import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type ExploreCountryProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

const ExploreCountry: React.FC<ExploreCountryProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <AntDesign name='left' style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.countryName}>South Africa</Text>
      </View>
      <View style={styles.exploreContainer}>
        <Text style={styles.exploreText}>Country information</Text>
        
      </View>
      <View style={styles.content}>
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Currency</Text>
          <Text style={styles.menuItem}>Language</Text>
          <Text style={styles.menuItem}>Timezone</Text>
          <Text style={styles.menuItem}>Average trip price</Text>
          <Text style={styles.menuItem}>Flight time</Text>
        </View>
        <Image
          source={require('../../assets/images/country/southAfrica/sa.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    right: 60,
    paddingBottom: 12,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  exploreContainer: {
    // alignSelf: 'center',
    paddingVertical: 12,
    
  },
  exploreText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  menu: {
    marginRight: 16,
  },
  menuItem: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 8,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
});

export default ExploreCountry;

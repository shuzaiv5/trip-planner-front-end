import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome

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
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Country Information</Text>
        <View style={styles.content}>
          <View style={styles.menu}>
            <Text style={styles.menuItem}><FontAwesome name="money" style={styles.menuIcon} /> Currency</Text>
            <Text style={styles.menuItem}><FontAwesome name="language" style={styles.menuIcon} /> Language</Text>
            <Text style={styles.menuItem}><FontAwesome name="globe" style={styles.menuIcon} /> Timezone</Text>
            <Text style={styles.menuItem}><FontAwesome name="money" style={styles.menuIcon} /> Average trip price</Text>
            <Text style={styles.menuItem}><FontAwesome name="plane" style={styles.menuIcon} /> Flight time</Text>
          </View>
          <Image
            source={require('../../assets/images/country/southAfrica/sa.jpg')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontFamily: 'Almarai',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 12,
    right: 60,
    marginTop: 15,
  },
  iconContainer: {
    padding: 8,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
  countryName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,  // for Android
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 8,
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 180,
    height: 150,
    borderRadius: 8,
    top: 18
  },
});

export default ExploreCountry;

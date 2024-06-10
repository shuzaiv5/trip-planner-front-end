import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AdventuresFeed from './adventuresFeed/AdventuresFeed';

type AdventuresProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

const Adventures: React.FC<AdventuresProps> = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.iconContainer}>
          <AntDesign name="left" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.countryName}>South Africa</Text>
        <View style={styles.secondContainer}>
          <Text style={styles.filtersText}>Filters</Text>
          <TouchableOpacity onPress={() => navigation.navigate('FIlter')}>
            <AntDesign name="down" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.components}>
      <AdventuresFeed navigation={navigation}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: '#fff',
    marginTop: 13,
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    fontSize: 22,
    color: '#333',
  },
  countryName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  components: {
    marginTop: 18
  }
});

export default Adventures;

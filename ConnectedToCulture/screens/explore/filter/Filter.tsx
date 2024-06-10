import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterDetails from './filterDetails/FilterDetails';


type FilterProps = {
    navigation: {
      navigate: (screenName: string) => void;
    };
  };

const Filter: React.FC<FilterProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Filter</Text>
        <TouchableOpacity style={styles.closeButton}>
          <AntDesign name="close" size={24} color="black" onPress={() => navigation.navigate('more-explore')} />
        </TouchableOpacity>
      </View>
      <FilterDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#fff',
   
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 90,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    left: 8
  },
  closeButton: {
    padding: 8,
    bottom: 30,
  },
});

export default Filter;

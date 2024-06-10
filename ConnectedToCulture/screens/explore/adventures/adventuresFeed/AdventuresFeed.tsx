import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../../constants/theme';
import { ReusableButton } from '../../../../components';

const { width } = Dimensions.get("window");

interface AdventuresProps {
  id: string;
  image: any;
  rating: number;
  reviews: number;
  price: number;
}

const adventures: AdventuresProps[] = [
  { id: '1', image: require('../../../../assets/images/country/ghana/ghana.png'), rating: 4.5, reviews: 6, price: 27 },
  { id: '2', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '3', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '4', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '5', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '6', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '7', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '8', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
  { id: '9', image: require('../../../../assets/images/country/tanzania/zanzibar.jpg'), rating: 4.5, reviews: 6, price: 27 },
];

type AdventuresFeedProps = {
  navigation: {
    navigate: (screenName: string) => void;
  };
};

const AdventuresFeed: React.FC<AdventuresFeedProps> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {adventures.map((item) => (
        <TouchableOpacity key={item.id} style={styles.itemContainer} onPress={() => navigation.navigate('Details')}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textContainer}>
            <View style={styles.ratingContainer}>
              <Icon name="star" color="#FFD700" size={12} />
              <Text style={styles.ratingText}>{item.rating} ({item.reviews})</Text>
            </View>
            <Text style={styles.placeText}>Place</Text>
            <Text style={styles.priceText}>From ${item.price}/person</Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.buttonContainer}>
        <ReusableButton
          btnText='Load More'
          backgroundColor={COLORS.primary}
          textColor={COLORS.white}
          size={18}
          borderColor={COLORS.primary}
          borderWidth={1}
          width={width * 0.40}
          paddingHorizontal={15}
          paddingVertical={5}
          onPress={() => navigation.navigate('adventures')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10
  },
  itemContainer: {
    width: width / 3 - 15,
    marginBottom: 10,
    borderRadius: 10,
    gap: 10
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    padding: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 12,
  },
  placeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 12,
    color: '#888',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default AdventuresFeed;

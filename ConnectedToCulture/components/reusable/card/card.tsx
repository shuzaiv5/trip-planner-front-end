// Import necessary components
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


interface CardProps {
  title: string;
  imageUrl: any;
}

const Card: React.FC<CardProps> = ({ title}) => {
  return (
    <View style={styles.card}>
      <Image source={require('../../../assets/images/backgrounds/Travel.png')} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 16,
    alignItems: 'center',
    width: 120,
    marginTop: 20
  },
  image: {
    borderRadius: 6,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Card;

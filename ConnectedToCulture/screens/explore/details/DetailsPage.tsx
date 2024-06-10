import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity, Alert, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../../../constants/theme';
import { ReusableButton } from '../../../components';

const { width } = Dimensions.get("window");

type AdventuresFeedProps = {
    navigation: {
      navigate: (screenName: string) => void;
    };
  };

const DetailsPage: React.FC<AdventuresFeedProps> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name='left' size={24} color="black" style={styles.icon} onPress={() => navigation.navigate('adventures')}/>
        <Text style={styles.header}>Water Rafting at Orange River</Text>
      </View>
      <Image
        source={require('../../../assets/images/backgrounds/createaccunt.jpg')}
        style={styles.image}
      />
      <Text style={styles.description}>
        Prepare for an exhilarating white-water rafting experience on the legendary Orange river, where adventure meets breathtaking scenery.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Activity highlights:</Text>
        <Text style={styles.sectionText}>Duration: Full-day excursion (approx 8 hours)</Text>
        <Text style={styles.sectionText}>Location: Plot 215, Vioolsdrif, 8246, South Africa</Text>
        <Text style={styles.sectionText}>Difficulty Level: Intermediate to Advanced</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>What to bring:</Text>
        <Text style={styles.sectionText}>Swimwear or quick-dry clothing</Text>
        <Text style={styles.sectionText}>Sunscreen, sunglasses, and a hat</Text>
        <Text style={styles.sectionText}>Change of clothes for after the rafting trip</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.buttonText}>Reviews</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.buttonText}>Book another</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.actionRow}>
      <ReusableButton
          btnText='Book Now'
          backgroundColor={COLORS.primary}
          textColor={COLORS.white}
          size={18}
          borderColor={COLORS.primary}
          borderWidth={1}
          width={width * 0.30}
          paddingHorizontal={15}
          paddingVertical={5}
        //   onPress={() => navigation.navigate('adventures')}
        />
        <AntDesign name='sharealt' size={22} style={styles.iconsSize} color={'green'}/>
        <ReusableButton
          btnText='Save'
          size={18}
          borderColor={COLORS.primary}
          borderWidth={1}
          width={width * 0.20}
          paddingHorizontal={15}
          paddingVertical={5}
        //   onPress={() => navigation.navigate('adventures')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 17,
  },
  icon: {
    marginRight: 11,
    right: 5
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  reviewButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 9
  },
  iconsSize: {
    marginTop: 4
  }
});

export default DetailsPage;

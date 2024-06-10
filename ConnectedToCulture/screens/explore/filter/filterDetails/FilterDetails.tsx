import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../../constants/theme';
import { ReusableButton } from '../../../../components';
const { width, height } = Dimensions.get("window");


// Define types for category and data
type CategoryData = {
  name: string;
  data: string[];
  
};

type FilterProps = {
    navigation: {
      navigate: (screenName: string) => void;
    };
  };

const FilterDetails: React.FC<FilterProps> = ({navigation}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (category: string) => {
    setExpanded(expanded === category ? null : category);
  };

  const renderFilter = (category: string, data: string[]) => {
    const isExpanded = expanded === category;
    return (
      <View key={category} style={styles.filterContainer}>
        <TouchableOpacity onPress={() => toggleExpand(category)} style={styles.filterHeader}>
          <Text style={styles.filterText}>{category}</Text>
          <Icon name={isExpanded ? 'chevron-up-outline' : 'chevron-down-outline'} size={20} />
        </TouchableOpacity>
        {isExpanded && (
          <View style={styles.dropdownContent}>
            {data.map((item, index) => (
              <Text key={index} style={styles.dropdownItem}>{item}</Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  const categories: CategoryData[] = [
    {
        name: 'Category',
        data: ['Option 1', 'Option 2', 'Option 3']
      },
      {
        name: 'Date and time',
        data: ['Today', 'Tomorrow', 'This Week']
      },
      {
        name: 'Language',
        data: ['English', 'Spanish', 'French']
      },
      {
        name: 'Difficulty',
        data: ['Easy', 'Medium', 'Hard']
      },
      {
        name: 'Status',
        data: ['Active', 'Inactive', 'Pending']
      },
      {
        name: 'Priority',
        data: ['Low', 'Medium', 'High']
      },
      {
        name: 'Genre',
        data: ['Fiction', 'Non-fiction', 'Biography']
      },
      {
        name: 'Payment Method',
        data: ['Credit Card', 'PayPal', 'Bank Transfer']
      },
      {
        name: 'Shipping',
        data: ['Standard', 'Express', 'Overnight']
      },
      {
        name: 'Subscription Plan',
        data: ['Free', 'Basic', 'Premium']
      }
    
  ];

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => renderFilter(category.name, category.data))}
      <View style={styles.buttonContainer}>
      <ReusableButton
         btnText='Load More'
         backgroundColor={COLORS.primary}
         textColor={COLORS.white}
         size={18}
         borderColor={COLORS.primary}
         borderWidth={1}
         width={width * 0.40}
         paddingHorizantal={15}
         paddingVertical={5}
         onPress={() => navigation.navigate('adventures')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  filterContainer: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContent: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
  dropdownItem: {
    paddingVertical: 5,
    color: '#555',
  },
  showResultsButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#007BFF',
    alignItems: 'center',
    borderRadius: 5,
  },
  showResultsText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default FilterDetails;

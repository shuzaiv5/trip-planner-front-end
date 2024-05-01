import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import homeStyles from './home.style'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import { CountriesToExplore, HeightSpacer, NoTripPlan, RecentTripPlan, Recommendations } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = (navigation) => {
  const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
  return (
      <ScrollView>
  <View style={homeStyles.container}>
    <View style={[rowWithSpace('space-between'),homeStyles.header]}>
      <Text style={homeStyles.headerText}>Hi,MK</Text>
      <Image 
        style={homeStyles.avatar} 
        source={require('../../assets/images/photo/avatar.jpg')}
        resizeMode='cover' 
      />
    </View>
    <View style={homeStyles.components}>
      {/* If user is new show NoTripPlan*/}
      
      <NoTripPlan navigation={navigation}/>
      {/* If user is not new and filled the survey  show RecentTripPlan*/}
      {/* <RecentTripPlan/> */}
      {/* <HeightSpacer height={20}/> */}
      <CountriesToExplore navigation={navigation}/>
      <HeightSpacer height={20}/>
      <Recommendations navigation={navigation}/>
     
    </View>
  </View>
</ScrollView>


  )
}

export default Home
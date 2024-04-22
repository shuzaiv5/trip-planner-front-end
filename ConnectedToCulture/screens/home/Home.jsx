import { View, Text,Image } from 'react-native'
import React from 'react'
import homeStyles from './home.style'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import { CountriesToExplore, HeightSpacer, NoTripPlan, RecentTripPlan } from '../../components';


const Home = ({navigation}: {navigation: any}) => {
  const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
  return (
    <View style={homeStyles.container}>
      <View style={[rowWithSpace('space-between'),homeStyles.header]}>
        <Text style={homeStyles.headerText}>Hi,MK</Text>
        <Image 
        style={homeStyles.avatar} 
        source={require('../../assets/images/photo/avatar.jpg')}
        resizeMode='cover' />
      </View>
      <View style={homeStyles.components}>
         {/* If user is new show NoTripPlan*/}
          <NoTripPlan/>
          {/* If user is not new and filled the survey  show RecentTripPlan*/}
          {/* <RecentTripPlan/> */}

          <HeightSpacer height={20}/>
          <CountriesToExplore navigation={navigation}/>
      </View>
      

    </View>
  )
}

export default Home
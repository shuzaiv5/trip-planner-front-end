import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './home.style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarDays, faChartPie, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import ReusableText from '../reusable/ReusableText'
import COLORS from '../../constants/theme'
import HeightSpacer from '../reusable/HeightSpacer'
import WidthSpacer from '../reusable/WidthSpacer'
import { ReusableButton } from '..'
import { Dimensions } from'react-native'

// Get the dimensions of the screen
const { height, width } = Dimensions.get('window');

const RecentTripPlan = ({navigation}: {navigation: any}) => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
  return (
    <View style={styles.CompanentContainer}>
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>Your Recent Plan</Text>
    </View>
    <View style={[styles.PlanCard,{flexDirection:'column'}]}>
    <View style={[rowWithSpace('space-between'),{marginBottom:width*0.01}]}>
        <View style={[styles.PlanCardInfo]}>
        <View style={[styles.TextContainer,{padding:0,paddingBottom:width*0.03}]}>
        <Text style={styles.noTripPlanText}>Family Trip to Ghana</Text>
        </View>
        
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>Mar 6, 2024- Mar 12, 2024 </Text>
        </View>
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faUserGroup} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>5 Travelers </Text>
        </View>
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faChartPie} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>$ 1,000 </Text>
        </View>
        
        </View>
        <WidthSpacer width={width*0.1}/>
       <View>
        <Image style={styles.PlanCardImage}source={require('../../assets/images/country/ghana/ghana.png')}/>
        </View>
       
    </View>
    <View style={[rowWithSpace('flex-end'),{marginLeft:width*0.8}]}>
        <View style={styles.ButtonContainer}>
        <ReusableButton
            btnText='Delete'
            backgroundColor={COLORS.white}
            textColor={COLORS.primary}
            size={16}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width*0.25}
            paddingHorizantal={10}
            paddingVertical={7}
            onPress={()=>navigation.navigate('Welcome')}

        />
      </View>
      <View style={styles.ButtonContainer}>
        <ReusableButton
            btnText='View'
            backgroundColor={COLORS.primary}
            textColor={COLORS.white}
            size={16}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width*0.25}
            paddingHorizantal={15}
            paddingVertical={7}
            onPress={()=>navigation.navigate('Welcome')}
        />
      </View>
      </View>       
        </View>
      <View style={styles.ButtonContainer}>
      <ReusableButton
            btnText='+  Add A New Trip'
            backgroundColor={COLORS.primary}
            textColor={COLORS.white}
            size={16}
            borderColor={COLORS.primary}
            borderWidth={1}
            width={width*0.5}
            paddingHorizantal={10}
            paddingVertical={10}
            onPress={()=>navigation.navigate('Welcome')}
        />

      </View>
    </View>
    
  )
}

export default RecentTripPlan


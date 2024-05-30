import { Image, StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'
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


import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../Redux/redux-hooks'
import { fetchPlans } from '../../Redux/Action';
import { AppDispatch,RootState} from "../../Redux/Store";
import moment from 'moment-timezone';
moment.tz.add('America/Los_Angeles|PST PDT|80 70|01010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0');

// Get the dimensions of the screen
const { height, width } = Dimensions.get('window');


const RecentTripPlan = ({navigation}: {navigation: any}) => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

    const dispatch = useDispatch<AppDispatch>();;
    const state = useAppSelector((state: RootState) => state.plans);

  
    useEffect(() => {
      dispatch(fetchPlans());
      }, [dispatch]);
      
      const renderTripName = (): JSX.Element[] | JSX.Element => {
       if (state.loading) {
          return <Text>Loading</Text>;
       }
       return(
        <View>
         {state.items.length > 0 ? <Text>{state.items[0].tripName}</Text> : (<Text>No data available</Text>)}
        </View>);   
      };
    
      //(state.items.map((item:any) => <Text key={item._id}>{item.tripName}</Text>))

      const renderTripStartDate = (): JSX.Element[] | JSX.Element => {
        if (state.loading) {
           return <Text>Loading</Text>;
        }
        return(
        <View>
         {state.items.length > 0 ? 
         <Text>{moment(state.items[0].tripStartDate).tz('America/Los_Angeles').format('MMM DD,YYYY')}</Text> : (<Text>No data available</Text>)}
        </View>);  
       };

       const renderTripEndDate = (): JSX.Element[] | JSX.Element => {
        if (state.loading) {
           return <Text>Loading</Text>;
        }
        return(
        <View>
         {state.items.length > 0 ? 
         <Text>{moment(state.items[0].tripEndDate).tz('America/Los_Angeles').format('MMM DD,YYYY')}</Text> : (<Text>No data available</Text>)}
        </View>);  
       };

       const renderNumOfTravellers = (): JSX.Element[] | JSX.Element => {
        if (state.loading) {
           return <Text>Loading</Text>;
        }
        return(
         <View>
          {state.items.length > 0 ? <Text>{state.items[0].numOfTravelers}</Text> : (<Text>No data available</Text>)}
         </View>);   
       };

       const renderTotalExpense = (): JSX.Element[] | JSX.Element => {
        if (state.loading) {
           return <Text>Loading</Text>;
        }
        return(
         <View>
          {state.items.length > 0 ? <Text>{state.items[0].totalExpense}</Text> : (<Text>No data available</Text>)}
         </View>);   
       };



  return (
    <View style={styles.CompanentContainer}>
    <View style={styles.TextContainer}>
      <Text style={styles.Text}>Your Recent Plan</Text>
    </View>
    <View style={[styles.PlanCard,{flexDirection:'column'}]}>
    <View style={[rowWithSpace('space-between'),{marginBottom:width*0.01}]}>
        <View style={[styles.PlanCardInfo]}>
        <View style={[styles.TextContainer,{padding:0,paddingBottom:width*0.03}]}>
        <Text style={styles.noTripPlanText}>{renderTripName()}</Text>
        </View>
        
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>{renderTripStartDate()}- {renderTripEndDate()} </Text>
        </View>
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faUserGroup} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>{renderNumOfTravellers()} Travelers </Text>
        </View>
        <View style={rowWithSpace('space-between')}>
        <FontAwesomeIcon icon={faChartPie} />
        <WidthSpacer width={10}/>
        <Text style={styles.PlanCardInfoText}>$ {renderTotalExpense()} </Text>
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


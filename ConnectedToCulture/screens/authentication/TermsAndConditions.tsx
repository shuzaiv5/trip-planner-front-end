import { View,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme';
import ReusableText from '../../components/reusable/ReusableText';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { WidthSpacer } from '../../components';

const TermsAndConditions =  ({navigation}: {navigation: any}) => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <View style={rowWithSpace("flex-start")}>
       
         <TouchableOpacity style={styles.box}
          onPress={()=>navigation.navigate('CreateAccount')}
         >
          <FontAwesomeIcon size={24} icon={faArrowLeft} />  
          

         </TouchableOpacity>
         <WidthSpacer width={50} />
         <ReusableText
                text={"Terms And Conditions"}
                family={'Poppins'}
                size={24}
                color={COLORS.black}
         />

        </View>
    </View>
    <View>
        
    </View>
    </SafeAreaView>
  )
}

export default TermsAndConditions
const styles = StyleSheet.create({
    box:{
        backgroundColor:COLORS.white,
        width:40,
        height:40,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    }
})
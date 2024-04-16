import { View,SafeAreaView,TouchableOpacity,StyleSheet, FlatList, ScrollView} from 'react-native'
import React from 'react'
import globalStylesAndRowWithSpace from '../../constants/global.style';
import COLORS from '../../constants/theme';
import ReusableText from '../../components/reusable/ReusableText';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { WidthSpacer } from '../../components';
import styles from './authentication.style';

type DataItem = {
  key: string;
  subItems?: string[];
};

const TermsAndConditions =  ({navigation}: {navigation: any}) => {
    const { globalStyles, rowWithSpace } = globalStylesAndRowWithSpace;

    const data:DataItem[]=[
      { key: 'Acceptance of Terms: By using the C2C Travel App, you agree to abide by these Terms and Conditions and any additional terms and policies set forth by C2C Travel.' },
      { key: 'Use of the App: You must be at least 18 years old to use the C2C Travel App. By using the App, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms and Conditions.' },
      { key: 'User Accounts: You may be required to create an account to access certain features of the App. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.' },
      { key: 'Privacy Policy: Your privacy is important to us. Our Privacy Policy governs the collection, use, and disclosure of your personal information. By using the App, you consent to the terms of our Privacy Policy.' },
      { key: 'User Content: You may have the opportunity to submit content, such as reviews and ratings, through the App. By submitting User Content, you grant C2C Travel a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, transferable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such User Content in any media.' },
      { key: 'Prohibited Conduct: You agree not to engage in any of the following prohibited activities:',
              subItems: [
                'Violating any applicable laws or regulations;', 
                'Using the App for any illegal or unauthorized purpose; ', 
                'Interfering with or disrupting the operation of the App or servers or networks connected to the App;',   
                'Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity;',
                'Collecting or harvesting any personally identifiable information, including account names, from the App;',
                'Uploading, posting, or transmitting any material that contains viruses, Trojan horses, worms, or any other harmful or disruptive components;'] },
      { key: 'Reverse engineering, decompiling, disassembling, or otherwise attempting to discover the source code or underlying algorithms of the App.' },
      { key: 'Intellectual Property Rights: The App and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by C2C Travel or its licensors and are protected by copyright, trademark, and other intellectual property laws.' },
      { key: 'Disclaimer of Warranties: The App is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. C2C Travel disclaims all warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. ' },
      { key: 'Limitation of Liability: In no event shall C2C Travel, its affiliates, or their respective officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of the App.' },
      { key:'Governing Law: These Terms and Conditions shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions.'},
      { key:'Changes to Terms and Conditions: C2C Travel reserves the right to modify or revise these Terms and Conditions at any time, without prior notice. Your continued use of the App following the posting of changes constitutes your acceptance of such changes'},
      { key:'Contact Us: If you have any questions or concerns about these Terms and Conditions, please contact us at [Insert Contact Information].'}
   ]
   const renderItem: React.FC<{ item: DataItem }> = ({ item }) => {
    return (
      <View style={{ marginBottom: 10 }}>
        <ReusableText text={`\u2022 ${item.key}`} 
        family={'Poppins'}
        size={12}
        color={COLORS.black}/>
        {item.subItems && item.subItems.map((subItem, index) => (
          <View key={index} style={{ marginLeft: 20 }}>
            <ReusableText text={`\u2022 ${subItem}`} 
            family={'Poppins'}
            size={12}
            color={COLORS.black} />
          </View>
        ))}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={[globalStyles.container,{marginBottom:50}]} >
      <ScrollView>
      <View style={{marginBottom:5}}>
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
    <View style={styles.textBox}>
      <ReusableText
        text='[Last updated: April 4, 2024]'
        family={'Poppins'}
        size={12}
        color={COLORS.black}
      />
      </View>  
      <View style={styles.textBox}>
      <ReusableText
        text='Welcome to C2C Travel! These Terms and Conditions govern your use of the C2C Travel mobile application (the "App"). 
        By accessing or using the App, you agree to be bound by these Terms and Conditions. 
        Please read them carefully before using the App. If you do not agree with any part of these 
        Terms and Conditions, you must not use the App.'
        family={'Poppins'}
        size={12}
        color={COLORS.black}
      />
      </View>
       <View style={{ paddingHorizontal: 20 ,paddingLeft:30}}>
       <FlatList
        data={data}
        renderItem={({ item }) => <View>{renderItem({ item })}</View>}
        keyExtractor={(item, index) => index.toString()}
    />
      </View>
      <View style={styles.textBox}>
      <ReusableText
        text='By using the C2C Travel App, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.'
        family={'Poppins'}
        size={12}
        color={COLORS.black}
      />
      </View>
     
    </ScrollView>
    </SafeAreaView>
  )
}

export default TermsAndConditions

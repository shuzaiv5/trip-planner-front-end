import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home,Explore,Plan,Profile } from '../screens';
import { Welcome } from '../screens';
const Tab=createBottomTabNavigator();

const tabBarStyle={
    padding:20,
    borderRadius:20,
    height:80,
    position:"absolute",
    bottom:20,
    left:20,
    right:20
}
const BottomTabNavigation = () => {
  return (
   
        <Tab.Navigator 
            initialRouteName='Welcome'
            activeColor='#eb6a58'
            tabBarHideKeyboard={true}
            headerShown={false}
            inactiveColor='#3e2465'
            barStyle={{paddingBottom:48}}
        >
           
            <Tab.Screen 
                name="Home"
                component={Home}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <Image source={require('../assets/icons/Home.png')} 
                            style={{width:26,height:26}}/>   
                        )
                    }
                }
            
            />
           
            <Tab.Screen 
                name="Explore"
                component={Explore}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <Image source={require('../assets/icons/explore.png')} 
                            style={{width:26,height:26}}/>   
    
                        )
                    }
                }
            
            />
            <Tab.Screen 
                name="Plan"
                component={Plan}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <Image source={require('../assets/icons/Plan.png')} 
                            style={{width:26,height:26}}/>   
    
                        )
                    }
                }
            
            />
             <Tab.Screen 
                name="Profile"
                component={Profile}
                options={
                    {
                        tabBarStyle:tabBarStyle,
                        tabBarShowLabel:false,
                        headerShown:false,
                        tabBarIcon:({focused})=> (
                            <Image source={require('../assets/icons/Profile.png')} 
                            style={{width:26,height:26}}/>   
    
                        )
                    }
                }
            
            />
        </Tab.Navigator>
  )
}

export default BottomTabNavigation
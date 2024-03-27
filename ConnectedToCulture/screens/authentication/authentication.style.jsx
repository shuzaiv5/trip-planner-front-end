import { StyleSheet,ImageStyle } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../../constants/theme";
const text={
    fontFamily: 'Almarai',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    color:COLORS.dark
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:COLORS.white,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    commonText:{
        ...text
    },
    createAccountText:{
        ...text,
        paddingTop:20,
        fontSize: 32,
        textAlign: 'center',
        color:COLORS.dark

    },
    inputWrapper:{
        borderColor:'#D4D4D4',
        backgroundColor:'#FAF8F8',
        borderWidth:1,
        height:37,
        borderRadius:12,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:5,
        
        justifyContent:'center',
        fontFamily:'Arial',
        fontWeight:'400',
        fontStyle:'italic',
        fontSize:15,
        lineHeight:18      

    },
    wrapper:{
        marginBottom:20,
        
    },
    buttonWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10,
        
    },
    buttonText: {
        ...text,
        textAlign: 'center',
        color:COLORS.white
               
    },
    errorMessage:{
        ...text,
        color:'red',
        fontSize:12,
        marginTop:5,
        marginLeft:5,
        textAlign:'right'

    },
    logoContainer:{
        width:'55%',
        height:'30%',
        marginHorizontal:'23%',
        marginBottom:15,
        top:0,
        position:'center',
               
    },
    logo:{
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        borderRadius:5
    },
   loginBtns:{
        width:'22%',
        height:120,
        paddingTop:50,
        marginLeft:20,
        backgroundColor:COLORS.black,
        alignItems:'center',
        borderRadius:5
   },

   //Sign in page
   checkboxContainer: {
    flexDirection: 'row',
    
    
   
  },
  checkbox: {
    alignSelf: 'center',
   
  },
  label: {
    ...text,
    marginTop:8,
  },
  linkText:
  {
    ...text,
    textDecorationLine:'underline',
    textDecorationColor:COLORS.dark
    
    
  },
  newAccountText:{
    margin:'auto',
    marginTop:'5%',
    alignItems:'center'
  },
  
  //Welcome Page
   welcomeContainer:{
        flex:1,
        padding:'auto',
        paddingTop:'90%',
        backgroundColor:COLORS.white,
        alignItems:'center',
   

   },
   

})

export default styles
import { StyleSheet, TextStyle, ViewStyle, ImageStyle, Dimensions } from 'react-native';
import COLORS from '../../constants/theme';

// Get the dimensions of the screen
const windowHeight = Dimensions.get('window').height;

interface Style {
    container: ViewStyle;
    background: ViewStyle;
    commonText: TextStyle;
    createAccountText: TextStyle;
    inputWrapper: ViewStyle & TextStyle; // If you're applying text styles directly to inputs, which is unusual
    wrapper: ViewStyle;
    buttonWrapper: ViewStyle;
    buttonText: TextStyle;
    errorMessage: TextStyle;
    logoContainer: ViewStyle;
    logo: ImageStyle;
    loginBtns: ViewStyle;
    checkboxContainer: ViewStyle;
    checkbox: ViewStyle; // CheckBox style might be more specific depending on the library used
    label: TextStyle;
    linkText: TextStyle;
    newAccountText: ViewStyle;
    welcomeContainer: ViewStyle;
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commonText: {
        fontFamily: 'Almarai',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
      },
    createAccountText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
        paddingTop: 20,
        fontSize: 32,
        textAlign: 'center',
    },
    inputWrapper: {
        borderColor: '#D4D4D4',
        backgroundColor: '#FAF8F8',
        borderWidth: 1,
        height: 37,
        borderRadius: 12,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        // Text styles moved to TextInput component
    },
    wrapper: {
        position: 'relative',
        marginBottom: windowHeight * 0.015,
    },
    buttonWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: windowHeight * 0.1,
    },
    buttonText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.white,
        textAlign: 'center',
    },
    errorMessage: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontWeight: '400',
        lineHeight: 12,
        color: 'red',
        fontSize: 12,
        marginLeft: 5,
        textAlign: 'right',
    },
    logoContainer: {
        width: '55%',
        height: windowHeight * 0.2, // Adjusted to use relative height
        marginHorizontal: '28%',
        marginBottom: windowHeight * 0.001,
    },
    logo: {
        width: '80%', // Adjust to fill the container width
        height: '80%', // Adjust to fill the container height
        resizeMode: 'contain',
    },
    loginBtns: {
        width: '22%',
        height: 120,
        paddingTop: 50,
        marginLeft: 20,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignSelf: 'center', // Adjusted for alignment
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
        marginTop: 8,
    },
    linkText: {
        fontFamily: 'Almarai', // Make sure this font is properly linked in your React Native project
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 16,
        color: COLORS.dark,
        textDecorationLine: 'underline',
        textDecorationColor: COLORS.dark,
    },
    newAccountText: {
        marginTop: '5%',
        alignItems: 'center',
    },
    welcomeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', // Center content
        backgroundColor: COLORS.white,
    },
});

export default styles;

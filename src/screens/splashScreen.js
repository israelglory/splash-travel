import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { splashBg, globe } from '../constants/images';
import { primaryColor } from '../constants/colors';

const  SplashScreen = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('Home');
}


    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //       //navigation.navigate('Home');
    //     }, 10000);
    
    //     // Clear the timeout when the component unmounts to avoid potential issues
    //     return () => clearTimeout(timeout);
    //   }, [navigation]);



    return (
          <View style = {styles.sectionContainer}>
            <ImageBackground source={splashBg} style={styles.image}>

              {/*Globe Image*/}
              <ImageBackground source={globe} style={styles.globe} />
            
              <Text style = {styles.title}>
                The world within reach.
              </Text>

              <TouchableOpacity style = {styles.btn} onPress={() => goToHome()}>
                    <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>

              {/*Already have an account*/}
              <View style={styles.doesntHaveAccount}>
                <Text style={styles.doesntHaveAccountText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
            
          </View>
    );
}
//require('../assets/images/logo.png')

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        margin:0,
    },
    //Make the image full the screen and fit it
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        //resizeMode: 'contain'
        justifyContent: 'flex-end'
    },
    globe: {
        width:32,
        height:32,
        alignSelf: 'center',
        marginBottom: 24,
        resizeMode: 'contain'
    },
    title: {
        color: "white",
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      //width: "100%",
      paddingVertical: 24,
      //height: 60,
      borderRadius: 10,
      marginHorizontal: 24,
      backgroundColor: primaryColor,
    },
    btnText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    doesntHaveAccount: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
  },
  signUpText: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white',
  },
  doesntHaveAccountText: {
      fontSize: 20,
      fontWeight: '500',
      color: "white",
      paddingBottom: 32,
  },
  });
  
  export default SplashScreen;
  
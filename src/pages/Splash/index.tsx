import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, SafeAreaView, TextInput, ImageBackgroundComponent, TouchableOpacity } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


const Splash = () => {
  return (
    
    <ImageBackground   source={require('../../assets/world.gif')} 
        style={{
        flex:1,
        alignItems:'center',
        

        }} />
    

  )}

  export default Splash;
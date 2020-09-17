import React from 'react';
import { StyleSheet, Text, View, ImageBackground,  TextInput, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Home = () => {
  return (

  
    
       <View style={styles.container}>
    
       <ImageBackground source={require('../../assets/world.gif')} style={styles.image}/>
      
      <TextInput placeholder="Email" autoCompleteType="email" style={styles.email} ></TextInput>
      <TextInput placeholder="Password" secureTextEntry autoCompleteType="password" style={styles.password} ></TextInput>
      <TouchableOpacity style={styles.buttonlogin} >
        <Text style={{ textAlign: 'center', padding: 15 }}> Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgot} >
        <Text style={{textAlign : "left"}} >Forgot  your login details?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.account} >
        <Text style={{ textAlign: 'center', padding: 15, color: '#FFFF' }}>Don't have an account ? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.term} >
        <Text>Terms & Privacy Policy</Text>
      </TouchableOpacity>


    </View>

    


  )
}




export default Home

const styles = StyleSheet.create({
  container: {
    
    
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    
    
    


  },

  image: {
    
    opacity: 0.55,
    width: '100%',
    height: '100%',
    

  },

  email: {

    position: 'absolute',
    top: 300,
  
    width: 270,
    maxwidth: '100%',
    height: 53,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',


  },

  password: {

    position: 'absolute',
    top: 365,
    width: 270,
    maxwidth: '100%',
    height: 53,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',


  },

  forgot: {
    
    
    position: 'absolute',
    top: 500,
    
    width: 151,
    height: 20,
    color: '#000000',
    fontFamily: 'SF Pro Text',
    fontSize: 12,
    fontWeight: '500',
  },

  buttonlogin: {
    position: 'absolute',
    top: 440,
    width: 270,
    maxwidth: '100%',
    height: 53,
    
    
    
    
    borderColor: '#707070',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#BFD56B',
    


  },

  account: {
    position: 'absolute',
    top: 550,
    width: 270,
    maxwidth: '100%',
    height: 53,
    borderColor: '#707070',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#000000',
    

  },

  term: {
    
    position: 'absolute',
    top:  610,
    height: 20,
    color: '#000000',
    fontFamily: 'SF Pro Text',
    fontSize: 12,
    fontWeight: '500',

  }
})
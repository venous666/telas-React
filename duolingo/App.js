import * as React from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import venus from './assets/duolingp.png'
const DuolingoScreen = () => {
  return (
    <View style={styles.container}>
      <Image source  = {venus} style={styles.oi}/>
      <Text style={styles.title}>  Learn a language for free.</Text>
        <Text style={styles.subtitle}> Forever. </Text>
      
  <TouchableOpacity style={styles.whiteButton}>
   
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.buttonText}> I already have an account</Text>
      </TouchableOpacity>
     
      
    </View>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  
  oi:{
  width:100,
  height:100,
  },
  whiteButton: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    fontColor: '#78c802',
    borderRadius: 10,
    marginRight: 10,
     marginLeft: 10,
     margin:24,
     textAlign:'center',
         zIndex: 1,
         fontSize:100,
         
  },
  greenButton: {
    backgroundColor: '#78c802',
    fontColor:'white',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
     marginLeft: 10,
     fontSize:100,
  },
  
});

export default DuolingoScreen;
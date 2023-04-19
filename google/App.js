import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import venus from './assets/googlelogo_color_272x92dp.png'
const GoogleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
         <Image source  = {venus} style={styles.oi}/>
    
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="search or type url"
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
       
      </View>
      <View style={styles.linksContainer}>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 5,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    padding: 5,
    width:300,
  },
  searchButton: {
    backgroundColor: '#4285f4',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  
});

export default GoogleScreen;
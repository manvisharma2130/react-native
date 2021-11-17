import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>MANVI SHARMA</Text>
      <Text style={styles.name}>Age : 23</Text>
      <Text style={styles.name}>Phone No. - 7455875101</Text>
      <Text style={styles.name}>Email : ms4626235@gmail.com</Text>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent:"center"
  },
  name:{
    fontSize: 30,
    textAlign:"center",
    color:"#fff",
    fontWeight:"600"
  }
});

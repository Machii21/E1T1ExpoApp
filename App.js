import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.pfp} 
        source={{uri: 'https://www.eachoneteachone.is/uploads/4/6/3/3/46337981/joshphoto1_orig.jpeg'}} 
      />
      <Text style={styles.name}>Joshua Paza</Text>
      <Text style={styles.email}>pazajoshua@gmail.com</Text>
      <Text style={styles.question}>Why did you want to learn mobile app development?</Text>
      <Text style={styles.answer}>
        I wanted to learn mobile app development because I've always been facinated with the innerworkings of tech and mobile applications being a huge factor of feeding this fascination of mine, I thought it would be a great opportunity to learn.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b32e6e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pfp: {
    width: 170,
    height: 170,
    borderRadius: 99,
    margin: 10,
  },
  name: {
    fontSize: 40,
  },
  email: {
    fontSize: 20,
  },
  question: {
    fontWeight: "bold",
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    marginTop: 14,
    margin: 54,
    marginBottom: 0,
    padding: 10,
  },
  answer: {
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    padding: 10,
    margin: 54,
    marginTop: 0,
  },
});

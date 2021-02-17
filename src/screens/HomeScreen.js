import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const HomeScreen = ({navigation}) => {
  
  return (
    <View>
      <Text style={styles.textStyle}>
      HomeScreen
      </Text>
      
      <Button 
      onPress={()=>{navigation.navigate('List')}}
      title="Tap to go to List Demo" />

<Button 
      onPress={()=> {navigation.navigate('Image')}}
      title="Tap to go to image screen Demo" />
      

      <Button 
      onPress={()=> {navigation.navigate('Components')}}
      title="Tap to go to Components Demo" />

<Button 
      onPress={()=> {navigation.navigate('Counter')}}
      title=" go to Counter Demo" />
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
    
  }
});

export default HomeScreen;

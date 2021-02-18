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
      title=" go to List Demo" 
      />

      <Button 
      onPress={()=> {navigation.navigate('Image')}}
      title=" go to image screen Demo" 
      />
      

      <Button 
      onPress={()=> {navigation.navigate('Components')}}
      title="Tap to go to Components Demo" 
      />

      <Button 
      onPress={()=> {navigation.navigate('Color')}}
      title=" go to Color Demo" 
      />

      <Button 
      onPress={()=> {navigation.navigate('Counter')}}
      title=" go to Counter Demo" 
      />

<Button 
      onPress={()=> {navigation.navigate('Square')}}
      title=" go to Square Demo" 
      />
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

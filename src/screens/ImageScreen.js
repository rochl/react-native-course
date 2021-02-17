import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Forest" score="6" imageSource={require("../../assets/forest.jpg")}/>
        <ImageDetail title="Beach" score="5" imageSource={require("../../assets/beach.jpg")}/>
        <ImageDetail title="Mountain" score="8"  imageSource={require("../../assets/mountain.jpg")}/>
        <ImageDetail title="Miranda" score="1000000" imageSource={require("../../assets/miranda.jpg")}/>
        
    </View>
    
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;
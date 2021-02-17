import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Ocear"/>
        <ImageDetail title="Porsche"/>
        <ImageDetail title="Miranda"/>
        
    </View>
    
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen;
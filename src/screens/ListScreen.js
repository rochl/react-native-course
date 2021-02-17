import React from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native';
const ListScreen =() => {

    const friends = [
        {name:'Miranda',age:34},
        {name:'Michael',age:12},
        {name:'Jacob',age:62},
        {name:'Nate',age:48},
        {name:'Crhis',age:19},
        {name:'Myles',age:12},
        {name:'Aidan',age:32},
        {name:'Evan',age:41},
    ]

    return (
    <FlatList 
    showsVerticalScrollIndicator={false}
    keyExtractor={friends => friends.name}
    data={friends} 
    
    renderItem={({item}) => {
        return (
            <Text 
            style={styles.textStyle}>
               Name: {item.name} |  Age: {item.age}
            </Text>
        )}} 
    />
    )
};
    const styles = StyleSheet.create({
        textStyle:{
            marginVertical:30
        }
    })

    export default ListScreen;
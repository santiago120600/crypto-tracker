import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';;

const CoinsItem = ({item}) =>{
    return(
        <View>
            <Text>{item.name}</Text> 
            <Text>{item.symbol}</Text> 
        </View>
    );
}
export default CoinsItem;

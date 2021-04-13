import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';;

const CoinsItem = ({item}) =>{
    getIconArrow = () =>{
        if(item.percent_change_1h > 0){
            //arrow up 
        }else{
            //arrow down 
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text> 
                <Text style={styles.nameText}>{item.name}</Text> 
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16
    },
    row:{
        flexDirection:"row"
    },
    symbolText:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
        marginRight:12
    },
    nameText:{
        color:"#fff",
        fontSize:14,
        marginRight:16
    },
    percentText:{
        color:"#fff",
        fontSize:12
    },
    priceText:{
        color:"#fff",
        fontSize:14
    },

});

export default CoinsItem;

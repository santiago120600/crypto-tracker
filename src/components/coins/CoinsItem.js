import React from 'react';
import {View, Text, Pressable, StyleSheet, FlatList, Platform} from 'react-native';;
import Icon from 'react-native-vector-icons/FontAwesome';  
import Colors from 'cryptoTracker/src/res/colors';

const CoinsItem = ({item, onPress}) =>{
    getIconArrow = () =>{
        if(item.percent_change_1h > 0){
            //arrow up 
        }else{
            //arrow down 
        }
    }
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.row}>
                <Text style={styles.symbolText}>{item.symbol}</Text> 
                <Text style={styles.nameText}>{item.name}</Text> 
                <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.percentText}>{item.percent_change_1h}</Text>
                <Icon 
                    name={item.percent_change_1h > 0 ? "arrow-up" : "arrow-down"} 
                    color={item.percent_change_1h > 0 ? "#457770" : "#844258"}
                    size={22}
                />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:16,
        borderBottomColor:Colors.zircon,
        borderBottomWidth:1,
        paddingLeft: Platform.OS == 'ios' ? 0: 16,
        marginLeft: Platform.OS =='ios' ? 16 : 0,
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
        fontSize:12,
        marginRight:8
    },
    priceText:{
        color:"#fff",
        fontSize:14
    },

});

export default CoinsItem;

import React, {Component} from 'react';
import {View, FlatList, Text, Image, StyleSheet, SectionList, Pressable} from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';
import Http from 'cryptoTracker/src/libs/http';
import CoinMarketItem from './CoinMarketItem';
//import Storage from 'cryptoTracker/src/libs/storage';

class CoinDetailScreen extends Component{
    state={
        coin:{},
        markets:[],
        isFavorite:false
    }

    toogleFavorites = () =>{
        if(this.state.isFavorite){
           this.removeFavorite(); 
        }else{
            this.addFavorite();
        }
    }

    addFavorite = () =>{
        const coin = JSON.stringify(this.state.coin);
        const key = `favorite-${this.state.coin.id}`;
        const stored = Storage.instance.store(key, coin);
        if(stored){
            this.setState({isFavorite:true});
        }
    }

    removeFavorite = () =>{
    }

    getMarkets = async (coinId) =>{
       const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
       const markets = await Http.instance.get(url);
        this.setState({markets});
    }

    getSymbolIcon = (name)=>{
        if(name){
            const symbol = name.toLowerCase().replace(" ","-");
            return `https://c1.coinlore.com/img/25x25/${symbol}.png`
        }
    }

    getSections = (coin) =>{
        const sections = [
            {
                title:"Market cap",
                data:[coin.market_cap_usd]
            },
            {
                title:"Volume 24h",
                data:[coin.volume24]
            },
            {
                title:"Change 24h",
                data:[coin.percent_change_24h]
            }
        ]
        return sections;
    }

    componentDidMount(){
        const {coin}= this.props.route.params;
        this.props.navigation.setOptions({title:coin.symbol});
        this.setState({coin});
        this.getMarkets(coin.id);
    }

    render(){
        const {coin, isFavorite, markets} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <View style={styles.row}>
                        <Image style={styles.iconImg} source={{uri:this.getSymbolIcon(coin.name)}}/>
                        <Text style={styles.titleText}>{coin.name}</Text>
                    </View>

                    <Pressable 
                        onPress={this.toogleFavorites}
                        style={[
                            styles.btnFavorite, 
                            isFavorite ? 
                            styles.btnFavoriteRemove :
                            styles.btnFavoriteAdd
                        ]}>
                        <Text style={styles.btnFavoriteText}>{isFavorite ? "Remove favorite" : "Add favorite"}</Text>
                    </Pressable>
                </View>
                <SectionList
                    style={styles.section}
                    sections={this.getSections(coin)}
                    keyExtractor={(item)=>item}
                    renderItem={({item})=>
                        <View style={styles.sectionItem}>
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                    }
                    renderSectionHeader={({section})=>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}>{section.title}</Text>
                        </View>
                    }
                />

                <Text style={styles.marketTitle}>Markets</Text>
                <FlatList
                    style={styles.list}
                    horizontal={true}
                    data={markets}
                    renderItem={({item})=> <CoinMarketItem item={item}/>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    iconImg:{
        width:25,
        height:25
    },
    subHeader:{
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    row:{
        flexDirection:'row',
    },
    container:{
        backgroundColor:Colors.charade,
        flex:1
    },
    titleText:{
        fontSize:16,
        fontWeight:'bold',
        color:Colors.white,
        marginLeft:8
    },
    sectionHeader:{
        backgroundColor:'rgba(0,0,0,0.2)',
        padding:8,
    },
    sectionItem:{
        padding:8,
    },
    itemText:{
        color:Colors.white,
        fontSize:14,
    },
    sectionText:{
        color:Colors.white,
        fontSize:14,
        fontWeight:'bold',
    },
    section:{
        maxHeight:220,
    },
    list:{
        maxHeight:100,
        paddingLeft:16
    },
    marketTitle:{
        color:Colors.white,
        fontSize:16,
        marginBottom:16,
        marginLeft:16,
        fontWeight:'bold'
    },
    btnFavorite:{
        padding:8,
        borderRadius:8
    },
    btnFavoriteAdd:{
        backgroundColor:Colors.picton,
    },
    btnFavoriteRemove:{
        backgroundColor:Colors.carmine
    },
    btnFavoriteText:{
        color:Colors.white,
    },
}); 

export default CoinDetailScreen;

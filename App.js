import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from 'cryptoTracker/src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';  
import Colors from 'cryptoTracker/src/res/colors';
import FavoritesStack from 'cryptoTracker/src/components/favorites/FavoritesStack';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
            tintColor:'#fefefe',
            style:{
                backgroundColor:Colors.blackPearl
            }
        }}    
      >
        <Tabs.Screen
            name="Coins"
            component={CoinsStack}
            options={{
                tabBarIcon:({size,color})=>(
                    <Icon 
                        name="bank" 
                        size={size}
                        color={color}
                    />
                )
            }}
          />
        <Tabs.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{
                tabBarIcon:({size,color})=>(
                    <Icon 
                        name="star" 
                        size={size}
                        color={color}
                    />
                )
            }}
          />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;

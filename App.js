import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Theme} from './styles/theme';
import StockPage from './pages/stock-page'
import SearchPage from './pages/search-page'
import {activeColor, secondaryColor, tabOptions, textColor} from "./constants";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer theme={Theme}  labeled={false}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: textColor,
            tabBarActiveBackgroundColor: activeColor,
            tabBarLabelStyle: {
              fontSize: 14,
              paddingBottom: 20,
            },
            tabBarIconStyle: {
              marginTop: 15
            },
            tabBarStyle: {
              backgroundColor: secondaryColor,
              height: 80,
              borderTopWidth: 0,

            },
          }}
        >
          <Tab.Screen name="Stocks" options={tabOptions(false)}  component={StockPage}/>
          <Tab.Screen name="Search" options={tabOptions(true)} component={SearchPage}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

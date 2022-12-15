import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from "react-native";
import {searchListItem} from "../styles/search-page-list-item";
import {Icon} from "@rneui/base";
import {Theme} from "../styles/theme";


const FavouriteStar = ({symbol, favourite}) => {
  const addToFavourites = async () => {
    console.log('I am trying to save')
    try {
      await AsyncStorage.setItem(
        '@favourites',
        symbol
      );
      console.log('saved item', symbol)
    } catch (error) {
      // Error saving data
    }
  };

  const styleFavourite = () => {
    console.log(favourite)
      return Theme.colors.favourite
  }

  return <View style={searchListItem.favouriteButton}  >
    <Icon name="star" color={styleFavourite()} style={styleFavourite()} onPress={() => addToFavourites()}/>
  </View>
}

export default FavouriteStar;

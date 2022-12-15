import {Text} from "@rneui/base";
import React from "react";
import {View} from "react-native";

import {searchListItem} from "../../styles/search-page-list-item";
import FavouriteStar from "../FavouriteStar";

const ListItem = (stock) => {
  console.log('head ing', stock)
  return <View style={searchListItem.container}>
    <View style={searchListItem.column}>
      <Text style={searchListItem.title}>{stock.symbol}</Text>
      <Text style={searchListItem.label}>{stock.name}</Text>
    </View>
    <FavouriteStar symbol={stock.symbol} favourite={stock.favorite} />
  </View>


}

export default ListItem;

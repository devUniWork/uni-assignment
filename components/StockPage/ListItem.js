import {StyleSheet, View} from "react-native";
import {Theme} from "../../styles/theme";
import {Text} from "@rneui/base";
import React from "react";
import Ticker from "../Ticker";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: Theme.colors.highlight,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  column: {
    flex: 1,
    justifyContent: "flex-start"
  },
  label: {
    color: Theme.colors.text,
    flex: 1,
    height: 25,
    fontSize: 18,
  },
});

const ListItem = (stock) => {
  console.log(stock['symbol'])
  console.log(stock['close'])
  return <View style={styles.container}>
    <View style={styles.column}>
      <Text style={styles.label}>{stock['symbol']}</Text>
    </View>
    <View style={styles.column}>
      <Text style={styles.label}>{stock['close']}</Text>
    </View>
    <View>
      <Ticker stock={stock}/>
    </View>
  </View>


}

export default ListItem;

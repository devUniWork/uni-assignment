import {StyleSheet, View} from "react-native";
import {Icon, Text} from "@rneui/base";
import React, {useState} from "react";
import {Theme} from "../styles/theme";
import {CalculatePercentage} from "../utility/calculate-percentage"

const Ticker = ({stock}) => {
  const [percentageChange, setPercentageChange] = useState(CalculatePercentage(stock['open'], stock['close']));
  const TickerColor = () => {
    if (percentageChange > 0)  {
      return {backgroundColor: Theme.colors.activeColor, paddingHorizontal: 7}
    }
    if (percentageChange < 0) {
      return {backgroundColor: Theme.colors.dangerColor, paddingHorizontal: 5}
    }

    return  {backgroundColor: Theme.colors.secondaryColor, paddingHorizontal: 10}
  }

  const IconType = () => {
    if (percentageChange > 0)  {
      return  <Icon name="trending-up" color={Theme.colors.text}/>
    }
    if (percentageChange < 0) {
      return  <Icon name="trending-down" color={Theme.colors.text}/>
    }
  }

  const styles = StyleSheet.create({
    ticker: {
      ...TickerColor(),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      borderRadius: 5
    },
    label: {
      color: Theme.colors.text
    }
  });


  return <View style={styles.ticker}>

    <Text style={styles.label}>
      {CalculatePercentage(stock['open'], stock['close'])}%
    </Text>
      <IconType />
  </View>
}

export default Ticker;

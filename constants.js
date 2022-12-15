import {Icon} from "@rneui/themed";
import React from "react";

export const primaryColor = "#0f111f"
export const secondaryColor = "#1a1a3d"
export const activeColor = "#36a169"
export const dangerColor = "#c40f0f"
export const textColor = '#f1f1f1'
export const favourite = '#dbde19'
export const highlight = 'rgba(108,97,97,0.47)'

export const tabOptions = (isSearchPage) => {
  return {
    headerTitleAlign: 'center',
    tabBarIcon: () => {
      return isSearchPage ? <Icon name="search" color={textColor} size={30} /> : <Icon name="trending-up" color={textColor} size={30}/>
    },
    headerStyle: {
      backgroundColor: primaryColor,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    }
  }
}

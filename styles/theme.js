import {DefaultTheme } from '@react-navigation/native';
import {activeColor, dangerColor, favourite, highlight, primaryColor, secondaryColor, textColor} from "../constants";
export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: primaryColor,
    text: textColor,
    secondaryColor: secondaryColor,
    highlight: highlight,
    activeColor: activeColor,
    dangerColor: dangerColor,
    favourite: favourite
  },
};

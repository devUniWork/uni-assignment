import {StyleSheet} from "react-native";
import {Theme} from "./theme";

export const searchListItem = StyleSheet.create({
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
  title: {
    fontSize: 22,
    color: Theme.colors.text
  },
  label: {
    color: Theme.colors.text,
    flex: 1,
    height: 25,
    fontSize: 16,
  },
  favouriteButton: {
    flex: 1,
    marginRight: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  favouriteIcon: {
    padding: 15,
  }
});

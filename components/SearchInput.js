import {TextInput, View} from "react-native";
import { Icon } from '@rneui/themed';
import {StyleSheet} from "react-native";
import {Theme} from "../styles/theme";

const SearchInput = () => {
  return <View style={styles.searchSection}>
    <Icon style={styles.searchIcon} name="search" size={20} color={Theme.colors.text}/>
    <TextInput
      style={styles.input}
      placeholderTextColor={Theme.colors.text}
      placeholder="Type a company name or stock symbol"
      onChangeText={(searchString) => {this.setState({searchString})}}
      underlineColorAndroid="transparent"
    />
  </View>
}

const styles = StyleSheet.create({

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Theme.colors.background,
    color: Theme.colors.text,
    placeholder: Theme.colors.text
  }
})


export default SearchInput;

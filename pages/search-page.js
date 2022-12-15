import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";
import SearchInput from "../components/SearchInput";
import {DemoData} from "../demo-data";
import ListItem from "../components/SearchPage/ListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/native";




export default function SearchPage() {
  // get favorites and pass down
  const [demoData, setDemoData] = useState(DemoData);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getData()
      console.log('just landed here')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  //
  //
  const getData = async () => {
    try {
      console.log('getting from storage my guy bro')
      const data = await AsyncStorage.getItem('@favourites');
      if (data !== null) {
        console.log("this is the data", data)
        const findRecord = demoData.filter((record) => record.symbol == data)[0];
        console.log("fanging", findRecord)
        const updated = {...findRecord, "favorite": true};
        console.log("MY GOOBER", updated)
        setDemoData(updated)
      }
    } catch (error) {
      // Error retrieving data
    }
  }


  return (
    <View>
      <SearchInput/>
      <FlatList
        data={demoData}
        renderItem={({item}) =>  item ? <ListItem {...item} /> : null}
      />
    </View>
  );
}

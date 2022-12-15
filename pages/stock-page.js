import React, {useEffect, useState} from "react";
import {FlatList, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Text} from "@rneui/base";
import {Theme} from "../styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListItem from "../components/StockPage/ListItem";


export default function StockPage() {
  const [newData, setData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getData()

    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);


  const getData = async () => {
    try {
      console.log('getting from storage')
      const data = await AsyncStorage.getItem('@favourites');
      if (data !== null) {
        console.log('data is not null')
        await getStockDetail(data)
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  const getStockDetail = async (data) => {
    console.log('calling backend', data)

    try {
      let res = await fetch(`http://fosapps01.qut.edu.au:3000/history?symbol=${data}`)
      let datas = await res.json();
      console.log('set data', datas.length)
      // console.log(res)
      // let res = await fetch(`http://fosapps01.qut.edu.au:3000/history?symbol=?${data}`)
      // console.log(res)
      // let result = await res.json();
      // console.log('my data', result)
      setData([])
      console.log("data 0", datas[0])
      setData(newData => [...newData, datas[0]])
    } catch(e) {
      console.log('there was an error', e)
    }

  }


  return (
    <View>

      <FlatList
        data={newData}
        keyExtractor={(item, index) => String(index)}
        renderItem={({item}) =>  item !== null && item !== undefined ? <ListItem {...item}/> : null}
      />
    </View>
  );
}

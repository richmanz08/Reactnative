import React ,{useEffect, useState}from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {ListItem} from "react-native-elements";
import {Avatar} from "react-native-elements";
const ApiScreen= () => {
 const [data,setData] = useState([])

 useEffect(() => {
     const url = "https://randomuser.me/api/?seed=1&page=1&results=10"
      const getResults = async() => {
           await fetch(url) //axios
          .then(res => res.json())
          .then((json) => setData(json.results))
          .catch((error) => console.log(error))
      }
 getResults()
    },[])

  return (
    <View style={myStyles.viewStyle}>
      <Text style={myStyles.textStyle}>Api Screen</Text>
      <FlatList 
      data = {data}
      keyExtractor={item => item.email}
    renderItem = {({item}) => (
      <ListItem bottomDivider>
        <Avatar 
        size="medium"
        rounded
        
         source={{ uri:item.picture.large}}
        />
        <ListItem.Content style={{backgroundColor:"#5AB299"}}>
          <ListItem.Title style={{fontSize:20}}>
            {item.name.first} {item.name.last}
          </ListItem.Title>
          <ListItem.Subtitle style={{fontWeight:"bold",color:"grey"}}>
            {item.name.email}{item.cell}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )}
      />
    </View>
  );
};
const myStyles = StyleSheet.create({
    viewStyle:{
        flex:1,
        alignItems:'center',
        padding:5
      
    }
   
 
});
export default ApiScreen;
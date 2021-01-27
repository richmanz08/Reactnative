import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import contact from "../json/contact.json"
const ContactScreen= () => {
 const data = contact.results


  return (
    <View style={myStyles.viewStyle}>
      <Text style={myStyles.textStyle}>Pet Screen</Text>
      <FlatList 
      data = {data}
      keyExtractor={item => item.email}
    renderItem = {({item}) => {
        return (
            <View style={myStyles.listStyle}>
                
                <View style={myStyles.setName}>
                <Image  
                style= {{width:100,height:100,alignSelf:"center",borderRadius:100,borderWidth:1,borderColor:'#FFF'}}
                source ={{ uri: item.picture.thumbnail}}/>
                </View>
              <View style={myStyles.setName}>
                <Text style={myStyles.txtcolor}>{item.name.first}{item.name.last}</Text>
                <Text style={myStyles.txtcolor}>{item.email}</Text>
             </View>
                <View style={myStyles.setName}><Text style={myStyles.txtcolor}>{item.cell}</Text></View>
            </View>
        )
    }}
      />
    </View>
  );
};
const myStyles = StyleSheet.create({
    viewStyle:
    {
      flex:1,
      alignItems:'center',
      padding:20     
    },
   textStyle:{
         fontSize:30,
        fontWeight:"700"
   },
    listStyle :{
  backgroundColor : "#212121",
  width:400,
  marginVertical:2,
  padding:10,
flexDirection:"row",
justifyContent:"center"
    }
,setName:{
    padding:10,
    flexDirection:"column"
    ,borderWidth:1
    ,marginRight:5,
    borderRadius: 6,
    alignItems:"center"
    , color: "#666"
    
},txtcolor:{
    color: '#fff'
}
 
});
export default ContactScreen;
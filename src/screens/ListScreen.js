import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
const ListScreen= () => {

  const pet = [
      {id: '001', petName: 'Ryan', type:"cat",  age:"18 months"},
      {id: '002', petName: 'Somsri',type:"cat", age:"19 months"},
      {id: '003', petName: 'Miyasawa',type:"cat", age:"20 months"},
      {id: '004', petName: 'Boolean',type:"cat", age:"21 months"},
      {id: '005', petName: 'Prayad',type:"cat", age:"22 months"}
      
  ]

console.log(pet)



  return (
    <View style={myStyles.viewStyle}>
      <Text style={myStyles.textStyle}>Pet Screen</Text>
      <FlatList 
      data = {pet}
      keyExtractor={item => item.id}
    renderItem = {({item}) => {
        return (
            <View style={myStyles.listStyle}>
                <View style={myStyles.setName}>
                <Text style={myStyles.txtcolor}>{item.id}</Text></View>
              <View style={myStyles.setName}>
                <Text style={myStyles.txtcolor}>{item.petName}</Text>
                <Text style={myStyles.txtcolor}>{item.type}</Text>
</View>
                <View style={myStyles.setName}><Text style={myStyles.txtcolor}>{item.age}</Text></View>
            </View>
        )
    }}
      />
    </View>
  );
};
const myStyles = StyleSheet.create({
    viewStyle:{
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
    width:100,
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
export default ListScreen;
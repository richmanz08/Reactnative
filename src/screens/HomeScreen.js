import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Button} from 'react-native-elements'
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={myStyles.textStyle}>Home screen</Text>
      <Image source={require("../images/line.png")}></Image>
      <Button
        title="Show"
        onPress={() => navigation.navigate("Component")}
        type="outline"
        raised
      ></Button>
      <Button
        title="Show"
        onPress={() => navigation.navigate("Counter")}
        type="clear"
      ></Button>
      <Button
        title="Image"
        onPress={() => navigation.navigate("Image")}
      ></Button>
<Button
        title="ListScreen"
        onPress={() => navigation.navigate("List")}
      ></Button>
<Button
        title="ContactScreen"
        onPress={() => navigation.navigate("Contact")}
      ></Button>
      <Button
        title="ApiScreen"
        onPress={() => navigation.navigate("Api")}
        raised
        
      ></Button>
    </View>
  );
};
const myStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00DDFF",
    padding: 20,
  },
  textStyle: {
    margin: 20,
    fontWeight: "700",
    color: "#e4e6e5",
  },
  imageStyle: {
    width: 200,
    height: 250,
    resizeMode: "contain",
  },
});
export default HomeScreen;

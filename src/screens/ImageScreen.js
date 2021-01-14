import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageDetail from "../components/ImageDetail";
const ImageScreen = () => {
  return (
    <View style={myStyles.viewStyle}>
      <Text style={myStyles.text2}>ImageScreen</Text>

      <ImageDetail imgRating="0.01" imgBGColor="#e4e6e5" />

      <Image
        style={myStyles.Img}
        source={require("../images/Gear.png")}
      ></Image>
      <Text style={myStyles.text}>Gear</Text>
      <Image
        style={myStyles.Img}
        source={require("../images/Logout.png")}
      ></Image>
      <Text style={myStyles.text}>Logout</Text>

      <Image
        style={myStyles.Img}
        source={require("../images/changepassword.png")}
      ></Image>
      <Text style={myStyles.text}>changepassword</Text>
      <Image
        style={myStyles.Img}
        source={require("../images/Switchaccount.png")}
      ></Image>
      <Text style={myStyles.text}>Switchaccount</Text>
    </View>
  );
};
const myStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#212121",
    padding: 20,
  },
  Img: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 20,
    color: "#aaa",
    // marginBottom: 30,
  },
  text2: {
    fontFamily: "Kanit",
    fontSize: 50,
    color: "#aaa",
    marginBottom: 10,
  },
});
export default ImageScreen;

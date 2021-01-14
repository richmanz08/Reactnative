import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ImageScreen from "../screens/ImageScreen";
const ImageDetail = ({ imgRating, imgBGColor }) => {
  return (
    <View style={(myStyles.ImageBox, { backgroundColor: { imgBGColor } })}>
      <View>
        <Image
          style={myStyles.ImageDetail}
          source={require("../images/manu.png")}
        ></Image>
      </View>
      <View>
        <Text style={myStyles.textt}> Rating : [{imgRating}/5]</Text>
        <Text style={myStyles.textt}>Manchester United</Text>
      </View>
    </View>
  );
};
const myStyles = StyleSheet.create({
  ImageBox: {
    backgroundColor: "#321214",
    // flex: 1,
    flexDirection: "row",
  },
  ImageDetail: {
    width: 100,
    height: 100,
  },
  textt: {
    width: "100%",
    color: "#aaa",
  },
});
export default ImageDetail;

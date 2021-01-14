import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={myStyles.viewStyle}>
      <Text style={myStyles.textStyle}>Counter Screen</Text>
      <Text style={myStyles.textCountStyle}>{counter}</Text>
      <View style={myStyles.buttonStyle}>
        <Button
          title="Increase"
          onPress={() => {
            setCounter(counter + 1);
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            setCounter(counter - 1);
          }}
        />
        <Button
          title="Reset"
          onPress={() => {
            counter !== 0 ? setCounter(counter - 1) : null;
          }}
        ></Button>
      </View>
    </View>
  );
};
const myStyles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFF685",
    padding: 20,
  },
  textStyle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  textCountStyle: {
    fontSize: 178,
  },
  buttonStyle: {
    width: "75%",
  },
});
export default CounterScreen;

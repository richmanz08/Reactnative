import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ContactScreen from "./src/screens/ContactScreen";
import ApiScreen from "./src/screens/ApiScreen";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Api" component={ApiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

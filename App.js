import React from "react";
//import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
import Root from "./src/native/index";
import configureStore from "./src/store/index";

const { persistor, store } = configureStore();

export default function App() {
  return <Root store={store} persistor={persistor} />;
}

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu"
// });

// type Props = {};
// export default class App extends Component<Props> {
//   componentDidMount() {
//     //
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to TourMate!</Text>
//         <Text style={styles.instructions}>Online Travel Guide System</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#4F6D7A"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     color: "#F5FCFF"
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#F5FCFF",
//     marginBottom: 5
//   }
// });

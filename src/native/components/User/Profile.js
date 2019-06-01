import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends Component {
  componentDidMount() {
    //
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile</Text>
        <Text style={styles.instructions}>Profile Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F6D7A"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#F5FCFF"
  },
  instructions: {
    textAlign: "center",
    color: "#F5FCFF",
    marginBottom: 5
  }
});

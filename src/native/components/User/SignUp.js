import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Button,
  InputItem,
  WhiteSpace,
  WingBlank
} from "@ant-design/react-native";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: ""
  };
  componentDidMount() {
    //
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign Up with TourMate</Text>
        <WhiteSpace />
        <TextInput
          style={styles.textField}
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.textField}
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
          placeholder="Last Name"
        />
        <WhiteSpace />
        <Button
          style={styles.signupBtn}
          //activeStyle={styles.loginBtnActive}
          type="primary"
          onPress={() => {}}
        >
          SIGN UP
        </Button>
        <WhiteSpace />
        <WingBlank style={styles.loginTextContainer}>
          <Text style={styles.instructions}>Already a member?</Text>
          <Text style={styles.loginLink} onPress={() => Actions.login()}>
            Login
          </Text>
        </WingBlank>
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
  },
  loginLink: {
    textAlign: "center",
    color: "#1890ff",
    marginBottom: 5,
    marginLeft: 5
  },
  textField: {
    height: 40,
    width: "80%",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 0.5,
    color: "#FFFFFF",
    marginBottom: 30
  },
  signupBtn: {
    width: "90%",
    marginTop: 40
    //borderColor: "#007887",
    //backgroundColor: "#FFFFFF",
    // top: 100
  },
  loginTextContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

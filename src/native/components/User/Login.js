import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Button,
  InputItem,
  WhiteSpace,
  WingBlank
} from "@ant-design/react-native";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    //
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login with TourMate</Text>
        <WhiteSpace />
        <WingBlank style={styles.textFieldContainer}>
          <InputItem
            clear
            value={this.state.email}
            onChange={value => {
              this.setState({
                email: value
              });
            }}
            placeholder="E-mail Address"
          />
        </WingBlank>
        <WhiteSpace />
        <WingBlank style={styles.textFieldContainer}>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={value => {
              this.setState({
                password: value
              });
            }}
            placeholder="Password"
          />
        </WingBlank>
        <WhiteSpace />
        <Button
          style={styles.loginBtn}
          //activeStyle={styles.loginBtnActive}
          type="primary"
          onPress={() => Actions.home1()}
        >
          LOGIN
        </Button>
        <WhiteSpace />
        <WingBlank style={styles.signUpTextContainer}>
          <Text style={styles.instructions}>Don't have an account?</Text>
          <Text style={styles.signUpLink} onPress={() => Actions.signup()}>
            Create One
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
    backgroundColor: "#FFFFFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    marginBottom: 60
    // color: "#F5FCFF"
  },
  instructions: {
    textAlign: "center",
    // color: "#F5FCFF",
    marginBottom: 5
  },
  signUpLink: {
    textAlign: "center",
    color: "#1890ff",
    marginBottom: 5,
    marginLeft: 5
  },
  textFieldContainer: {
    marginBottom: 20,
    marginRight: 22,
    marginLeft: 5,
    alignItems: "center"
  },
  signUpTextContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginBtn: {
    width: "90%",
    marginTop: 40
    //borderColor: "#007887",
    //backgroundColor: "#FFFFFF",
    // top: 100
  },
  loginBtnActive: {
    // backgroundColor: "#007887"
  }
});

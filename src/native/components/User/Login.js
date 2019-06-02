import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
      <KeyboardAwareScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Login with TourMate</Text>
          <WhiteSpace />
          <TextInput
            style={styles.textField}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="E-mail Address"
            autoCompleteType="email"
          />
          <TextInput
            style={styles.textField}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
          />
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
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#FFFFFF"
  },
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
    marginBottom: 60,
    marginTop: "40%"
  },
  instructions: {
    textAlign: "center",
    marginBottom: 5
  },
  textField: {
    height: 40,
    width: "80%",
    borderBottomColor: "#4F6D7A",
    borderBottomWidth: 0.5,
    color: "#4F6D7A",
    marginBottom: 30
  },
  signUpLink: {
    textAlign: "center",
    color: "#1890ff",
    marginBottom: 5,
    marginLeft: 5
  },
  signUpTextContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  loginBtn: {
    width: "80%",
    marginTop: 20
  },
  loginBtnActive: {
    // backgroundColor: "#007887"
  }
});

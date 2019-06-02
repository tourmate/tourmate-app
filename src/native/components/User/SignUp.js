import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, WhiteSpace, WingBlank } from "@ant-design/react-native";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
          <Text style={styles.welcome}>Sign Up with TourMate</Text>
          <WhiteSpace />
          <TextInput
            style={styles.textField}
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
            placeholder="First Name"
            //inlineImageLeft="search_icon"
          />
          <TextInput
            style={styles.textField}
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}
            placeholder="Last Name"
          />
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
    marginTop: "20%"
  },
  instructions: {
    textAlign: "center",
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
    borderBottomColor: "#4F6D7A",
    borderBottomWidth: 0.5,
    color: "#4F6D7A",
    marginBottom: 30
  },
  signupBtn: {
    width: "80%",
    marginTop: 20
  },
  loginTextContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

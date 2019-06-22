import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { WhiteSpace, WingBlank } from "@ant-design/react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

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
            buttonStyle={styles.loginBtn}
            containerStyle={styles.buttonContainer}
            titleStyle={styles.buttonTitle}
            //activeStyle={styles.loginBtnActive}
            onPress={() => Actions.home()}
            loading={false}
            title="LOGIN"
          />
          <WhiteSpace />
          <WingBlank style={styles.signUpTextContainer}>
            <Text style={styles.instructions}>Don't have an account?</Text>
            <Text style={styles.signUpLink} onPress={() => Actions.signup()}>
              Create One
            </Text>
          </WingBlank>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.linearGradient}
          >
            <Text style={styles.buttonText}>Login with Facebook</Text>
          </LinearGradient>
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
    marginTop: "40%",
    color: "#192a56"
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
    height: 50,
    borderRadius: 50
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "100",
    letterSpacing: 1
  },
  loginBtnActive: {
    // backgroundColor: "#007887"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});

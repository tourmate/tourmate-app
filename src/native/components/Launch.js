import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, WhiteSpace } from "@ant-design/react-native";
import { Actions } from "react-native-router-flux";
import { MessageBarManager } from "react-native-message-bar";

export default class Launch extends React.Component {
  state = {
    authentidated: false
  };
  componentDidMount() {
    const { authentidated } = this.state;
    if (authentidated) {
      setTimeout(() => Actions.home(), 100);
    } else {
      setTimeout(() => Actions.auth(), 100);
    }
  }
  render() {
    return (
      <View {...this.props} style={styles.container}>
        <Text style={styles.welcome}>Welcome Back!</Text>
        <WhiteSpace />
        {/* <Button
          type="primary"
          onPress={() =>
            Actions.auth({ data: "Custom data", title: "Custom title" })
          }
        >
          LOGIN
        </Button>
        <WhiteSpace />
        <Button type="primary" onPress={Actions.error}>
          Display Error Modal
        </Button>
        <WhiteSpace />
        <Button
          type="primary"
          onPress={() => Actions.demo_lightbox({ data: "passed data" })}
        >
          Display Lightbox
        </Button>
        <WhiteSpace />
        <Button type="primary" onPress={() => Actions.customNavBar()}>
          CustomNavBar
        </Button>
        <WhiteSpace />
        <Button
          type="primary"
          onPress={() =>
            MessageBarManager.showAlert({
              title: "Your alert title goes here",
              message: "Your alert message goes here",
              alertType: "success"
              // See Properties section for full customization
              // Or check `index.ios.js` or `index.android.js` for a complete example
            })
          }
        >
          MessageBar alert
        </Button>
        <WhiteSpace />
        <Button type="primary" onPress={Actions.drawer}>
          TabBar
        </Button> */}
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
    color: "#192a56"
  }
});

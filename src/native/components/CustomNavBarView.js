import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, ViewPropTypes } from "react-native";
// import Button from "react-native-button";
import { Button, WhiteSpace } from "@ant-design/react-native";
import { Actions } from "react-native-router-flux";

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F6D7A"
  }
});

class TabView extends React.Component {
  render() {
    return (
      <View style={[styles.container, this.props.sceneStyle]}>
        <Button onPress={Actions.pop} type="primary">
          Back
        </Button>
        <WhiteSpace />
        <Button onPress={() => Actions.replace("launch")} type="primary">
          Welcome Page
        </Button>
        <WhiteSpace />
        <Button
          onPress={() => {
            Actions.customNavBar1();
          }}
          type="primary"
        >
          Switch to Scene with CustomNavBar #1
        </Button>
        <WhiteSpace />
        <Button
          onPress={() => {
            Actions.customNavBar2();
          }}
          type="primary"
        >
          Switch to Scene with CustomNavBar #2
        </Button>
        <WhiteSpace />
        <Button
          onPress={() => {
            Actions.customNavBar3();
          }}
          type="warning"
        >
          Switch to Scene with different CustomNavBar{" "}
        </Button>
        <WhiteSpace />
        <Button
          onPress={() => {
            Actions.hiddenNavBar();
          }}
          type="ghost"
        >
          Switch to Scene with a navBar hidden
        </Button>
      </View>
    );
  }
}
TabView.propTypes = propTypes;

export default TabView;

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { Actions } from "react-native-router-flux";
import { Icon } from "react-native-elements";
import Colors from "../../../theme/variables/commonColor";

export default class HomeNavBar extends React.Component {
  renderLeft() {
    return (
      <TouchableOpacity
        onPress={() => console.log("Hamburger button pressed!")}
        style={[
          styles.navBarItem,
          {
            paddingLeft: 10,
            width: "25%",
            flexDirection: "row",
            justifyContent: "flex-start"
          }
        ]}
      >
        <Icon
          name="menu"
          size={30}
          iconStyle={{
            width: 30,
            height: 30
          }}
          type="material"
          color="#FFFFFF"
        />
      </TouchableOpacity>
    );
  }

  renderMiddle() {
    return (
      <View style={[styles.navBarItem, { width: "50%" }]}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
      </View>
    );
  }

  renderRight() {
    return (
      <View
        style={[
          styles.navBarItem,
          {
            width: "25%",
            flexDirection: "row",
            justifyContent: "flex-end"
          }
        ]}
      >
        <TouchableOpacity
          onPress={() => console.log("Search")}
          style={{ paddingRight: 10 }}
        >
          <Icon
            name="search"
            size={30}
            iconStyle={{
              width: 30,
              height: 30
            }}
            type="material"
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    let dinamicStyle = { backgroundColor: "#192a56" };

    return (
      <View style={[styles.container, dinamicStyle]}>
        {this.renderLeft()}
        {this.renderMiddle()}
        {this.renderRight()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? 64 : 54,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10
  },
  navBarItem: {
    flex: 1,
    justifyContent: "center"
  },
  titleStyle: {
    color: Colors.textColor,
    alignSelf: "center",
    letterSpacing: 2,
    fontSize: Colors.fontSizeBase
    //marginLeft: "auto",
    //marginRight: "auto",
    //textAlign: "center"
  }
});

import React from "react";
import { StatusBar, Platform, StyleSheet } from "react-native";
//import { Font } from "expo";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, Overlay, Modal, Lightbox } from "react-native-router-flux";
import { StackViewStyleInterpolator } from "react-navigation-stack";
import { PersistGate } from "redux-persist/es/integration/react";

//import { Root, StyleProvider } from "native-base";
//import getTheme from "../../native-base-theme/components";
//import theme from "../../native-base-theme/variables/commonColor";

import Routes from "./routes/index";
import Loading from "./components/UI/Loading";

// Hide StatusBar on Android as it overlaps tabs
//if (Platform.OS === "android") StatusBar.setHidden(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  scene: {
    backgroundColor: "#F5FCFF",
    shadowOpacity: 1,
    shadowRadius: 3
  },
  tabBarStyle: {
    backgroundColor: "#eee"
  },
  tabBarSelectedItemStyle: {
    backgroundColor: "#ddd"
  }
});

const stateHandler = (prevState, newState, action) => {
  console.log("onStateChange: ACTION:", action);
};

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === "android" ? "mychat://mychat/" : "mychat://";

const transitionConfig = () => ({
  screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid
});

export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    persistor: PropTypes.shape({}).isRequired
  };

  state = { loading: true };

  async componentWillMount() {
    // await Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    // });

    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;
    const { store, persistor } = this.props;

    if (loading) return <Loading />;

    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router
            onStateChange={stateHandler}
            sceneStyle={styles.scene}
            sceneStyle={styles.scene}
          >
            <Overlay key="overlay">
              <Modal
                key="modal"
                hideNavBar
                transitionConfig={transitionConfig}
                uriPrefix={prefix}
              >
                <Lightbox key="lightbox">{Routes}</Lightbox>
              </Modal>
            </Overlay>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

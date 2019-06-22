import React from "react";
import { Scene, Tabs, Stack, ActionConst } from "react-native-router-flux";
import { Icon } from "@ant-design/react-native";

import DefaultProps from "../constants/navigation";
import AppConfig from "../../constants/config";

import SignUpContainer from "../../containers/SignUp";
import SignUpComponent from "../components/User/SignUp";

import LoginContainer from "../../containers/Login";
import LoginComponent from "../components/User/Login";

import MemberContainer from "../../containers/Member";
import ProfileComponent from "../components/User/Profile";

import HomeComponent from "../components/Home";

import Launch from "../components/Launch";
// import Register from './components/Register';
// import Login from './components/Login';
// import Login2 from './components/Login2';
// import Login3 from './components/Login3';
// import Home from './components/Home';
// import DrawerContent from './components/drawer/DrawerContent';
// import TabView from './components/TabView';
// import TabIcon from './components/TabIcon';
// import EchoView from "../components/EchoView";
// import MessageBar from './components/MessageBar';
// import ErrorModal from './components/modal/ErrorModal';
// import DemoLightbox from './components/lightbox/DemoLightbox';
// import MenuIcon from './images/menu_burger.png';
import CustomNavBarView from "../components/CustomNavBarView";
import CustomNavBar from "../components/CustomNavBar";
import CustomNavBar2 from "../components/CustomNavBar2";
import HomeNavBar from "../components/navigation/HomeNavBar";

const Index = (
  <Stack key="root" titleStyle={{ alignSelf: "center" }} hideNavBar>
    {/* <Scene
      key="echo"
      back
      clone
      component={EchoView}
      getTitle={({ navigation }) => navigation.state.key}
    /> */}
    <Scene
      key="launch"
      component={Launch}
      title="Launch"
      initial
      type={ActionConst.RESET}
    />
    <Stack key="auth" hideNavBar>
      <Scene
        key="login"
        component={LoginContainer}
        Layout={LoginComponent}
        title="Login"
        back
      />
      <Scene
        key="signup"
        component={SignUpContainer}
        Layout={SignUpComponent}
        title="SignUp"
        back
      />
    </Stack>
    <Stack key="customNavBar" hideTabBar headerLayoutPreset="center">
      <Scene
        key="customNavBar1"
        title="CustomNavBar 1"
        navBar={CustomNavBar}
        component={CustomNavBarView}
        back
      />
      <Scene
        key="customNavBar2"
        title="CustomNavBar 2"
        navBar={CustomNavBar}
        component={CustomNavBarView}
        back
      />
      <Scene
        key="customNavBar3"
        title="Another CustomNavBar"
        navBar={CustomNavBar2}
        component={CustomNavBarView}
        back
      />
      <Scene
        key="hiddenNavBar"
        title="hiddenNavBar"
        component={CustomNavBarView}
        hideNavBar={true}
        back
      />
    </Stack>

    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName.toUpperCase()}
          icon={() => <Icon name="global" {...DefaultProps.icons} />}
          navBar={HomeNavBar}
          back
        >
          <Scene key="homepage" component={HomeComponent} />
        </Stack>

        <Stack
          key="profile"
          title="PROFILE"
          icon={() => <Icon name="user" {...DefaultProps.icons} />}
          {...DefaultProps.navbarPropsWithBack}
          back
        >
          <Scene
            key="profileHome"
            component={MemberContainer}
            Layout={ProfileComponent}
          />
          <Scene
            back
            key="signUp"
            title="SIGN UP"
            {...DefaultProps.navbarProps}
            component={SignUpContainer}
            Layout={SignUpComponent}
          />
          <Scene
            back
            key="login"
            title="LOGIN"
            {...DefaultProps.navbarProps}
            component={LoginContainer}
            Layout={LoginComponent}
          />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;

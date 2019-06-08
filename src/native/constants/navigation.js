import Colors from "../../theme/variables/commonColor";

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: "#192a56" },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: "center",
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
      marginLeft: "auto",
      marginRight: "auto"
    },
    backButtonTintColor: Colors.textColor
  },
  navbarPropsWithBack: {
    navigationBarStyle: { backgroundColor: "#192a56" },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: "center",
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase,
      marginLeft: "25%",
      marginRight: "auto"
    },
    backButtonTintColor: Colors.textColor
  },
  tabProps: {
    swipeEnabled: true,
    activeBackgroundColor: "rgba(255,255,255,0.1)",
    inactiveBackgroundColor: Colors.brandPrimary,
    tabBarStyle: { backgroundColor: Colors.brandPrimary }
  },

  icons: {
    style: { color: "white", height: 30, width: 30 }
  }
};

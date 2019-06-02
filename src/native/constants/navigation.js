import Colors from "../../theme/variables/commonColor";

export default {
  navbarProps: {
    navigationBarStyle: { backgroundColor: "white" },
    titleStyle: {
      color: Colors.textColor,
      alignSelf: "center",
      letterSpacing: 2,
      fontSize: Colors.fontSizeBase
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

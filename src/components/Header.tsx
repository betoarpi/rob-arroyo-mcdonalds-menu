import { Image, Platform, SafeAreaView, StyleSheet, View } from "react-native";

import McDonaldsLogo from "../theme/images/mcdonalds-logo.png";
import React from "react";
import type { ReactElement } from "react";

const isAndroid = Platform.OS === "android";

const Header = (): ReactElement => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={McDonaldsLogo} />
      <View style={styles.shadow} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    borderColor: isAndroid ? "transparent" : "#ffffff",
    borderWidth: 1,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 2,
  },
});

export default Header;

import {
  Animated,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import McDonaldsLogo from "../../theme/images/mcdonalds-logo.png";
import React from "react";
import type { ReactElement } from "react";

const isAndroid = Platform.OS === "android";

interface HeaderProps {
  size?: "collapsed" | "expanded";
}

const Header = ({ size }: HeaderProps): ReactElement => {
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.container,
          {
            height: size === "expanded" ? 108 : 60,
            marginTop: isAndroid ? 20 : 0,
          },
        ]}
      >
        <Image
          source={McDonaldsLogo}
          style={[
            styles.image,
            size === "expanded"
              ? {
                  height: 108,
                  width: 108 /* marginTop: 12, marginBottom: 30 */,
                }
              : { height: 60, width: 60 /* marginTop: 12, marginBottom: 30 */ },
          ]}
        />
        <View style={styles.shadow} />
      </Animated.View>
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
  image: {
    flex: 1,
  },
});

export default Header;

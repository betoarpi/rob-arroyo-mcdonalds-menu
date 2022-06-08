import { Text, View } from "react-native";

import Header from "./Header";
import React from "react";
import type { ReactElement } from "react";
import { StatusBar } from "expo-status-bar";

const MainContainer = (): ReactElement => {
  return (
    <View>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
};

export default MainContainer;

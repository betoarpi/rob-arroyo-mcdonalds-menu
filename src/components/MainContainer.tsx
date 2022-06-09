import Layout from "./Layout";
import React from "react";
import type { ReactElement } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import useData from "../hooks/useData";

const MainContainer = (): ReactElement => {
  const { isLoading } = useData();
  return (
    <View style={{ flex: 1 }}>
      {!isLoading && <Layout />}
      <StatusBar style="auto" />
    </View>
  );
};

export default MainContainer;

import { StyleSheet, View } from "react-native";

import Layout from "./Layout";
import React from "react";
import type { ReactElement } from "react";
import { StatusBar } from "expo-status-bar";
import useData from "../hooks/useData";

const MainContainer = (): ReactElement => {
  const { isLoading } = useData();
  return (
    <View style={styles.container}>
      {!isLoading && <Layout />}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainContainer;

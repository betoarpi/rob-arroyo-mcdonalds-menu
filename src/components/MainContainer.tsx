import { StyleSheet, Text, View } from "react-native";

import Layout from "./Layout/Layout";
import React from "react";
import type { ReactElement } from "react";
import Skeleton from "./Skeleton/Skeleton";
import { StatusBar } from "expo-status-bar";
import useData from "../hooks/useData";

const MainContainer = (): ReactElement => {
  const { isLoading } = useData();
  return (
    <View style={styles.container}>
      {!isLoading ? <Layout /> : <Skeleton />}
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

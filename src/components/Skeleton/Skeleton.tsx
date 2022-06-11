import { StyleSheet, View } from "react-native";

import Header from "../Header/Header";
import React from "react";
import type { ReactElement } from "react";

const Skeleton = (): ReactElement => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.title} />

        <View style={styles.itemList}>
          <View style={styles.item} />
          <View style={styles.item} />
          <View style={styles.item} />
        </View>

        <View style={styles.title} />

        <View style={styles.itemList}>
          <View style={styles.item} />
          <View style={styles.item} />
          <View style={styles.item} />
        </View>

        <View style={styles.title} />

        <View style={styles.itemList}>
          <View style={styles.item} />
          <View style={styles.item} />
          <View style={styles.item} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 19,
  },
  title: {
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
    height: 24,
    marginBottom: 21,
    marginTop: 26,
    width: "60%",
  },
  itemList: {
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#f2f2f2",
    borderRadius: 6,
    height: 160,
    marginRight: 16,
    width: 160,
  },
});

export default Skeleton;

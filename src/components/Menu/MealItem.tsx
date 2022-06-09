import { Image, StyleSheet, Text, View } from "react-native";

import { Inter_100Thin } from "@expo-google-fonts/inter";
import { MenuMealProps } from "./MenuList";
import React from "react";

const MealItem = ({ name, url }: MenuMealProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: url }} resizeMode="contain" />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#D8D8D8",
    borderWidth: 1,
    borderRadius: 5,
    height: 160,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  name: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
  },
});

export default MealItem;

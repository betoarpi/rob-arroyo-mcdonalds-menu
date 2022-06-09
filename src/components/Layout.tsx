import { ScrollView, StyleSheet, View } from "react-native";

import Header from "./Header";
import { Inter_100Thin } from "@expo-google-fonts/inter";
import { MenuCategoryProps } from "./Menu/MenuList";
import MenuList from "./Menu/MenuList";
import React from "react";
import type { ReactElement } from "react";
import useData from "../hooks/useData";

const Layout = (): ReactElement => {
  const { data } = useData();

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {data?.menus && (
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.menuListContainer}>
            {data.menus.map((menu: MenuCategoryProps) => (
              <MenuList key={menu.name} {...menu} />
            ))}
            <View style={styles.scrollBottomSpace} />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuListContainer: {
    paddingTop: 26,
    paddingBottom: 200,
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollBottomSpace: {
    height: 100,
  },
});

export default Layout;

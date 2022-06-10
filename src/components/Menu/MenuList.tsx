import { FlatList, StyleSheet, Text, View } from "react-native";

import MealItem from "./MealItem";
import React from "react";
import type { ReactElement } from "react";

export interface MenuMealProps {
  name: string;
  description: string;
  price: number;
  url: string;
}

export interface MenuCategoryProps {
  name: string;
  items: MenuMealProps[];
}

const MenuList = ({ name, items }: MenuCategoryProps): ReactElement => {
  const renderItem = ({ item }: { item: MenuMealProps }) => {
    return <MealItem {...item} />;
  };

  const separatorItem = () => <View style={styles.separator} />;
  const footerItem = () => <View style={styles.footer} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        horizontal={true}
        ItemSeparatorComponent={separatorItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        style={styles.list}
        ListFooterComponent={footerItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 37,
  },
  title: {
    fontFamily: "Inter_700Bold",
    fontSize: 36,
    lineHeight: 36,
    marginBottom: 21,
    marginLeft: 19,
  },
  list: {
    paddingLeft: 19,
  },
  separator: {
    width: 16,
  },
  footer: {
    width: 60,
  },
});

export default MenuList;

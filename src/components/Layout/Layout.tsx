import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../Header/Header";
import { MenuCategoryProps } from "../Menu/MenuList";
import MenuList from "../Menu/MenuList";
import type { ReactElement } from "react";
import useData from "../../hooks/useData";
import { useThrottle } from "../../hooks/useThrottle";

const Layout = (): ReactElement => {
  const [headerSize, setHeaderSize] = useState<"collapsed" | "expanded">(
    "expanded"
  );
  const { data } = useData();

  const handleScroll = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y >= 80) {
      setHeaderSize("collapsed");
    } else {
      setHeaderSize("expanded");
    }
  }, []);

  const handleScrollThrottled = useThrottle(handleScroll, 1000);

  const handleScrollEnd = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y < 79) {
      setHeaderSize("expanded");
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header size={headerSize} />
      {data?.menus && (
        <View style={styles.scrollViewContainer}>
          <ScrollView
            onScroll={handleScrollThrottled}
            onMomentumScrollEnd={handleScrollEnd}
            scrollEventThrottle={32}
            style={styles.menuListContainer}
          >
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

import * as Haptics from "expo-haptics";

import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";

import MealModal from "./MealModal";
import { MenuMealProps } from "./MenuList";

const MealItem = (meal: MenuMealProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const { name, url } = meal;

  const handleModal = useCallback((showModal: boolean) => {
    showModal && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setModalVisible(showModal);
  }, []);

  return (
    <>
      <TouchableOpacity onPress={() => handleModal(true)}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: url }}
            resizeMode="contain"
          />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
      <MealModal
        isModalVisible={modalVisible}
        onPress={handleModal}
        meal={meal}
      />
    </>
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

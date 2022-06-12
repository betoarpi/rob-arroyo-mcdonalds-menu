import {
  Animated,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";

import { AntDesign } from "@expo/vector-icons";
import { MenuMealProps } from "./MenuList";
import type { ReactElement } from "react";

interface MealModalProps {
  isModalVisible: boolean;
  onPress: (showModal: boolean) => void;
  meal: MenuMealProps;
}

const MealModal = ({
  isModalVisible,
  onPress,
  meal,
}: MealModalProps): ReactElement => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      delay: 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseMenu = () => {
    fadeOut();

    setTimeout(() => {
      onPress(!isModalVisible);
    }, 100);
  };

  useEffect(() => {
    if (isModalVisible) {
      fadeIn();
    }
  }, [isModalVisible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleCloseMenu}
    >
      <TouchableWithoutFeedback onPress={handleCloseMenu}>
        <Animated.View
          style={[
            styles.centeredView,
            {
              opacity: fadeAnim,
            },
          ]}
        />
      </TouchableWithoutFeedback>
      <View style={styles.modalView}>
        <Pressable onPress={handleCloseMenu} style={styles.close}>
          <AntDesign name="closecircleo" size={24} color="#bfbfbf" />
        </Pressable>

        <ScrollView style={styles.containerFlex}>
          <View style={styles.containerFlex}>
            <Image
              style={styles.image}
              source={{ uri: meal.url }}
              resizeMode="contain"
            />
          </View>
          <View style={styles.containerFlex}>
            <Text style={styles.name}>{meal.name}</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>${meal.price}</Text>
            </View>
            <Text style={styles.description}>{meal.description}</Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  modalView: {
    flex: 1,
    width: "100%",
    marginTop: 80,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  containerFlex: {
    flex: 1,
  },
  name: {
    fontFamily: "Inter_700Bold",
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 21,
    textAlign: "center",
  },
  price: {
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 21,
    width: 78,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 16 * 1.35,
    textAlign: "center",
  },
  image: {
    height: 300,
    width: 300,
  },
  close: {
    alignSelf: "flex-end",
    marginRight: -12,
    marginTop: -12,
  },
});

export default MealModal;

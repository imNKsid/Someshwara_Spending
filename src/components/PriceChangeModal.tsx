import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";

const PriceChangeModal = ({
  modalVisible,
  setModalVisible,
  value,
  setValue,
  onBtnPress,
}: any) => {
  const [price, setPrice] = useState(value);

  const btnPress = () => {
    setModalVisible(false);
    setValue(price);
    onBtnPress(price);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Enter the value</Text>
          <TextInput
            value={`${price}`}
            onChangeText={(t) => setPrice(Number(t))}
            style={styles.textField}
            keyboardType={"numeric"}
          />
          <View style={styles.btnView}>
            <Button onPress={btnPress} title={"OK"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PriceChangeModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    padding: 30,
    paddingBottom: 10,
    borderRadius: 5,
  },
  textField: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
  },
  btnView: {},
});

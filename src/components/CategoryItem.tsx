import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { getCategoryImage } from "../utils/utils";
import { IMAGES } from "../assets/images";
import HorizontalProgressBar from "./HorizontalProgressBar";
import PriceChangeModal from "./PriceChangeModal";
import { COLORS } from "../constants";
import { dispatch } from "../redux/store/store";
import SpendThunk from "../redux/ducks/spend/spend-thunk";

type CategoryItemDataType = {
  category: {
    title: string;
    price: number;
  };
  updateCategory: (val: number) => void;
};

const CategoryItem = ({ category, updateCategory }: CategoryItemDataType) => {
  const { title, price } = category;
  const [showModal, setShowModal] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  const handlePriceChange = (val: number) => {
    setShowModal(false);
    updateCategory(val);
    dispatch<any>(SpendThunk.changeSpent({ title: title, price: val }));
  };

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryDetails}>
        <View style={[styles.imgNtext, { width: "40%" }]}>
          <Image source={getCategoryImage(title)} style={styles.categoryIcon} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.imgNtext}>
          <Text style={styles.text}>AED {newPrice}</Text>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Image source={IMAGES.edit} style={styles.editIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <HorizontalProgressBar progress={newPrice} title={title} />
      <PriceChangeModal
        modalVisible={showModal}
        setModalVisible={setShowModal}
        value={price}
        setValue={setNewPrice}
        onBtnPress={handlePriceChange}
      />
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgNtext: {
    flexDirection: "row",
    alignItems: "center",
    width: "30%",
  },
  categoryIcon: {
    width: 20,
    height: 20,
    // alignSelf: "center",
  },
  text: { fontSize: 16, marginLeft: 5, color: COLORS.black },
  editIcon: { width: 25, height: 25, marginLeft: 5 },
});

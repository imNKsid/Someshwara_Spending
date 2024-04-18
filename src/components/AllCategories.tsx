import { StyleSheet, View } from "react-native";
import React from "react";
import { IMAGES } from "../assets/images";
import { COLORS } from "../constants";
import Category from "./Category";

const AllCategories = () => {
  const categoriesData = [
    {
      circleImg: IMAGES.clothingCircle,
      categoryImg: IMAGES.clothing,
      barColor: COLORS.yellow,
      text: "Clothing",
    },
    {
      circleImg: IMAGES.foodCircle,
      categoryImg: IMAGES.shopping,
      barColor: COLORS.darkBlue,
      text: "Groceries",
    },
    {
      circleImg: IMAGES.healthCircle,
      categoryImg: IMAGES.health,
      barColor: COLORS.orange,
      text: "Health & Fitness",
    },
    {
      circleImg: IMAGES.foodCircle,
      categoryImg: IMAGES.food,
      barColor: COLORS.blue,
      text: "Food",
    },
    {
      circleImg: IMAGES.housingCircle,
      categoryImg: IMAGES.housing,
      barColor: COLORS.magenta,
      text: "Housing",
    },
    {
      circleImg: IMAGES.beautyCircle,
      categoryImg: IMAGES.beauty,
      barColor: COLORS.lightBlue,
      text: "Beauty",
    },
  ];

  return (
    <View style={styles.categoriesList}>
      <View style={styles.categoryRow}>
        {categoriesData.slice(0, 3).map((category, index) => (
          <Category
            key={index}
            circleImg={category.circleImg}
            categoryImg={category.categoryImg}
            barColor={category.barColor}
            text={category.text}
          />
        ))}
      </View>
      <View style={styles.categoryRow}>
        {categoriesData.slice(3).map((category, index) => (
          <Category
            key={index + 3}
            circleImg={category.circleImg}
            categoryImg={category.categoryImg}
            barColor={category.barColor}
            text={category.text}
          />
        ))}
      </View>
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  categoriesList: {
    marginTop: -100,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 20,
  },
});

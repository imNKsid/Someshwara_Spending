import { StyleSheet, View } from "react-native";
import React from "react";
import { IMAGES } from "../assets/images";
import { COLORS } from "../constants";
import Category from "./Category";
import SpendSelector from "../redux/ducks/spend/spend-selector";

const AllCategories = () => {
  const categoryBudget = SpendSelector.categorySpendBudget();
  const clothSpent = SpendSelector.clothSpent();
  const grocerySpent = SpendSelector.grocerySpent();
  const healthSpent = SpendSelector.healthSpent();
  const foodSpent = SpendSelector.foodSpent();
  const houseSpent = SpendSelector.houseSpent();
  const beautySpent = SpendSelector.beautySpent();

  const categoriesData = [
    {
      progress: clothSpent / categoryBudget,
      circleImg: IMAGES.clothingCircle,
      categoryImg: IMAGES.clothing,
      barColor: COLORS.yellow,
      text: "Clothing",
    },
    {
      progress: grocerySpent / categoryBudget,
      circleImg: IMAGES.foodCircle,
      categoryImg: IMAGES.shopping,
      barColor: COLORS.darkBlue,
      text: "Groceries",
    },
    {
      progress: healthSpent / categoryBudget,
      circleImg: IMAGES.healthCircle,
      categoryImg: IMAGES.health,
      barColor: COLORS.orange,
      text: "Health & Fitness",
    },
    {
      progress: foodSpent / categoryBudget,
      circleImg: IMAGES.foodCircle,
      categoryImg: IMAGES.food,
      barColor: COLORS.blue,
      text: "Food",
    },
    {
      progress: houseSpent / categoryBudget,
      circleImg: IMAGES.housingCircle,
      categoryImg: IMAGES.housing,
      barColor: COLORS.magenta,
      text: "Housing",
    },
    {
      progress: beautySpent / categoryBudget,
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
            progress={category.progress}
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
            progress={category.progress}
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

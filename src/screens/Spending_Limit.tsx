import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../assets/images";
import { COLORS } from "../constants";
import { CategoryItem } from "../components";

const categoriesData = [
  { title: "Groceries", price: 2000 },
  { title: "Clothing", price: 1500 },
  { title: "Beauty", price: 1000 },
  { title: "Health & Fitness", price: 2500 },
  { title: "Food", price: 3000 },
  { title: "Housing", price: 1500 },
];

const SpendingLimit = () => {
  const [categories, setCategories] = useState(categoriesData);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    const totalPrice = categories.reduce((sum, category) => {
      return sum + category.price;
    }, 0);

    setTotalSpend(totalPrice);
  }, [categories]);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={IMAGES.back} style={styles.arrowIcon} />
        <Text style={styles.heading}>Total Spending Limit</Text>
        <Text style={styles.totalAmt}>AED {totalSpend}</Text>
      </View>
      <View style={styles.bottomSection}>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            updateCategory={(newPrice: number) => {
              const updatedCategories = [...categories];
              updatedCategories[index].price = newPrice;
              setCategories(updatedCategories);
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default SpendingLimit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  topSection: {
    backgroundColor: COLORS.white,
    paddingTop: 60,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arrowIcon: { width: 25, height: 25 },
  heading: { marginTop: 20 },
  totalAmt: { fontSize: 30, marginBottom: 20 },
  bottomSection: { marginVertical: 10, marginHorizontal: 20 },
});

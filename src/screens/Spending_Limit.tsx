import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../assets/images";
import { COLORS } from "../constants";
import { CategoryItem } from "../components";
import { useNavigation } from "@react-navigation/native";
import SpendSelector from "../redux/ducks/spend/spend-selector";

const SpendingLimit = () => {
  const navigation = useNavigation();

  const totalSpent = SpendSelector.totalSpent();
  const clothSpent = SpendSelector.clothSpent();
  const grocerySpent = SpendSelector.grocerySpent();
  const healthSpent = SpendSelector.healthSpent();
  const foodSpent = SpendSelector.foodSpent();
  const houseSpent = SpendSelector.houseSpent();
  const beautySpent = SpendSelector.beautySpent();

  const categoriesData = [
    { title: "Groceries", price: grocerySpent },
    { title: "Clothing", price: clothSpent },
    { title: "Beauty", price: beautySpent },
    { title: "Health & Fitness", price: healthSpent },
    { title: "Food", price: foodSpent },
    { title: "Housing", price: houseSpent },
  ];

  const [categories, setCategories] = useState(categoriesData);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    const totalPrice = categories.reduce((sum, category) => {
      return sum + category.price;
    }, 0);

    setTotalSpend(totalPrice);
  }, [categories]);

  useEffect(() => {
    setTotalSpend(totalSpent);
  }, [totalSpent]);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TouchableOpacity onPress={handleBack}>
          <Image source={IMAGES.back} style={styles.arrowIcon} />
        </TouchableOpacity>
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
    paddingTop: Platform.OS === "ios" ? 60 : 20,
    paddingLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arrowIcon: { width: 25, height: 25 },
  heading: { marginTop: Platform.OS === "ios" ? 20 : 10, color: COLORS.black },
  totalAmt: { fontSize: 30, marginBottom: 20, color: COLORS.black },
  bottomSection: { marginVertical: 10, marginHorizontal: 20 },
});

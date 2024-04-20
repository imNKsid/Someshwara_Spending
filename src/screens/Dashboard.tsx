import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../constants";
import { IMAGES } from "../assets/images";
import SegmentedRoundDisplay from "react-native-segmented-round-display";
import { AllCategories } from "../components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import SpendSelector from "../redux/ducks/spend/spend-selector";
import { dispatch } from "../redux/store/store";
import SpendThunk from "../redux/ducks/spend/spend-thunk";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Dashboard = () => {
  const navigation: any = useNavigation();

  const totalBudget = SpendSelector.spendingBudget();
  const totalSpent = SpendSelector.totalSpent();
  const categoryBudget = SpendSelector.categorySpendBudget();
  const clothSpent = SpendSelector.clothSpent();
  const grocerySpent = SpendSelector.grocerySpent();
  const healthSpent = SpendSelector.healthSpent();
  const foodSpent = SpendSelector.foodSpent();
  const houseSpent = SpendSelector.houseSpent();
  const beautySpent = SpendSelector.beautySpent();

  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    new Date().getMonth()
  );
  const [totalArc, setTotalArc] = useState((totalBudget / totalBudget) * 100);
  const [filledArc, setFilledArc] = useState((totalSpent / totalBudget) * 100);
  const [centerText, setCenterText] = useState("Total Spendings");
  const [percentage, setPercentage] = useState(
    ((totalSpent / totalBudget) * 100).toFixed()
  );
  const [spendLimit, setSpendLimit] = useState(totalBudget);
  const [amountSpent, setAmountSpent] = useState(totalSpent);
  const [arcColor, setArcColor] = useState(COLORS.green);

  //Resetting everything on navigation change
  useFocusEffect(
    React.useCallback(() => {
      const per = ((totalSpent / totalBudget) * 100).toFixed();
      setPercentage(per);

      const arcTotal = (totalBudget / totalBudget) * 100;
      setTotalArc(arcTotal);
      const arcFilled = (totalSpent / totalBudget) * 100;
      setFilledArc(arcFilled);

      setSpendLimit(totalBudget);
      setAmountSpent(totalSpent);
      setArcColor(COLORS.green);
      setCenterText("Total Spendings");
    }, [totalSpent])
  );

  // Changing the values when the totalSpent changes in Edit screen
  useEffect(() => {
    const per = ((totalSpent / totalBudget) * 100).toFixed();
    setPercentage(per);

    const arcTotal = (totalBudget / totalBudget) * 100;
    setTotalArc(arcTotal);
    const arcFilled = (totalSpent / totalBudget) * 100;
    setFilledArc(arcFilled);

    setSpendLimit(totalBudget);
    setAmountSpent(totalSpent);
  }, [totalSpent]);

  const handleEdit = () => {
    navigation.navigate("SpendingLimit");
  };

  const handleNextMonth = () => {
    setSelectedMonthIndex((prevIndex) => (prevIndex + 1) % monthNames.length);
  };

  const handlePreviousMonth = () => {
    const newMonthIndex =
      (selectedMonthIndex - 1 + monthNames.length) % monthNames.length;
    setSelectedMonthIndex(newMonthIndex);
  };

  const currentYear =
    selectedMonthIndex > new Date().getMonth()
      ? new Date().getFullYear() - 1
      : new Date().getFullYear();

  const selectedMonth = monthNames[selectedMonthIndex];

  const handleCategorySelected = (title: string) => {
    setCenterText(title);

    const arcTotal = (categoryBudget / categoryBudget) * 100;
    setTotalArc(arcTotal);
    let per = "",
      arcFilled = 0,
      spentAmt = 0,
      color = COLORS.green;

    switch (title) {
      case "Beauty":
        arcFilled = (beautySpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = beautySpent;
        color = COLORS.lightBlue;
        break;
      case "Clothing":
        arcFilled = (clothSpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = clothSpent;
        color = COLORS.yellow;
        break;
      case "Groceries":
        arcFilled = (grocerySpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = grocerySpent;
        color = COLORS.darkBlue;
        break;
      case "Health & Fitness":
        arcFilled = (healthSpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = healthSpent;
        color = COLORS.orange;
        break;
      case "Food":
        arcFilled = (foodSpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = foodSpent;
        color = COLORS.blue;
        break;
      case "Housing":
        arcFilled = (houseSpent / categoryBudget) * 100;
        per = arcFilled.toFixed();
        spentAmt = houseSpent;
        color = COLORS.magenta;
        break;
      default:
        break;
    }
    setPercentage(per);
    setFilledArc(arcFilled);
    setSpendLimit(categoryBudget);
    setAmountSpent(spentAmt);
    setArcColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Spending Dashboard</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch<any>(SpendThunk.logout());
              navigation.navigate("Login");
            }}
          >
            <Text style={[styles.logoutText, styles.text]}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.textContainer}>
            <Text>Spending summary</Text>
            {selectedMonthIndex === new Date().getMonth() ? (
              <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={[styles.calendar, styles.textContainer]}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <Image source={IMAGES.leftArrow} style={styles.arrowIcon} />
            </TouchableOpacity>
            <Text style={styles.editText}>
              {selectedMonth} {currentYear}
            </Text>
            {selectedMonthIndex === new Date().getMonth() ? (
              <Image source={IMAGES.rightArrowFade} style={styles.arrowIcon} />
            ) : (
              <TouchableOpacity onPress={handleNextMonth}>
                <Image source={IMAGES.rightArrow} style={styles.arrowIcon} />
              </TouchableOpacity>
            )}
          </View>
          {selectedMonthIndex === new Date().getMonth() ? (
            <View>
              <View style={{ transform: [{ scaleX: -1 }] }}>
                <SegmentedRoundDisplay
                  segments={[
                    {
                      total: totalArc,
                      filled: filledArc,
                    },
                  ]}
                  totalArcSize={180}
                  radius={140}
                  emptyArcColor={COLORS.bgColor}
                  incompleteArcColor={arcColor}
                  filledArcWidth={10}
                  emptyArcWidth={10}
                />
              </View>
              <View style={styles.numNspendings}>
                <Text style={styles.percent}>{`${percentage}%`}</Text>
                <Text style={styles.totalText}>{centerText}</Text>
              </View>
              <View style={styles.endsText}>
                <View style={styles.spendLimit}>
                  <Text style={styles.spentText}>Spending Limit</Text>
                  <Text style={styles.priceText}>{`AED ${spendLimit}`}</Text>
                </View>
                <View style={styles.divider} />
                <View style={[styles.spendLimit, styles.amountSpent]}>
                  <Text style={styles.spentText}>Amount Spent</Text>
                  <Text style={styles.priceText}>{`AED ${amountSpent}`}</Text>
                </View>
              </View>
              <AllCategories handleCategorySelected={handleCategorySelected} />
            </View>
          ) : (
            <View>
              <SegmentedRoundDisplay
                segments={[
                  {
                    total: 100,
                    filled: 0,
                  },
                ]}
                totalArcSize={180}
                radius={140}
                emptyArcColor={COLORS.bgColor}
                incompleteArcColor={COLORS.green}
                filledArcWidth={10}
                emptyArcWidth={10}
              />
              <View style={styles.numNspendings}>
                <Text style={styles.percent}>0%</Text>
                <Text style={styles.totalText}>Total Spendings</Text>
              </View>
              <View style={styles.endsText}>
                <View style={styles.spendLimit}>
                  <Text style={styles.spentText}>Spending Limit</Text>
                  <Text style={styles.priceText}>AED 0</Text>
                </View>
                <View style={styles.divider} />
                <View style={[styles.spendLimit, styles.amountSpent]}>
                  <Text style={styles.spentText}>Amount Spent</Text>
                  <Text style={styles.priceText}>AED 0</Text>
                </View>
              </View>
              <View style={styles.noDataContainer}>
                <Image source={IMAGES.noData} style={styles.noDataIcon} />
                <Text style={[styles.totalText, styles.noDataText]}>
                  No Data to show
                </Text>
                <Text style={[styles.spentText, styles.descText]}>
                  It seems like you didn’t set spending limits for this month
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
  },
  mainContent: {
    marginVertical: Platform.OS === "ios" ? 80 : 30,
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: { color: COLORS.black, fontSize: 16 },
  logoutText: { marginRight: 10 },
  summaryContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 5,
    marginTop: 20,
    padding: 10,
  },
  editText: { textDecorationLine: "underline" },
  calendar: { marginTop: 20 },
  arrowIcon: { width: 25, height: 25 },
  numNspendings: {
    position: "absolute",
    top: 100,
    alignItems: "center",
    alignSelf: "center",
    // left: 115,
  },
  percent: { fontSize: 30 },
  totalText: { fontSize: 18 },
  endsText: {
    position: "absolute",
    top: 195,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  spendLimit: { alignItems: "center" },
  spentText: {},
  amountSpent: {},
  priceText: { fontWeight: "500", fontSize: 15 },
  divider: {
    width: 2,
    height: 30,
    backgroundColor: COLORS.bgColor,
    marginHorizontal: 70,
  },
  noDataContainer: {
    marginTop: -120,
    alignItems: "center",
    marginBottom: 10,
  },
  noDataIcon: {
    width: 100,
    height: 100,
  },
  noDataText: { fontSize: 22 },
  descText: {
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginHorizontal: 10,
  },

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

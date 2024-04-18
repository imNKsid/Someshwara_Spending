import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { IMAGES } from "../assets/images";
import SegmentedRoundDisplay from "react-native-segmented-round-display";
import { AllCategories } from "../components";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.textContainer}>
          <Text>Spending Dashboard</Text>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.textContainer}>
            <Text>Spending summary</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
          <View style={[styles.calendar, styles.textContainer]}>
            <Image source={IMAGES.leftArrow} style={styles.arrowIcon} />
            <Text style={styles.editText}>Edit</Text>
            <Image source={IMAGES.rightArrow} style={styles.arrowIcon} />
          </View>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <SegmentedRoundDisplay
              segments={[
                {
                  total: 100,
                  filled: 98,
                },
              ]}
              totalArcSize={180}
              radius={140}
              emptyArcColor={COLORS.bgColor}
              incompleteArcColor={COLORS.green}
              filledArcWidth={10}
              emptyArcWidth={10}
            />
          </View>
          <View style={styles.numNspendings}>
            <Text style={styles.percent}>50%</Text>
            <Text style={styles.totalText}>Total Spendings</Text>
          </View>
          <View style={styles.endsText}>
            <View style={styles.spendLimit}>
              <Text style={styles.spentText}>Spending Limit</Text>
              <Text style={styles.priceText}>Price</Text>
            </View>
            <View style={styles.divider} />
            <View style={[styles.spendLimit, styles.amountSpent]}>
              <Text style={styles.spentText}>Amount Spent</Text>
              <Text style={styles.priceText}>Price</Text>
            </View>
          </View>
          <View>
            <AllCategories />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdae0", //COLORS.bgColor,
  },
  mainContent: {
    marginVertical: 80,
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
    top: 180,
    alignItems: "center",
    left: 135,
  },
  percent: { fontSize: 30 },
  totalText: { fontSize: 18 },
  endsText: {
    position: "absolute",
    top: 270,
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
});

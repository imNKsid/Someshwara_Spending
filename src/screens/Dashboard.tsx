import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants";
import { IMAGES } from "../assets/images";
import SegmentedRoundDisplay from "react-native-segmented-round-display";
import { AllCategories } from "../components";

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
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(
    new Date().getMonth()
  );

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
              <AllCategories />
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
    marginVertical: 80,
    marginHorizontal: 20,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    top: 100,
    alignItems: "center",
    left: 115,
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
});

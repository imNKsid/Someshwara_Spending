import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getProgressBarColor, getProgressBarFilledColor } from "../utils/utils";
import { COLORS } from "../constants";

const HorizontalProgressBar = ({ progress = 0, title = "" }) => {
  const progressPercentage = Math.min(progress, 5000) / 5000; // Clamp progress between 0 and 5000

  const pointPositions = [0, 1, 2, 3, 4, 5].map((index) => index * (100 / 5)); // Calculate point positions as percentages

  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { backgroundColor: getProgressBarColor(title) },
        ]}
      >
        <View style={styles.filledBar}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${progressPercentage * 100}%`,
                backgroundColor: getProgressBarFilledColor(title),
              },
            ]}
          />
          <View
            style={[
              styles.circle,
              { backgroundColor: getProgressBarFilledColor(title) },
            ]}
          />
        </View>
      </View>
      <View style={styles.points}>
        {pointPositions.map((position, index) => (
          <View
            key={index}
            style={[
              styles.point,
              {
                left: `${position}%`,
                backgroundColor:
                  progressPercentage * 100 > position
                    ? COLORS.white
                    : getProgressBarFilledColor(title),
              },
            ]}
          />
        ))}
      </View>
      <View style={styles.progressBarLimits}>
        <Text style={styles.limitText}>0</Text>
        <Text style={styles.limitText}>5000</Text>
      </View>
    </View>
  );
};

export default HorizontalProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: { marginBottom: 10 },
  progressBar: {
    height: 3,
    marginHorizontal: 20,
    marginRight: 25,
    borderRadius: 10,
  },
  filledBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -7,
  },
  progressBarFill: {
    borderRadius: 10,
    height: 3,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
  },
  points: { marginHorizontal: 25, marginRight: 30, marginTop: -3 },
  point: {
    position: "absolute",
    width: 2,
    height: 3,
  },
  progressBarLimits: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  limitText: { fontSize: 12, fontWeight: "200", marginHorizontal: 15 },
});

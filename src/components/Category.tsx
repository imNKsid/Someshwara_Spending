import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ProgressCircle } from "react-native-svg-charts";

const Category = ({
  progress,
  circleImg,
  categoryImg,
  barColor,
  text,
  onClick,
}: any) => {
  return (
    <TouchableOpacity style={styles.iconNname} onPress={() => onClick(text)}>
      <View style={styles.progressBar}>
        <ProgressCircle
          style={{ height: 60, top: -10 }}
          progress={progress}
          progressColor={barColor}
          startAngle={0}
          endAngle={Math.PI * 2}
          strokeWidth={4}
          backgroundColor={"transparent"}
        />
      </View>
      <View style={styles.category}>
        <ImageBackground source={circleImg} style={styles.categoryCircle}>
          <Image source={categoryImg} style={styles.categoryIcon} />
        </ImageBackground>
      </View>
      <Text style={styles.categoryText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  iconNname: { alignItems: "center", width: 70 },
  progressBar: {
    top: 3,
    left: 3,
    height: 52,
    width: 52,
  },
  category: { position: "absolute" },
  categoryCircle: { width: 50, height: 50 },
  categoryIcon: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginTop: 12,
  },
  categoryText: { textAlign: "center", left: 4 },
});

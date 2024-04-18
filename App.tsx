import { StyleSheet, View } from "react-native";
import React from "react";
import { Dashboard } from "./src/screens";

const App = () => {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import React from "react";
import { View, Text } from "react-native";
import styles from "./titleStyle";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>IMC CALCULATOR</Text>
    </View>
  );
}

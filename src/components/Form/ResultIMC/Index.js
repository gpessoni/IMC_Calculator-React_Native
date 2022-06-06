import React from "react";
import { Text, View } from "react-native";
import styles from "./resultStyle";
 
export default function ResultImc(props) {
  return (
    <View>
      <Text style={styles.resultTitle}>
        {props.messageResultIMc} {props.resultImc}
      </Text>
    </View>
  );
}
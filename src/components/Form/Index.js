import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numeric" />
        <Text>Peso</Text>
        <TextInput placeholder="Ex. 73.63" keyboardType="numeric" />
      </View>
    </View>
  );
}

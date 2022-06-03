import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ResultImc from "./ResultIMC/Index";
import styles from "./formStyle";

export default function Form(props) {
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 86.300"
          keyboardType="numeric"
        />
        <Button title={textButton} onPress={() => validationImc()} />
      </View>
      <ResultImc messageResultIMc={messageImc} resultImc={imc} />
    </View>
  );
}

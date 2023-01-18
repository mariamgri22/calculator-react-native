import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const buttons = [
  ["C", "+", "-", "*", "/"],
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", ".", "="],
];

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [operation, setOperation] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handlePress = (value) => {
    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        setOperation(value);
        setPreviousValue(result);
        setResult("0");
        break;
      case "C":
        setResult("0");
        setPreviousValue(null);
        setOperation(null);
        break;
      case "=":
        switch (operation) {
          case "+":
            setResult(
              (parseFloat(previousValue) + parseFloat(result)).toString()
            );
            break;
          case "-":
            setResult(
              (parseFloat(previousValue) - parseFloat(result)).toString()
            );
            break;
          case "*":
            setResult(
              (parseFloat(previousValue) * parseFloat(result)).toString()
            );
            break;
          case "/":
            setResult(
              (parseFloat(previousValue) / parseFloat(result)).toString()
            );
            break;
          default:
            break;
        }
        setPreviousValue(null);
        setOperation(null);
        break;
      default:
        setResult(result === "0" ? value : result + value);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, index) => (
          <View key={index} style={styles.buttonRow}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5FCFF",
  },
  result: {
    fontSize: 50,
    textAlign: "right",
    marginBottom: 20,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    borderColor: "#333",
    padding: 30,
  },
  buttonText: {
    fontSize: 30,
  },
});

export default Calculator;

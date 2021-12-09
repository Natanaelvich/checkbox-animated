import { MaterialIcons } from "@expo/vector-icons";
import { MotiView } from "@motify/components";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const _size = 60;

export default function App() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setChecked(!checked)}>
        <MotiView style={styles.checkBox}>
          <MotiView
            animate={{
              width: checked ? _size : 0,
              height: checked ? _size : 0,
            }}
            transition={{
              type: "spring",
            }}
            style={{
              backgroundColor: "#6A6DE0",
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="check"
              size={checked ? _size * 0.9 : 0}
              color="#fff"
            />
          </MotiView>
        </MotiView>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  checkBox: {
    width: _size,
    height: _size,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#fff",
  },
});

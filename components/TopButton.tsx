import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function TopButtons() {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="chevron-back" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setLiked(!liked)}>
        <Ionicons
          name={liked ? "heart" : "heart-outline"}
          size={22}
          color={liked ? "gold" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40,
  },
});

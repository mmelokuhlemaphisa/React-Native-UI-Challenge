import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

// ---- Shared type ----
export type Tour = {
  id: number;
  image: string;
  title: string;
  days: string;
  rating: number;
  reviews: number;
};

export default function TourCard({ tour }: { tour: Tour }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.card}>
      <Image source={{ uri: tour.image }} style={styles.image} />

      {/* Heart button toggle */}
      <TouchableOpacity
        style={styles.heartSmall}
        onPress={() => setFavorite(!favorite)}
      >
        <Ionicons
          name={favorite ? "heart" : "heart-outline"}
          size={18}
          color={favorite ? "gold" : "black"}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{tour.title}</Text>
      <Text style={styles.days}>{tour.days}</Text>

      <View style={styles.row}>
        <Ionicons name="star-outline" size={14} color="black" />
        <Text style={styles.rating}>{tour.rating}</Text>
        <Text style={styles.reviews}>{tour.reviews} reviews</Text>
      </View>

      {/* Circular arrow button */}
      <TouchableOpacity style={styles.arrowButton}>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginRight: 18,
    marginTop: 12,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 16,
  },
  heartSmall: {
    position: "absolute",
    top: 18,
    right: 18,
    backgroundColor: "white",
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  title: { marginTop: 8, fontWeight: "bold", fontSize: 17 },
  days: { color: "grey", fontSize: 13, marginBottom: 4 },
  row: { flexDirection: "row", alignItems: "center" },
  rating: { marginLeft: 4, fontWeight: "bold" },
  reviews: { marginLeft: 4, color: "grey", fontSize: 12 },

  // --- New arrow button style ---
  arrowButton: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "#000",
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});

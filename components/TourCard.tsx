import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TourCard({ tour }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: tour.image }} style={styles.image} />

      <TouchableOpacity style={styles.heartSmall}>
        <Ionicons name="heart-outline" size={18} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>{tour.title}</Text>
      <Text style={styles.days}>{tour.days}</Text>

      <View style={styles.row}>
        <Ionicons name="star" size={14} color="#f2c200" />
        <Text style={styles.rating}>{tour.rating}</Text>
        <Text style={styles.reviews}>{tour.reviews} reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: 180, marginRight: 16, marginTop: 12 },
  image: { width: "100%", height: 110, borderRadius: 14 },
  heartSmall: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { marginTop: 8, fontWeight: "bold", fontSize: 16 },
  days: { color: "grey", fontSize: 12, marginBottom: 4 },
  row: { flexDirection: "row", alignItems: "center" },
  rating: { marginLeft: 4, fontWeight: "bold" },
  reviews: { marginLeft: 4, color: "grey", fontSize: 12 },
});

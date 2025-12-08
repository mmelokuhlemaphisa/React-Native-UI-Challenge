import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DestinationInfo() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Rio de Janeiro</Text>

      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <Ionicons name="location" size={16} color="green" />
          <Text style={styles.country}>Brazil</Text>
        </View>

        <View style={styles.row}>
          <Ionicons name="star" size={16} color="#f2c200" />
          <Text style={styles.rating}>5.0</Text>
          <Text style={styles.reviewCount}>143 reviews</Text>
        </View>
      </View>

      <Text style={styles.description}>
        Rio de Janeiro, often simply called Rio, is one of Brazil's most iconic
        cities, renowned for its landscapes, beaches, and culture.
      </Text>

      <Text style={styles.readMore}>Read more</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: -40,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    marginHorizontal: 10,
    elevation: 4,
  },
  title: { fontSize: 28, fontWeight: "bold" },
  row: { flexDirection: "row", alignItems: "center" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  country: { marginLeft: 4, fontSize: 14 },
  rating: { marginLeft: 4, fontWeight: "bold" },
  reviewCount: { marginLeft: 6, color: "grey" },
  description: { marginTop: 12, color: "#555", lineHeight: 20 },
  readMore: { marginTop: 8, color: "#007bff", fontWeight: "bold" },
});

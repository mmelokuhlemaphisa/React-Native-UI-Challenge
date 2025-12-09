import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import ToursList from "./ToursList";
import CountryFlag from "react-native-country-flag";

export default function DestinationInfo() {
  const [expanded, setExpanded] = useState(false);

  const paragraph =
    "Rio de Janeiro is a vibrant coastal city known for its beaches, culture, and iconic landmarks. From the Christ the Redeemer statue to the famous Copacabana shoreline, the city offers breathtaking views and unforgettable adventures.";

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Rio de Janeiro</Text>

      <View style={styles.rowBetween}>
        <View style={styles.row}>
          {/* Round Flag */}
          <View style={styles.flagContainer}>
            <CountryFlag
              isoCode="BR"
              size={25}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <Text style={styles.country}>Brazil</Text>
        </View>

        {/* Rating */}
        <View style={styles.ratingWrapper}>
          <View style={styles.row}>
            <Ionicons name="star-outline" size={16} color="black" />
            <Text style={styles.rating}>5.0</Text>
          </View>
          <Text style={styles.reviewCount}>143 reviews</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description} numberOfLines={expanded ? 5 : 2}>
        {paragraph}
      </Text>

      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.readMore}>
          {expanded ? "Read less" : "Read more"}
        </Text>
      </TouchableOpacity>

      <ToursList />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: -40,
    backgroundColor: "white",
    borderRadius: 50,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  country: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  ratingWrapper: {
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontWeight: "bold",
    fontSize: 18,
  },
  reviewCount: {
    marginTop: 2,
    color: "grey",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    marginTop: 14,
    color: "#444",
    fontSize: 15,
    lineHeight: 22,
  },
  readMore: {
    marginTop: 6,
    color: "#007bff",
    fontWeight: "bold",
    fontSize: 16,
  },
  flagContainer: {
   borderRadius: 20, // ⭐ makes it round
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
});

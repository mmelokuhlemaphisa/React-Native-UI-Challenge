import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import TourCard, { Tour } from "./TourCard";

export default function ToursSection() {
  const [showAll, setShowAll] = useState(false);

 const tours: Tour[] = [
   {
     id: 1,
     image:
       "https://images.pexels.com/photos/3727257/pexels-photo-3727257.jpeg",
     title: "Iconic Brazil",
     days: "8 days • from $899/person",
     rating: 4.6,
     reviews: 56,
   },
   {
     id: 2,
     image: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
     title: "Beach Paradise",
     days: "8 days • from $799/person",
     rating: 4.8,
     reviews: 41,
   },
   {
     id: 3,
     image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
     title: "Mountain Escape",
     days: "6 days • from $659/person",
     rating: 4.7,
     reviews: 30,
   },
   {
     id: 4,
     image: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
     title: "City Lights Tour",
     days: "5 days • from $599/person",
     rating: 4.5,
     reviews: 22,
   },
   {
     id: 5,
     image: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg",
     title: "Jungle Adventure",
     days: "7 days • from $749/person",
     rating: 4.9,
     reviews: 35,
   },
 ];


  const visibleTours = showAll ? tours : tours.slice(0, 2);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Upcoming Tours</Text>

        <TouchableOpacity onPress={() => setShowAll(!showAll)}>
          <Text style={styles.seeAll}>{showAll ? "See less" : "See all"}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={visibleTours}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TourCard tour={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  row: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  seeAll: {
    marginTop: 2,
    color: "grey",
    textDecorationLine: "underline",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

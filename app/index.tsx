import { ScrollView, View, StyleSheet } from "react-native";
import HeaderImage from "../components/HeaderImage";
import DestinationInfo from "../components/Information";


export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container}>
      <HeaderImage />
      <DestinationInfo />
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f6f6" },
});



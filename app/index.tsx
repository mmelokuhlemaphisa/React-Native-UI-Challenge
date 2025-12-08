import { ScrollView, View, StyleSheet } from "react-native";
import HeaderImage from "../components/HeaderImage";



export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container}>
      <HeaderImage />


      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});

import { ScrollView, View, StyleSheet } from "react-native";
import HeaderImage from "../components/HeaderImage";
import Information from "../components/Information";




export default function DestinationScreen() {
  return (
    <ScrollView style={styles.container}>
      <HeaderImage />
      {/* Additional content can be added here */}
      <Information />


      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});

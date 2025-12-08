import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
 <View style={styles.container}>
      <Image
        source={require("../assets/images/Golden Light on Majestic Peaks.png")}
        style={{ width: 500, height: 300 }}
      />


    
   </View>
 

  );
}


const styles = StyleSheet.create({
  container: {
  backgroundColor: "../assets/images/Golden Light on Majestic Peaks.png",
   height: 200,
   width: 400,

  },
});
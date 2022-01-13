import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  TouchableHighlight,
} from "react-native";

export default function App() {
  console.log("App Executed");
  const handlePress = () => console.log("Press!");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World!
      </Text>
      {alert("This Platform's OS is : " + Platform.OS)}
      <Button
        color="orange"
        title="Click Me!"
        onPress={() =>
          Alert.alert("Alert title", "message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            {
              text: "No",
              onPress: () => console.log("No"),
            },
          ])
        }
      />
      <TouchableHighlight onPress={() => console.log("Press!")}>
        <Image
          fadeDuration={100} // fade 100ms
          blurRadius={5}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

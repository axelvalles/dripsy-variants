import { Text, View } from "dripsy";

export default function index() {
  return (
    <View sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        sx={{ backgroundColor: "$gray500", padding: "$3", borderRadius: "$md" }}
      >
        <Text sx={{ color: "$white", fontSize: "$2xl" }}>Hello, Expo!</Text>
      </View>
    </View>
  );
}

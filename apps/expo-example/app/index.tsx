import { Button } from "@/components/Button";
import { Text, View } from "dripsy";

export default function index() {
  return (
    <View sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        sx={{ backgroundColor: "$gray500", padding: "$3", borderRadius: "$md" }}
      >
        <Text sx={{ color: "$white", fontSize: "$2xl" }}>Hello, Expo!</Text>
      </View>

      <View sx={{ my: "$2", width: "70%", gap: "$2" }}>
        <Button title="Button" variant="primary" size="md" />
        <Button title="Button" variant="secondary" size="md" />
        <Button title="Button" variant="link" size="md" />
      </View>
    </View>
  );
}

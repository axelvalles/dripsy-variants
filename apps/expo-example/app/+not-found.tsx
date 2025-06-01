import { Text, View } from "dripsy";

export default function NotFoundScreen() {
  return (
    <View>
      <Text sx={{ color: "$red500", fontSize: "$2xl", textAlign: "center" }}>
        404 - Page Not Found
      </Text>
      <Text sx={{ color: "$gray500", fontSize: "$md", textAlign: "center" }}>
        The page you are looking for does not exist.
      </Text>
    </View>
  );
}

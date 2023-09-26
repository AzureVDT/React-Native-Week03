import { StyleSheet, Text, View } from "react-native";
import Screen02 from "./screens/Screen02";

export default function App() {
    return (
        <View style={styles.container}>
            <Screen02></Screen02>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { RadioButton } from "react-native-paper";
import Button from "../components/button";

export default function Screen06() {
    const [checked, setChecked] = React.useState("Male");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>REGISTER</Text>
            <View style={{ width: "100%" }}>
                <TextInput placeholder="Name" style={styles.input}></TextInput>
                <TextInput placeholder="Phone" style={styles.input}></TextInput>
                <TextInput placeholder="Email" style={styles.input}></TextInput>
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                ></TextInput>
                <TextInput
                    placeholder="Birthday"
                    style={styles.input}
                ></TextInput>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                    }}
                >
                    <RadioButton
                        value="Male"
                        status={checked === "Male" ? "checked" : "unchecked"}
                        onPress={() => setChecked("Male")}
                    ></RadioButton>
                    <Text>Male</Text>
                    <RadioButton
                        value="Female"
                        status={checked === "Female" ? "checked" : "unchecked"}
                        onPress={() => setChecked("Female")}
                    ></RadioButton>
                    <Text>Female</Text>
                </View>
                <Button title="REGISTER" style={styles.button}></Button>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "400",
                        marginTop: 5,
                        textAlign: "center",
                    }}
                >
                    When you agree to terms and conditions
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "rgba(49, 170, 82, 0.19)",
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 82,
    },
    input: {
        backgroundColor: "#DDD",
        height: 54,
        marginBottom: 20,
        paddingLeft: 15,
        width: "100%",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "darkred",
        marginTop: 20,
    },
});

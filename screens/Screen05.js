import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Button from "../components/button";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={{ width: "100%" }}>
                <TextInput
                    placeholder="Name"
                    style={styles.txtName}
                ></TextInput>
                <TextInput
                    placeholder="Password"
                    style={styles.txtPassword}
                ></TextInput>
                <Button title="Login" style={styles.button}></Button>
                <Text
                    style={{
                        fontSize: 18,
                        marginBottom: 13,
                        textAlign: "center",
                    }}
                >
                    When you agree to terms and conditions
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        marginBottom: 13,
                        color: "#5D25FA",
                        textAlign: "center",
                    }}
                >
                    forgot your password?
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: "center",
                        marginBottom: 20,
                    }}
                >
                    Or login with
                </Text>
                <Image
                    source={require("../assets/iconLogin.png")}
                    style={{ width: "100%", objectFit: "cover", height: 50 }}
                ></Image>
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
    txtName: {
        backgroundColor: "#DDD",
        height: 54,
        marginBottom: 20,
        paddingLeft: 15,
        width: "100%",
    },
    txtPassword: {
        backgroundColor: "#DDD",
        height: 54,
        marginBottom: 59,
        paddingLeft: 15,
        width: "100%",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "darkred",
        marginBottom: 20,
    },
});

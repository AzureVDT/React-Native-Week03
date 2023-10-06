import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/button";

export default function Screen04() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CODE</Text>
            <Text style={styles.subTitle}>VERIFICATION</Text>
            <Text style={styles.text}>
                Enter ontime password sent on ++849092605798
            </Text>
            <View style={styles.box}>
                <View style={styles.boxItem}></View>
                <View style={styles.boxItem}></View>
                <View style={styles.boxItem}></View>
                <View style={styles.boxItem}></View>
                <View style={styles.boxItem}></View>
                <View style={styles.boxItem}></View>
            </View>
            <Button title="VERIFY CODE" style={styles.button}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundImage:
            "linear-gradient(180deg, rgba(0, 204, 249, 0) 0%, rgba(0, 204, 249, 0.580373) 30.21%, rgba(0, 204, 249, 0.697917) 49.48%, rgba(0, 204, 249, 0.359978) 70.83%, #00CCF9 100%)",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
        marginBottom: 62,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center",
        marginBottom: 22,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 14,
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        border: "1px solid #000",
        width: "300px",
        marginBottom: 34,
    },
    boxItem: {
        width: "50px",
        height: 50,
        border: "1px solid #000",
    },
    button: {
        width: "100%",
        height: "45px",
        backgroundColor: "#E3C000",
    },
});

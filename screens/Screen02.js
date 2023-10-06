import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../components/icon/Icon";
import Title from "../components/title/Title";
import Desc from "../components/desc/Desc";

export default function Screen02() {
    return (
        <View style={styles.container}>
            <Icon style={{ marginTop: "100px" }}></Icon>
            <Title text={`GROW YOUR BUSINESS`} style={styles.title}></Title>
            <Desc
                text={`We will help you to grow your business using online server`}
                style={styles.desc}
            ></Desc>
            <View style={styles.btnContainer}>
                <Button title="Login" color={`#E3C000`}></Button>
                <Button title="Sign Up" color={`#E3C000`}></Button>
            </View>
            <Text style={{ marginTop: "21px", fontWeight: "bold" }}>
                HOW WE WORK?
            </Text>
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
    },
    title: {
        fontSize: "25px",
        fontWeight: "bold",
        color: "#000000",
        marginTop: "52px",
        marginBottom: "62px",
    },
    desc: {
        fontSize: "15px",
        fontWeight: "bold",
        color: "#000000",
        marginBottom: "45px",
        textAlign: "center",
    },
    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "56px",
    },
});

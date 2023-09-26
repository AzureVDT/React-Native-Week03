import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title({ text, style }) {
    return <Text style={style}>{text}</Text>;
}

const styles = StyleSheet.create({});

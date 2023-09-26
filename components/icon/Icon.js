import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Icon({ style }) {
    return (
        <Text style={style}>
            <svg
                width={140}
                height={140}
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx={70}
                    cy={70}
                    r="62.5"
                    stroke="black"
                    strokeWidth={15}
                />
            </svg>
        </Text>
    );
}

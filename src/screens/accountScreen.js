import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const AccountScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button
            title="Click Here"
            onPress={() => navigation.navigate("Home")}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AccountScreen;
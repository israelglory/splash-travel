import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Search Screen</Text>
        <Button
            title="Click Here Search"
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

export default SearchScreen;
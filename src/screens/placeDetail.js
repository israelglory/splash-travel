import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';


const PlaceDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
        <Text>Place Detail Screen</Text>
        <Button
            title="Click Here Place Detail"
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

PlaceDetailsScreen.navigationOptions = {
    tabBarStyle: { display: "none" },
};

export default PlaceDetailsScreen;